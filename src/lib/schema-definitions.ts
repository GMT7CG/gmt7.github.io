/**
 * JSON Schema definitions for Schema.org types, used to validate the
 * JSON-LD structured data generated in schema.ts.
 */

export const ngoSchemaDef = {
  type: 'object',
  required: ['@context', '@type', 'name', 'url', 'description', 'address'],
  properties: {
    '@context': {
      type: 'string',
      const: 'https://schema.org',
    },
    '@type': {
      type: 'string',
      const: 'NGO',
    },
    name: {
      type: 'string',
      minLength: 1,
    },
    url: {
      type: 'string',
      format: 'uri',
    },
    description: {
      type: 'string',
      minLength: 1,
    },
    address: {
      type: 'object',
      required: [
        '@type',
        'streetAddress',
        'addressLocality',
        'addressRegion',
        'postalCode',
        'addressCountry',
      ],
      properties: {
        '@type': {
          type: 'string',
          const: 'PostalAddress',
        },
        streetAddress: { type: 'string', minLength: 1 },
        addressLocality: { type: 'string', minLength: 1 },
        addressRegion: { type: 'string', minLength: 1 },
        postalCode: { type: 'string', minLength: 1 },
        addressCountry: { type: 'string', minLength: 1 },
      },
      additionalProperties: false,
    },
    foundingDate: {
      type: 'string',
      pattern: '^\\d{4}-\\d{2}-\\d{2}$',
    },
    taxID: {
      type: 'string',
      minLength: 1,
    },
  },
  additionalProperties: false,
};

export const webSiteSchemaDef = {
  type: 'object',
  required: ['@context', '@type', 'name', 'url'],
  properties: {
    '@context': {
      type: 'string',
      const: 'https://schema.org',
    },
    '@type': {
      type: 'string',
      const: 'WebSite',
    },
    name: {
      type: 'string',
      minLength: 1,
    },
    url: {
      type: 'string',
      format: 'uri',
    },
  },
  additionalProperties: false,
};

export const breadcrumbListSchemaDef = {
  type: 'object',
  required: ['@context', '@type', 'itemListElement'],
  properties: {
    '@context': {
      type: 'string',
      const: 'https://schema.org',
    },
    '@type': {
      type: 'string',
      const: 'BreadcrumbList',
    },
    itemListElement: {
      type: 'array',
      items: {
        type: 'object',
        required: ['@type', 'position', 'name', 'item'],
        properties: {
          '@type': {
            type: 'string',
            const: 'ListItem',
          },
          position: {
            type: 'integer',
            minimum: 1,
          },
          name: {
            type: 'string',
            minLength: 1,
          },
          item: {
            type: 'string',
            format: 'uri',
          },
        },
        additionalProperties: false,
      },
    },
  },
  additionalProperties: false,
};
