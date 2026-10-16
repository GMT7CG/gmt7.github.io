'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { delocalizePath, type Locale, localizePath, nav } from '@/lib/i18n';

function segmentLabel(locale: Locale, canonicalPath: string, segment: string): string {
  return (
    nav[locale][canonicalPath] ??
    segment
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')
  );
}

export function Breadcrumbs({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const canonicalPath = delocalizePath(pathname);
  const segments = canonicalPath.split('/').filter(Boolean);

  if (segments.length === 0) return null;

  let accumulated = '';
  const trail = segments.map((segment) => {
    accumulated += `/${segment}`;
    return { canonicalPath: accumulated, label: segmentLabel(locale, accumulated, segment) };
  });

  return (
    <nav aria-label="Breadcrumb" className="mb-6 text-sm text-muted">
      <ol className="flex flex-wrap items-center gap-2">
        <li>
          <Link href={localizePath('/', locale)} className="transition-colors hover:text-camel">
            {nav[locale]['/']}
          </Link>
        </li>
        {trail.map((crumb, index) => {
          const isLast = index === trail.length - 1;
          return (
            <li key={crumb.canonicalPath} className="flex items-center gap-2">
              <span aria-hidden="true">/</span>
              {isLast ? (
                <span aria-current="page" className="text-forest">
                  {crumb.label}
                </span>
              ) : (
                <Link
                  href={localizePath(crumb.canonicalPath, locale)}
                  className="transition-colors hover:text-camel"
                >
                  {crumb.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
