import { homeTagline } from '@/lib/i18n';
import { pageMetadata } from '@/lib/metadata';
import { siteConfig } from '@/lib/site';

export const metadata = pageMetadata({
  title: `${siteConfig.name} | ${homeTagline.en}`,
  description:
    'The mission, vision, and values of George Merrick Troop 7 of Coral Gables, Inc., chartered organization and steward of the historic Scout Hut for Troop 7, Troop 719, Pack 7, and Crew 7.',
  path: '/',
});

export default function HomePage() {
  return (
    <div className="flex flex-col gap-10">
      <section className="flex flex-col gap-4">
        <h1 className="font-heading text-2xl font-semibold text-forest">{siteConfig.name}</h1>
        <p className="text-lg leading-8 text-muted">
          {siteConfig.name} exists so that the Scouting mission can keep happening at the Scout Hut.
          As the chartered organization and property-holding entity for Troop 7, Troop 719, Pack 7,
          and Crew 7, we steward the building and the charter so that our units&apos; volunteer
          leaders can focus on Scouts.
        </p>
      </section>

      <section className="flex flex-col gap-4 border-t border-rule pt-10">
        <h2 className="font-heading text-2xl font-semibold text-forest">Our Mission</h2>
        <p className="leading-7 text-muted">
          To preserve the one-hundred-year legacy of Troop 7 of Coral Gables, and to strengthen and
          sustain the Scouting community around Troop 7, Troop 719, Crew 7, and Pack 7 by supporting
          youth development, fostering lifelong fellowship, serving our community, and preserving
          our shared heritage for future generations.
        </p>
      </section>

      <section className="flex flex-col gap-4 border-t border-rule pt-10">
        <h2 className="font-heading text-2xl font-semibold text-forest">Our Vision</h2>
        <p className="leading-7 text-muted">
          A thriving, multigenerational Scouting community where young people grow into principled
          leaders, alumni remain connected through fellowship and service, our community benefits
          from civic engagement, and our shared Scouting heritage endures for generations to come.
        </p>
      </section>

      <section className="flex flex-col gap-6 border-t border-rule pt-10">
        <h2 className="font-heading text-2xl font-semibold text-forest">Our Values</h2>

        <div className="flex flex-col gap-2">
          <h3 className="font-heading text-lg font-semibold text-forest">
            Youth Development &amp; Leadership
          </h3>
          <p className="leading-7 text-muted">
            We uphold the principles of Scouting America and empower young people to build
            character, develop leadership skills, and discover their potential as responsible
            citizens.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-heading text-lg font-semibold text-forest">Service to Others</h3>
          <p className="leading-7 text-muted">
            We contribute our time, talents, and resources to serve our neighbors, strengthen our
            community, and make a positive difference beyond ourselves.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-heading text-lg font-semibold text-forest">
            Fellowship Across Generations
          </h3>
          <p className="leading-7 text-muted">
            We foster lasting bonds among Scouts, families, volunteers, and alumni, while embracing
            the distinct identities and traditions of Pack 7, Troop 7, Troop 719, and Crew 7 as one
            Scouting community.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-heading text-lg font-semibold text-forest">Civic Responsibility</h3>
          <p className="leading-7 text-muted">
            We engage constructively with the City of Coral Gables, Miami-Dade County, and community
            partners to promote civic participation, public service, and the common good.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-heading text-lg font-semibold text-forest">
            Stewardship of Our Heritage
          </h3>
          <p className="leading-7 text-muted">
            We honor our shared history by preserving the historic Troop 7 cabin and grounds,
            sustaining our traditions, and ensuring that future generations have a place to learn,
            serve, and belong.
          </p>
        </div>
      </section>
    </div>
  );
}
