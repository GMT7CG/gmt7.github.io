import { BreadcrumbSchema } from '@/lib/BreadcrumbSchema';
import { pageMetadata } from '@/lib/metadata';
import { boardOfDirectors, unitRepresentatives } from '@/lib/site';

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
          The corporation is governed by a volunteer board of directors. One seat, the Scouting
          America Liaison, is a non-voting position that keeps the board connected to the chartered
          units using the property.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-rule">
                <th className="py-2 pr-4 font-semibold">Name</th>
                <th className="py-2 font-semibold">Title</th>
              </tr>
            </thead>
            <tbody>
              {boardOfDirectors.map((member) => (
                <tr key={member.name} className="border-b border-rule/60">
                  <td className="py-2 pr-4">{member.name}</td>
                  <td className="py-2 text-muted">
                    {member.title}
                    {!member.votingMember && <span className="text-muted"> (non-voting)</span>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="flex flex-col gap-4 border-t border-rule pt-10">
        <h2 className="font-heading text-2xl font-semibold text-forest">Unit Representatives</h2>
        <p className="leading-7 text-muted">
          Each Scouting unit chartered to meet at the Scout Hut names a representative who
          coordinates with the corporation on behalf of their unit.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-rule">
                <th className="py-2 pr-4 font-semibold">Name</th>
                <th className="py-2 font-semibold">Unit</th>
              </tr>
            </thead>
            <tbody>
              {unitRepresentatives.map((rep) => (
                <tr key={`${rep.name}-${rep.unit}`} className="border-b border-rule/60">
                  <td className="py-2 pr-4">{rep.name}</td>
                  <td className="py-2 text-muted">{rep.unit}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
