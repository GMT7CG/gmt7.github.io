import type { Locale } from './i18n';
import { generateBreadcrumbSchemaForPath } from './schema';

export function BreadcrumbSchema({ path, locale = 'en' }: { path: string; locale?: Locale }) {
  const schema = generateBreadcrumbSchemaForPath(path, locale);

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
