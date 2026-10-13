import { pageMetadata } from '@/lib/metadata';
import { scoutingUnits, siteConfig } from '@/lib/site';

export const metadata = pageMetadata({
  title: siteConfig.name,
  description: siteConfig.description,
  path: '/',
});

export default function HomePage() {
  return (
    <div className="flex flex-col gap-10">
      <section className="flex flex-col gap-4">
        <h1 className="font-heading text-2xl font-semibold text-forest">{siteConfig.name}</h1>
        <p className="text-lg leading-8 text-muted">
          {siteConfig.name} does not run troop meetings or Scouting programs. It is the 501(c)(3)
          property-holding entity that keeps the historic Scout Hut standing for the units who use
          it: holding the deed, administering the long-term lease with the City of Coral Gables, and
          paying the property&apos;s utilities and upkeep.
        </p>
        <dl className="grid grid-cols-2 gap-x-6 gap-y-3 rounded border border-rule bg-plaque px-6 py-5 text-sm sm:grid-cols-4">
          <div>
            <dt className="text-muted">Incorporated</dt>
            <dd className="font-medium text-foreground">{siteConfig.incorporated}</dd>
          </div>
          <div>
            <dt className="text-muted">Florida document</dt>
            <dd className="font-medium text-foreground">{siteConfig.documentNumber}</dd>
          </div>
          <div>
            <dt className="text-muted">EIN</dt>
            <dd className="font-medium text-foreground">{siteConfig.ein}</dd>
          </div>
          <div>
            <dt className="text-muted">Status</dt>
            <dd className="font-medium text-foreground">501(c)(3)</dd>
          </div>
        </dl>
      </section>

      <section className="flex flex-col gap-4 border-t border-rule pt-10">
        <h2 className="font-heading text-2xl font-semibold text-forest">
          Scouting units at the Scout Hut
        </h2>
        <p className="leading-7 text-muted">
          Four chartered units meet weekly at 1107 South Greenway Drive. Reach them directly for
          meeting times and registration:
        </p>
        <ul className="flex flex-col divide-y divide-rule">
          {scoutingUnits.map((unit) => (
            <li key={unit.name} className="py-4 first:pt-0">
              <a
                href={unit.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-4"
              >
                <span className="font-medium text-forest">{unit.name}</span>
                <span className="text-sm text-muted">{unit.description}</span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
