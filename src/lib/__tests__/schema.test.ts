import {
  generateBreadcrumbSchemaForPath,
  generateOrganizationSchema,
  generateWebsiteSchema,
} from '@/lib/schema';
import { siteConfig } from '@/lib/site';

describe('generateOrganizationSchema', () => {
  it('includes the EIN and address on file with the state', () => {
    const schema = generateOrganizationSchema();
    expect(schema['@type']).toBe('NGO');
    expect(schema.name).toBe(siteConfig.name);
    expect(schema.taxID).toBe(siteConfig.ein);
    expect(schema.address.streetAddress).toBe(siteConfig.address.street);
  });
});

describe('generateWebsiteSchema', () => {
  it('points at the configured site url', () => {
    const schema = generateWebsiteSchema();
    expect(schema.url).toBe(siteConfig.url);
  });
});

describe('generateBreadcrumbSchemaForPath', () => {
  it('builds a home crumb plus one entry per path segment', () => {
    const schema = generateBreadcrumbSchemaForPath('/board');
    expect(schema.itemListElement).toHaveLength(2);
    expect(schema.itemListElement[0].name).toBe('Home');
    expect(schema.itemListElement[1].name).toBe('Board');
    expect(schema.itemListElement[1].item).toBe(`${siteConfig.url}/board/`);
  });
});
