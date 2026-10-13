#!/usr/bin/env tsx
/**
 * Validates every JSON-LD schema this site emits against the JSON Schema
 * definitions in src/lib/schema-definitions.ts.
 */

import Ajv, { type ValidateFunction } from 'ajv';
import addFormats from 'ajv-formats';
import type { Locale } from '../src/lib/i18n';
import {
  generateBreadcrumbSchemaForPath,
  generateOrganizationSchema,
  generateWebsiteSchema,
} from '../src/lib/schema';
import {
  breadcrumbListSchemaDef,
  ngoSchemaDef,
  webSiteSchemaDef,
} from '../src/lib/schema-definitions';
import { sitePages } from '../src/lib/site';

const locales: Locale[] = ['en', 'es'];

interface ValidationError {
  schemaType: string;
  schemaName: string;
  errors: Array<{ path: string; message: string }>;
}

const ajv = new Ajv({ allErrors: true, strict: false });
addFormats(ajv);

const validateNgo = ajv.compile(ngoSchemaDef);
const validateWebSite = ajv.compile(webSiteSchemaDef);
const validateBreadcrumbList = ajv.compile(breadcrumbListSchemaDef);

const errors: ValidationError[] = [];

function validateSchema(
  schema: unknown,
  validator: ValidateFunction,
  schemaType: string,
  schemaName: string,
): void {
  const valid = validator(schema);
  if (!valid && validator.errors) {
    errors.push({
      schemaType,
      schemaName,
      errors: validator.errors.map((err) => ({
        path: err.instancePath || err.schemaPath || 'root',
        message: err.message || 'Validation error',
      })),
    });
  }
}

const pagePaths = sitePages.map((page) => page.path);

function main(): void {
  console.log('Validating Schema.org JSON-LD schemas...\n');

  for (const locale of locales) {
    console.log(`Validating Organization (NGO) schema [${locale}]...`);
    validateSchema(
      generateOrganizationSchema({ locale }),
      validateNgo,
      'NGO',
      `Root Organization [${locale}]`,
    );

    console.log(`Validating WebSite schema [${locale}]...`);
    validateSchema(
      generateWebsiteSchema({ locale }),
      validateWebSite,
      'WebSite',
      `Root WebSite [${locale}]`,
    );

    console.log(`Validating breadcrumb schemas [${locale}]...`);
    for (const path of pagePaths) {
      const breadcrumbSchema = generateBreadcrumbSchemaForPath(path, locale);
      validateSchema(
        breadcrumbSchema,
        validateBreadcrumbList,
        'BreadcrumbList',
        `Breadcrumb: ${path} [${locale}]`,
      );
    }
  }

  console.log(`\n${'='.repeat(60)}`);
  if (errors.length === 0) {
    console.log('All schemas validated successfully!');
    process.exit(0);
  } else {
    console.error(`Validation failed: ${errors.length} schema(s) have errors\n`);
    for (const error of errors) {
      console.error(`\n${error.schemaType}: ${error.schemaName}`);
      for (const err of error.errors) {
        console.error(`   - ${err.path}: ${err.message}`);
      }
    }
    console.error(`\n${'='.repeat(60)}`);
    process.exit(1);
  }
}

main();
