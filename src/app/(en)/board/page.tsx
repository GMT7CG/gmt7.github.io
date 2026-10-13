import { BreadcrumbSchema } from '@/lib/BreadcrumbSchema';
import { pageMetadata } from '@/lib/metadata';
import { boardOfDirectors, subscribers, unitRepresentatives } from '@/lib/site';
import { DataTable } from '../../data-table';

export const metadata = pageMetadata({
  title: 'Board of Directors',
  description:
    'The board of directors and unit representatives of George Merrick Troop 7 of Coral Gables, Inc.',
  path: '/board',
});

export default function BoardPage() {
  return (
    <div className="flex flex-col gap-10">
      <BreadcrumbSchema path="/board" />
      <section className="flex flex-col gap-4">
        <h1 className="font-heading text-2xl font-semibold text-forest">Board of Directors</h1>
        <p className="leading-7 text-muted">
          The corporation is governed by a volunteer board of directors.
        </p>
        <DataTable
          headers={['Name', 'Title']}
          rows={boardOfDirectors.map((member) => ({
            key: member.name,
            primary: member.name,
            secondary: member.title,
          }))}
        />
      </section>

      <section className="flex flex-col gap-4 border-t border-rule pt-10">
        <h2 className="font-heading text-2xl font-semibold text-forest">Unit Representatives</h2>
        <p className="leading-7 text-muted">
          Each Scouting unit chartered to meet at the Scout Hut names a representative who
          coordinates with the corporation on behalf of their unit.
        </p>
        <DataTable
          headers={['Name', 'Unit']}
          rows={unitRepresentatives.map((rep) => ({
            key: `${rep.name}-${rep.unit}`,
            primary: rep.name,
            secondary: rep.unit,
          }))}
        />
      </section>

      <section className="flex flex-col gap-4 border-t border-rule pt-10">
        <h2 className="font-heading text-2xl font-semibold text-forest">Subscribers</h2>
        <p className="leading-7 text-muted">
          Additional volunteers who support the corporation outside the board and unit
          representative seats.
        </p>
        <DataTable
          headers={['Name', 'Role']}
          rows={subscribers.map((subscriber) => ({
            key: `${subscriber.name}-${subscriber.role}`,
            primary: subscriber.name,
            secondary: subscriber.role,
          }))}
        />
      </section>
    </div>
  );
}
