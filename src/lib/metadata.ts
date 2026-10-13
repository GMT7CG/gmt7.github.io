import type { Metadata } from 'next';
import { siteConfig } from './site';

export interface PageMetadataOptions {
  title: string;
  description: string;
  path: string;
}

export function pageMetadata({ title, description, path }: PageMetadataOptions): Metadata {
  const canonicalUrl = path === '/' ? siteConfig.url : `${siteConfig.url}${path}`;
  const fullTitle = path === '/' ? title : `${title} | ${siteConfig.shortName}`;
  const image = `${siteConfig.url}/scout-hut.webp`;

  return {
    title: fullTitle,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: fullTitle,
      description,
      url: canonicalUrl,
      siteName: siteConfig.name,
      locale: 'en_US',
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
