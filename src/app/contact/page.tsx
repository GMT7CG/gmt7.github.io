import { BreadcrumbSchema } from '@/lib/BreadcrumbSchema';
import { pageMetadata } from '@/lib/metadata';
import { siteConfig } from '@/lib/site';

export const metadata = pageMetadata({
  title: 'Contact',
  description: 'How to reach George Merrick Troop 7 of Coral Gables, Inc.',
  path: '/contact',
});

export default function ContactPage() {
  return (
    <div className="flex flex-col gap-10">
      <BreadcrumbSchema path="/contact" />
      <section className="flex flex-col gap-4">
        <h1 className="font-heading text-2xl font-semibold text-forest">Contact</h1>
        <p className="leading-7 text-muted">
          {siteConfig.name} handles property, lease, and corporate matters for the Scout Hut. It
          does not run Scouting programs or troop meetings.
        </p>
      </section>

      <section className="flex flex-col gap-2 border-t border-rule pt-10">
        <h2 className="font-heading text-2xl font-semibold text-forest">
          Corporation and property matters
        </h2>
        <p className="leading-7 text-muted">
          Write to the corporation&apos;s registered agent at the address on file with the Florida
          Division of Corporations:
        </p>
        <address className="not-italic leading-7 text-muted">
          George Merrick Troop 7 of Coral Gables, Inc.
          <br />
          c/o Richard L. Richards, Registered Agent
          <br />
          201 Alhambra Circle, Suite 1060
          <br />
          Coral Gables, FL 33134
        </address>
      </section>

      <section className="flex flex-col gap-2 border-t border-rule pt-10">
        <h2 className="font-heading text-2xl font-semibold text-forest">Scouting programs</h2>
        <p className="leading-7 text-muted">
          For Troop 7, Pack 7, Crew 7, or Troop 719 program information, meeting times, or
          registration, contact the units directly through{' '}
          <a
            href="https://troop7coralgables.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-forest transition-colors hover:text-camel"
          >
            troop7coralgables.org
          </a>
          .
        </p>
      </section>
    </div>
  );
}
