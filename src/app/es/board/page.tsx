import { BreadcrumbSchema } from '@/lib/BreadcrumbSchema';
import {
  translateBoardTitle,
  translateSubscriberLabel,
  translateUnitRepresentativeLabel,
} from '@/lib/i18n';
import { pageMetadata } from '@/lib/metadata';
import { boardOfDirectors, subscribers, unitRepresentatives } from '@/lib/site';
import { DataTable } from '../../data-table';

export const metadata = pageMetadata({
  title: 'Junta Directiva',
  description:
    'La junta directiva y los representantes de unidad de George Merrick Troop 7 of Coral Gables, Inc.',
  path: '/board',
  locale: 'es',
});

export default function BoardPageEs() {
  return (
    <div className="flex flex-col gap-10">
      <BreadcrumbSchema path="/board" locale="es" />
      <section className="flex flex-col gap-4">
        <h1 className="font-heading text-2xl font-semibold text-forest">Junta Directiva</h1>
        <p className="leading-7 text-muted">
          La corporación está gobernada por una junta directiva voluntaria.
        </p>
        <DataTable
          headers={['Nombre', 'Cargo']}
          rows={boardOfDirectors.map((member) => ({
            key: member.name,
            primary: member.name,
            secondary: translateBoardTitle(member.title, 'es'),
          }))}
        />
      </section>

      <section className="flex flex-col gap-4 border-t border-rule pt-10">
        <h2 className="font-heading text-2xl font-semibold text-forest">
          Representantes de Unidad
        </h2>
        <p className="leading-7 text-muted">
          Cada unidad de Scouting registrada para reunirse en la Casa Scout nombra un representante
          que coordina con la corporación en nombre de su unidad.
        </p>
        <DataTable
          headers={['Nombre', 'Unidad']}
          rows={unitRepresentatives.map((rep) => ({
            key: `${rep.name}-${rep.unit}`,
            primary: rep.name,
            secondary: translateUnitRepresentativeLabel(rep.unit, 'es'),
          }))}
        />
      </section>

      <section className="flex flex-col gap-4 border-t border-rule pt-10">
        <h2 className="font-heading text-2xl font-semibold text-forest">Suscriptores</h2>
        <p className="leading-7 text-muted">
          Voluntarios adicionales que apoyan a la corporación fuera de los puestos de la junta y de
          representante de unidad.
        </p>
        <DataTable
          headers={['Nombre', 'Rol']}
          rows={subscribers.map((subscriber) => ({
            key: `${subscriber.name}-${subscriber.role}`,
            primary: subscriber.name,
            secondary: translateSubscriberLabel(subscriber.role, 'es'),
          }))}
        />
      </section>
    </div>
  );
}
