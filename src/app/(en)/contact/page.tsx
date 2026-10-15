import Link from 'next/link';
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
          does not run Scouting programs or troop meetings. Use the sections below to find the right
          contact for your question, whether it concerns the building itself, the corporation&apos;s
          board, or one of the units that meets there.
        </p>
      </section>

      <section className="flex flex-col gap-2 border-t border-rule pt-10">
        <h2 className="font-heading text-2xl font-semibold text-forest">General inquiries</h2>
        <p className="leading-7 text-muted">
          For general questions, email{' '}
          <a
            href={`mailto:${siteConfig.email}`}
            className="font-medium text-forest transition-colors hover:text-camel"
          >
            {siteConfig.email}
          </a>
          .
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
        <h2 className="font-heading text-2xl font-semibold text-forest">Board and governance</h2>
        <p className="leading-7 text-muted">
          The corporation is run by a volunteer board of directors. See the{' '}
          <Link
            href="/board"
            className="font-medium text-forest transition-colors hover:text-camel"
          >
            Board of Directors
          </Link>{' '}
          page for current officers, unit representatives, and other volunteers who support the
          corporation.
        </p>
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

      <section className="flex flex-col gap-2 border-t border-rule pt-10">
        <h2 className="font-heading text-2xl font-semibold text-forest">
          Fundraising and Donations
        </h2>
        <p className="leading-7 text-muted">
          Please contact us at{' '}
          <a
            href={`mailto:${siteConfig.email}`}
            className="font-medium text-forest transition-colors hover:text-camel"
          >
            {siteConfig.email}
          </a>
          . We will do our best to respond within 72 hours.
        </p>
      </section>
    </div>
  );
}
