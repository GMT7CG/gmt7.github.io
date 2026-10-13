import type { Metadata } from 'next';
import { type Locale, localizePath } from './i18n';
import { siteConfig } from './site';

export interface PageMetadataOptions {
  title: string;
  description: string;
  /** Canonical, unprefixed path, e.g. '/about'. */
  path: string;
  locale?: Locale;
}

export function pageMetadata({
  title,
  description,
  path,
  locale = 'en',
}: PageMetadataOptions): Metadata {
  const localizedPath = localizePath(path, locale);
  const canonicalUrl = localizedPath === '/' ? siteConfig.url : `${siteConfig.url}${localizedPath}`;
  const enUrl = path === '/' ? siteConfig.url : `${siteConfig.url}${path}`;
  const esPath = localizePath(path, 'es');
  const esUrl = `${siteConfig.url}${esPath}`;
  const fullTitle = path === '/' ? title : `${title} | ${siteConfig.shortName}`;
  const image = `${siteConfig.url}/scout-hut.webp`;
  const ogLocale = locale === 'es' ? 'es_LA' : 'en_US';

  return {
    title: fullTitle,
    description,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        en: enUrl,
        es: esUrl,
        'x-default': enUrl,
      },
    },
    openGraph: {
      title: fullTitle,
      description,
      url: canonicalUrl,
      siteName: siteConfig.name,
      locale: ogLocale,
      type: 'website',
      images: [{ url: image }],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [image],
    },
  };
}
