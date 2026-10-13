import { BreadcrumbSchema } from '@/lib/BreadcrumbSchema';
import { pageMetadata } from '@/lib/metadata';
import { BulletList } from '../../bullet-list';

export const metadata = pageMetadata({
  title: 'Board Meetings',
  description:
    'When and where the George Merrick Troop 7 of Coral Gables board of directors meets, what is on the agenda, and how to join a Scout Hut work day.',
  path: '/meetings',
});

const agendaItems = [
  'Review minutes',
  'Review budget',
  'New business',
  'Walk the grounds',
  'Review suggestion box',
];

const workDayTasks = [
  'Trash pickup',
  'Sweeping and mopping',
  'Organizing the storage room',
  'Cleaning the bathrooms',
  'Trimming trees and bushes',
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
        <BulletList items={agendaItems} />
      </section>

      <section className="flex flex-col gap-4 border-t border-rule pt-10">
        <h2 className="font-heading text-2xl font-semibold text-forest">Volunteer Work Days</h2>
        <p className="leading-7 text-muted">
          We hold semi-regular work days to help clean up and maintain the Scout Hut grounds. Tasks
          include:
        </p>
        <BulletList items={workDayTasks} />
        <p className="leading-7 text-muted">Service hours are provided for scouts who help out.</p>
      </section>
    </div>
  );
}
