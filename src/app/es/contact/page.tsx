import Link from 'next/link';
import { BreadcrumbSchema } from '@/lib/BreadcrumbSchema';
import { localizePath } from '@/lib/i18n';
import { pageMetadata } from '@/lib/metadata';
import { siteConfig } from '@/lib/site';

export const metadata = pageMetadata({
  title: 'Contacto',
  description: 'Cómo comunicarse con George Merrick Troop 7 of Coral Gables, Inc.',
  path: '/contact',
  locale: 'es',
});

export default function ContactPageEs() {
  return (
    <div className="flex flex-col gap-10">
      <BreadcrumbSchema path="/contact" locale="es" />
      <section className="flex flex-col gap-4">
        <h1 className="font-heading text-2xl font-semibold text-forest">Contacto</h1>
        <p className="leading-7 text-muted">
          {siteConfig.name} se encarga de los asuntos de propiedad, arrendamiento y corporativos de
          la Casa Scout. No organiza programas de Scouting ni reuniones del troop. Usa las
          siguientes secciones para encontrar el contacto correcto para tu consulta, ya sea sobre el
          edificio mismo, la junta directiva de la corporación, o una de las unidades que se reúne
          ahí.
        </p>
      </section>

      <section className="flex flex-col gap-2 border-t border-rule pt-10">
        <h2 className="font-heading text-2xl font-semibold text-forest">
          Asuntos corporativos y de propiedad
        </h2>
        <p className="leading-7 text-muted">
          Escribe al agente registrado de la corporación a la dirección registrada en la Florida
          Division of Corporations:
        </p>
        <address className="not-italic leading-7 text-muted">
          George Merrick Troop 7 of Coral Gables, Inc.
          <br />
          c/o Richard L. Richards, Agente Registrado
          <br />
          201 Alhambra Circle, Suite 1060
          <br />
          Coral Gables, FL 33134
        </address>
      </section>

      <section className="flex flex-col gap-2 border-t border-rule pt-10">
        <h2 className="font-heading text-2xl font-semibold text-forest">
          Junta directiva y gobernanza
        </h2>
        <p className="leading-7 text-muted">
          La corporación es dirigida por una junta directiva voluntaria, con un puesto reservado
          como Enlace de Scouting America sin voto. Consulta la página de{' '}
          <Link
            href={localizePath('/board', 'es')}
            className="font-medium text-forest transition-colors hover:text-camel"
          >
            Junta Directiva
          </Link>{' '}
          para ver a los funcionarios actuales y los representantes de unidad que coordinan con
          ellos.
        </p>
      </section>

      <section className="flex flex-col gap-2 border-t border-rule pt-10">
        <h2 className="font-heading text-2xl font-semibold text-forest">Programas de Scouting</h2>
        <p className="leading-7 text-muted">
          Para información del programa, horarios de reuniones o inscripción del Troop 7, Pack 7,
          Crew 7, o Troop 719, contacta directamente a las unidades a través de{' '}
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
