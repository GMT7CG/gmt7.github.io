/**
 * Schema.org JSON-LD structured data generation utilities.
 */
import { type Locale, nav, orgDescription } from './i18n';
import { siteConfig } from './site';

export interface NgoSchema {
  '@context': string;
  '@type': 'NGO';
  name: string;
  url: string;
  description: string;
  inLanguage: string;
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
  inLanguage: string;
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

function inLanguageTag(locale: Locale): string {
  return locale === 'es' ? 'es-419' : 'en-US';
}

export function generateOrganizationSchema(
  options: { locale?: Locale; baseUrl?: string } = {},
): NgoSchema {
  const locale = options.locale ?? 'en';
  const baseUrl = options.baseUrl ?? (locale === 'es' ? `${siteConfig.url}/es` : siteConfig.url);

  return {
    '@context': 'https://schema.org',
    '@type': 'NGO',
    name: siteConfig.name,
    url: baseUrl,
    description: orgDescription[locale],
    inLanguage: inLanguageTag(locale),
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

export function generateWebsiteSchema(
  options: { locale?: Locale; baseUrl?: string } = {},
): WebsiteSchema {
  const locale = options.locale ?? 'en';
  const baseUrl = options.baseUrl ?? (locale === 'es' ? `${siteConfig.url}/es` : siteConfig.url);

  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.name,
    url: baseUrl,
    inLanguage: inLanguageTag(locale),
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

/** `path` is the canonical, unprefixed path, e.g. '/about'. */
export function generateBreadcrumbSchemaForPath(
  path: string,
  locale: Locale = 'en',
): BreadcrumbSchema {
  const segments = path.split('/').filter(Boolean);
  const localePrefix = locale === 'es' ? '/es' : '';
  const items: BreadcrumbItem[] = [
    { name: nav[locale]['/'], url: `${siteConfig.url}${localePrefix}` },
  ];
  let accumulated = '';
  for (const segment of segments) {
    accumulated += `/${segment}`;
    const label =
      nav[locale][accumulated] ??
      segment
        .split('-')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
    items.push({ name: label, url: `${siteConfig.url}${localePrefix}${accumulated}` });
  }
  return generateBreadcrumbSchema(items);
}
