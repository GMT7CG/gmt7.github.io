import Link from 'next/link';
import {
  footer,
  type Locale,
  localizePath,
  nav,
  openAddressInMapsLabel,
  orgDescription,
  scoutingUnitDescriptions,
} from '@/lib/i18n';
import { addressMapsUrl, externalLinks, scoutingUnits, siteConfig } from '@/lib/site';

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
