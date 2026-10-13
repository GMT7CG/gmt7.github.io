import { BreadcrumbSchema } from '@/lib/BreadcrumbSchema';
import { pageMetadata } from '@/lib/metadata';

export const metadata = pageMetadata({
  title: 'Board Meetings',
  description:
    'When and where the George Merrick Troop 7 of Coral Gables board of directors meets, and what is on the agenda.',
  path: '/meetings',
});

const agendaItems = [
  'Review minutes',
  'Review budget',
  'New business',
  'Walk the grounds',
  'Review suggestion box',
];

export default function MeetingsPage() {
  return (
    <div className="flex flex-col gap-10">
      <BreadcrumbSchema path="/meetings" />
      <section className="flex flex-col gap-4">
        <h1 className="font-heading text-2xl font-semibold text-forest">Board Meetings</h1>
        <p className="leading-7 text-muted">
          The board meets the second Monday of every month, from 7 to 8pm, at the Scout Hut.
        </p>
        <p className="rounded border border-rule bg-plaque px-6 py-4 text-sm text-muted">
          This cadence is pending a board review and vote, and may change.
        </p>
      </section>

      <section className="flex flex-col gap-4 border-t border-rule pt-10">
        <h2 className="font-heading text-2xl font-semibold text-forest">Agenda</h2>
        <ul className="list-inside list-disc space-y-1 leading-7 text-muted">
          {agendaItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}
