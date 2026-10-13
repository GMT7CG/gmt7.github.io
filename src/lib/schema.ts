/**
 * Schema.org JSON-LD structured data generation utilities.
 */
import { siteConfig } from './site';

export interface NgoSchema {
  '@context': string;
  '@type': 'NGO';
  name: string;
  url: string;
  description: string;
  address: {
    '@type': 'PostalAddress';
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  foundingDate?: string;
  taxID?: string;
}

export interface WebsiteSchema {
  '@context': string;
  '@type': 'WebSite';
  name: string;
  url: string;
}

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export interface BreadcrumbSchema {
  '@context': string;
  '@type': 'BreadcrumbList';
  itemListElement: Array<{
    '@type': 'ListItem';
    position: number;
    name: string;
    item: string;
  }>;
}

export function generateOrganizationSchema(baseUrl: string = siteConfig.url): NgoSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'NGO',
    name: siteConfig.name,
    url: baseUrl,
    description: siteConfig.description,
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.state,
      postalCode: siteConfig.address.zip,
      addressCountry: 'US',
    },
    foundingDate: '1967-03-09',
    taxID: siteConfig.ein,
  };
}

export function generateWebsiteSchema(baseUrl: string = siteConfig.url): WebsiteSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.name,
    url: baseUrl,
  };
}

export function generateBreadcrumbSchema(items: BreadcrumbItem[]): BreadcrumbSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function generateBreadcrumbSchemaForPath(path: string): BreadcrumbSchema {
  const segments = path.split('/').filter(Boolean);
  const items: BreadcrumbItem[] = [{ name: 'Home', url: siteConfig.url }];
  let accumulated = '';
  for (const segment of segments) {
    accumulated += `/${segment}`;
    const name = segment
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
    items.push({ name, url: `${siteConfig.url}${accumulated}` });
  }
  return generateBreadcrumbSchema(items);
}
