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

  it('defaults to English and tags the url at the site root', () => {
    const schema = generateOrganizationSchema();
    expect(schema.inLanguage).toBe('en-US');
    expect(schema.url).toBe(siteConfig.url);
  });

  it('tags Spanish schemas with es-419 and the /es url', () => {
    const schema = generateOrganizationSchema({ locale: 'es' });
    expect(schema.inLanguage).toBe('es-419');
    expect(schema.url).toBe(`${siteConfig.url}/es`);
  });
});

describe('generateWebsiteSchema', () => {
  it('points at the configured site url', () => {
    const schema = generateWebsiteSchema();
    expect(schema.url).toBe(siteConfig.url);
  });

  it('points the Spanish schema at the /es url', () => {
    const schema = generateWebsiteSchema({ locale: 'es' });
    expect(schema.url).toBe(`${siteConfig.url}/es`);
    expect(schema.inLanguage).toBe('es-419');
  });
});

describe('generateBreadcrumbSchemaForPath', () => {
  it('builds a home crumb plus one entry per path segment', () => {
    const schema = generateBreadcrumbSchemaForPath('/board');
    expect(schema.itemListElement).toHaveLength(2);
    expect(schema.itemListElement[0].name).toBe('Home');
    expect(schema.itemListElement[1].name).toBe('Board');
    expect(schema.itemListElement[1].item).toBe(`${siteConfig.url}/board`);
  });

  it('builds Spanish crumbs with /es-prefixed urls', () => {
    const schema = generateBreadcrumbSchemaForPath('/board', 'es');
    expect(schema.itemListElement[0]).toEqual({
      '@type': 'ListItem',
      position: 1,
      name: 'Inicio',
      item: `${siteConfig.url}/es`,
    });
    expect(schema.itemListElement[1]).toEqual({
      '@type': 'ListItem',
      position: 2,
      name: 'Directiva',
      item: `${siteConfig.url}/es/board`,
    });
  });
});
