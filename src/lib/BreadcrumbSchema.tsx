import { generateBreadcrumbSchemaForPath } from './schema';

export function BreadcrumbSchema({ path }: { path: string }) {
  const schema = generateBreadcrumbSchemaForPath(path);

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
