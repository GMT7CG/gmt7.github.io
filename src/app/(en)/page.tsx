import { homeTagline } from '@/lib/i18n';
import { pageMetadata } from '@/lib/metadata';
import { siteConfig } from '@/lib/site';
import { FactGrid } from '../fact-grid';
import { ScoutingUnitsList } from '../scouting-units-list';

export const metadata = pageMetadata({
  title: `${siteConfig.name} | ${homeTagline.en}`,
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
        <FactGrid
          facts={[
            { label: 'Incorporated', value: siteConfig.incorporated },
            { label: 'Florida document', value: siteConfig.documentNumber },
            { label: 'EIN', value: siteConfig.ein },
            { label: 'Status', value: '501(c)(3)' },
          ]}
        />
      </section>

      <section className="flex flex-col gap-4 border-t border-rule pt-10">
        <h2 className="font-heading text-2xl font-semibold text-forest">
          Scouting units at the Scout Hut
        </h2>
        <p className="leading-7 text-muted">
          Four chartered units meet weekly at 1107 South Greenway Drive. Reach them directly for
          meeting times and registration:
        </p>
        <ScoutingUnitsList locale="en" />
      </section>
    </div>
  );
}
