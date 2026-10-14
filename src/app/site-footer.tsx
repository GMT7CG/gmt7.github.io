import Link from 'next/link';
import type { ReactNode } from 'react';
import {
  footer,
  type Locale,
  localizePath,
  nav,
  openAddressInMapsLabel,
  orgDescription,
  scoutingUnitDescriptions,
  socialLinkLabel,
} from '@/lib/i18n';
import { addressMapsUrl, externalLinks, scoutingUnits, siteConfig, socialLinks } from '@/lib/site';

const socialIcons: Record<'GitHub' | 'LinkedIn', ReactNode> = {
  GitHub: (
    <svg viewBox="0 0 24 24" width={20} height={20} fill="currentColor" aria-hidden="true">
      <path d="M12 0.5C5.65 0.5 0.5 5.65 0.5 12c0 5.08 3.29 9.38 7.86 10.9 0.57 0.1 0.78-0.25 0.78-0.55 0-0.27-0.01-1.17-0.02-2.12-3.2 0.7-3.88-1.36-3.88-1.36-0.52-1.33-1.28-1.68-1.28-1.68-1.04-0.71 0.08-0.7 0.08-0.7 1.16 0.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36 0.96 0.1-0.74 0.4-1.25 0.73-1.54-2.56-0.29-5.25-1.28-5.25-5.7 0-1.26 0.45-2.29 1.19-3.1-0.12-0.29-0.52-1.46 0.11-3.05 0 0 0.97-0.31 3.18 1.18 0.92-0.26 1.91-0.38 2.89-0.38 0.98 0 1.97 0.13 2.89 0.38 2.21-1.49 3.18-1.18 3.18-1.18 0.63 1.59 0.23 2.76 0.11 3.05 0.74 0.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.41-5.27 5.69 0.42 0.36 0.77 1.07 0.77 2.15 0 1.56-0.01 2.81-0.01 3.19 0 0.31 0.21 0.66 0.79 0.55C20.21 21.38 23.5 17.08 23.5 12 23.5 5.65 18.35 0.5 12 0.5Z" />
    </svg>
  ),
  LinkedIn: (
    <svg viewBox="0 0 24 24" width={20} height={20} fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-0.02-3.04-1.85-3.04-1.86 0-2.15 1.45-2.15 2.94v5.67H9.33V9h3.41v1.56h0.05c0.48-0.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.38 4.28 5.47v6.27ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z" />
    </svg>
  ),
};

const designerUrl = 'https://aglflorida.com';

export function SiteFooter({ locale }: { locale: Locale }) {
  const copy = footer[locale];

  return (
    <footer className="bg-gradient-to-br from-[#16210f] to-forest text-background/90">
      <div className="mx-auto max-w-5xl px-6 py-12">
        <div className="flex flex-col gap-10 md:flex-row md:gap-16">
          <div className="md:max-w-sm">
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-background">
              {copy.about}
            </h3>
            <p className="text-sm text-background/75">{orgDescription[locale]}</p>
            <p className="mt-4 flex items-start gap-1.5 text-sm text-background/75">
              <svg
                viewBox="0 0 24 24"
                width={16}
                height={16}
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                className="mt-0.5 shrink-0 text-camel"
              >
                <path d="M12 21c-4.5-4.5-7-8.03-7-11a7 7 0 1 1 14 0c0 2.97-2.5 6.5-7 11Z" />
                <circle cx="12" cy="10" r="2.5" />
              </svg>
              <a
                href={addressMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={openAddressInMapsLabel[locale]}
                className="transition-colors hover:text-camel"
              >
                {siteConfig.address.street}, {siteConfig.address.city}, {siteConfig.address.state}{' '}
                {siteConfig.address.zip}
              </a>
            </p>
            <p className="mt-1 text-sm text-background/75">
              {copy.ein} {siteConfig.ein}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:flex-1 md:justify-end">
            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-background">
                {copy.site}
              </h3>
              <ul className="space-y-2 text-sm">
                {Object.entries(nav[locale]).map(([path, label]) => (
                  <li key={path}>
                    <Link
                      href={localizePath(path, locale)}
                      className="transition-colors hover:text-camel"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-background">
                {copy.units}
              </h3>
              <ul className="space-y-2 text-sm">
                {scoutingUnits.map((unit) => (
                  <li key={unit.name}>
                    <a
                      href={unit.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-colors hover:text-camel"
                      title={scoutingUnitDescriptions[locale][unit.name]}
                    >
                      {unit.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-background">
                {copy.links}
              </h3>
              <ul className="space-y-2 text-sm">
                {externalLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-colors hover:text-camel"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex items-center gap-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={socialLinkLabel[locale][link.name]}
                    className="text-background/90 transition-colors hover:text-camel"
                  >
                    {socialIcons[link.name]}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-background/20 pt-6 text-xs text-background/60">
          {copy.designedBy}{' '}
          <a
            href={designerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium transition-colors hover:text-camel"
          >
            AGL Consulting
          </a>
        </div>
      </div>
    </footer>
  );
}
