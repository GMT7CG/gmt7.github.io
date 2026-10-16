import { BreadcrumbSchema } from '@/lib/BreadcrumbSchema';
import { pageMetadata } from '@/lib/metadata';
import { BulletList } from '../../bullet-list';
import { NextMeetingDates } from '../../next-meeting-dates';

export const metadata = pageMetadata({
  title: 'Reuniones de la Junta',
  description:
    'Cuándo y dónde se reúne la junta directiva de George Merrick Troop 7 of Coral Gables, qué hay en la agenda, y cómo unirte a un día de trabajo en la Casa Scout.',
  path: '/meetings',
  locale: 'es',
});

const agendaItems = [
  'Revisión de actas',
  'Revisión del presupuesto',
  'Asuntos nuevos',
  'Recorrido por el terreno',
  'Revisión del buzón de sugerencias',
];

const workDayTasks = [
  'Recolección de basura',
  'Barrido y trapeado',
  'Organización del cuarto de almacenamiento',
  'Limpieza de los baños',
  'Poda de árboles y arbustos',
];

export default function MeetingsPageEs() {
  return (
    <div className="flex flex-col gap-10">
      <BreadcrumbSchema path="/meetings" locale="es" />
      <section className="flex flex-col gap-4">
        <h1 className="font-heading text-2xl font-semibold text-forest">Reuniones de la Junta</h1>
        <p className="leading-7 text-muted">
          La junta se reúne el segundo lunes de cada mes, de 6:30 a 7:30 p.m., en la sede
          corporativa (la Casa Scout), excepto en días feriados.
        </p>
        <NextMeetingDates locale="es" />
      </section>

      <section className="flex flex-col gap-4 border-t border-rule pt-10">
        <h2 className="font-heading text-2xl font-semibold text-forest">Agenda</h2>
        <BulletList items={agendaItems} />
      </section>

      <section className="flex flex-col gap-4 border-t border-rule pt-10">
        <h2 className="font-heading text-2xl font-semibold text-forest">
          Días de Trabajo Voluntario
        </h2>
        <p className="leading-7 text-muted">
          Organizamos días de trabajo semi-regulares para ayudar a limpiar y mantener el terreno de
          la Casa Scout. Las tareas incluyen:
        </p>
        <BulletList items={workDayTasks} />
        <p className="leading-7 text-muted">
          Se otorgan horas de servicio a los scouts que participan.
        </p>
      </section>
    </div>
  );
}
