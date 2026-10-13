import type { MetadataRoute } from 'next';
import { locales, localizePath } from '@/lib/i18n';
import { siteConfig, sitePages } from '@/lib/site';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.flatMap((locale) =>
    sitePages.map((page) => {
      const localizedPath = localizePath(page.path, locale);
      return {
        url: localizedPath === '/' ? siteConfig.url : `${siteConfig.url}${localizedPath}`,
        lastModified: new Date(),
      };
    }),
  );
}
