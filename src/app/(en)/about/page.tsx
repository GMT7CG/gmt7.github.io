import { BreadcrumbSchema } from '@/lib/BreadcrumbSchema';
import { pageMetadata } from '@/lib/metadata';
import { siteConfig, sources } from '@/lib/site';
import { FactGrid } from '../../fact-grid';
import { ScoutingUnitsList } from '../../scouting-units-list';

export const metadata = pageMetadata({
  title: 'About and History',
  description:
    "The history of the Troop 7 Cabin in Coral Gables, from George Merrick's 1920s scout camp to this nonprofit's role today as property owner and chartered organization.",
  path: '/about',
});

export default function AboutPage() {
  return (
    <div className="flex flex-col gap-10">
      <BreadcrumbSchema path="/about" />
      <section className="flex flex-col gap-4">
        <h1 className="font-heading text-2xl font-semibold text-forest">About and History</h1>
        <p className="leading-7 text-muted">
          {siteConfig.name} is the Florida not-for-profit corporation that owns and maintains the
          Troop 7 Cabin, a Coral Gables landmark with roots in the city&apos;s founding era, and
          serves as the chartered organization for Troop 7, Troop 719, Pack 7, and Crew 7. It does
          not run day-to-day troop meetings or Scouting programs; that stays with each unit&apos;s
          own volunteer leadership.
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
          The Scout Hut, 1920s to today
        </h2>
        <p className="leading-7 text-muted">
          Coral Gables developer George E. Merrick set aside an area for Scouting in the early 1920s
          and had his construction company build a rustic log cabin for Troop 7, using mostly pine
          trees and telephone poles after the 1926 hurricane. Merrick deeded roughly two acres to
          the Scouts; the land now sits inside the fairways of the Granada Golf Course at 1107 South
          Greenway Drive. The troop&apos;s first Scoutmaster, Albert H. Bartle, led Troop 7 for
          sixteen years, until 1938.
        </p>
        <p className="leading-7 text-muted">
          The original log cabin burned in 1971, leaving only its chimney, which still stands as a
          marked historic feature of the site. A replacement building, completed in 1976, was
          dedicated to Scoutmaster Rex Hawkins, who kept the troop active through World War II.
          Scouts and neighbors still call the building the &quot;Scout Hut.&quot; A Florida
          historical marker placed at the site in 2007 documents this history, and the City of Coral
          Gables has helped maintain the property.
        </p>
        <p className="leading-7 text-muted">
          Coral Gables Scouting marked a full century at the site with a centennial celebration on
          January 13, 2024, featuring a historic flag ceremony and demonstrations of traditional
          Scouting skills. Rich Richards, who served as Troop 7&apos;s Scoutmaster from 2015 to
          2022, now serves this corporation as General Counsel.
        </p>
      </section>

      <section className="flex flex-col gap-4 border-t border-rule pt-10">
        <h2 className="font-heading text-2xl font-semibold text-forest">The corporation</h2>
        <p className="leading-7 text-muted">
          George Merrick Troop 7 of Coral Gables, Inc. was incorporated in Florida on{' '}
          {siteConfig.incorporated} (Florida Document Number {siteConfig.documentNumber}) to serve
          as the legal point of contact for the Scout Hut property. The corporation holds the deed,
          administers the long-term lease with the City of Coral Gables, and pays the
          property&apos;s utilities. It is recognized by the IRS as a 501(c)(3) public charity, EIN{' '}
          {siteConfig.ein}. Since 2026, it has also served as the chartered organization for Troop
          7, Troop 719, Pack 7, and Crew 7, carrying the formal charter relationship with Scouting
          America on behalf of all four units alongside its continuing role as steward of the Cabin.
        </p>
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

      <section className="flex flex-col gap-2 border-t border-rule pt-10">
        <h2 className="font-heading text-2xl font-semibold text-forest">Sources</h2>
        <ul className="list-inside list-disc space-y-1 text-sm text-muted">
          <li>
            <a
              href={sources.historicalMarker}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-forest transition-colors hover:text-camel"
            >
              Troop 7 Log Cabin historical marker, HMdb.org
            </a>
          </li>
          <li>
            <a
              href={sources.floridaHeritageMarker}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-forest transition-colors hover:text-camel"
            >
              Florida Historical Marker Database
            </a>
          </li>
          <li>
            <a
              href={sources.centennialArticle}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-forest transition-colors hover:text-camel"
            >
              Coral Gables Troop 7 Celebrates 100 Years of Scouting, Community Newspapers
            </a>
          </li>
          <li>Florida Division of Corporations (Sunbiz) filings for Document Number 712382</li>
        </ul>
      </section>
    </div>
  );
}
