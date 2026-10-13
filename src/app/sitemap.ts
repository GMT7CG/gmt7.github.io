import type { MetadataRoute } from 'next';
import { siteConfig, sitePages } from '@/lib/site';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  return sitePages.map((page) => ({
    url: page.path === '/' ? siteConfig.url : `${siteConfig.url}${page.path}`,
    lastModified: new Date(),
  }));
}
