import { homeTagline, orgDescription } from '@/lib/i18n';
import { pageMetadata } from '@/lib/metadata';
import { siteConfig } from '@/lib/site';
import { FactGrid } from '../fact-grid';
import { ScoutingUnitsList } from '../scouting-units-list';

export const metadata = pageMetadata({
  title: `${siteConfig.name} | ${homeTagline.es}`,
  description: orgDescription.es,
  path: '/',
  locale: 'es',
});

export default function HomePageEs() {
  return (
    <div className="flex flex-col gap-10">
      <section className="flex flex-col gap-4">
        <h1 className="font-heading text-2xl font-semibold text-forest">{siteConfig.name}</h1>
        <p className="text-lg leading-8 text-muted">
          {siteConfig.name} no organiza las reuniones del troop ni los programas de Scouting. Es la
          entidad 501(c)(3) propietaria del inmueble que mantiene en pie la histórica Casa Scout
          para las unidades que la usan: posee el título de propiedad, administra el contrato de
          arrendamiento a largo plazo con la Ciudad de Coral Gables, y paga los servicios públicos y
          el mantenimiento de la propiedad.
        </p>
        <FactGrid
          facts={[
            { label: 'Constituida', value: '9 de marzo de 1967' },
            { label: 'Documento de Florida', value: siteConfig.documentNumber },
            { label: 'EIN', value: siteConfig.ein },
            { label: 'Estado', value: '501(c)(3)' },
          ]}
        />
      </section>

      <section className="flex flex-col gap-4 border-t border-rule pt-10">
        <h2 className="font-heading text-2xl font-semibold text-forest">
          Unidades de Scouting en la Casa Scout
        </h2>
        <p className="leading-7 text-muted">
          Cuatro unidades registradas se reúnen semanalmente en 1107 South Greenway Drive.
          Contáctalas directamente para conocer horarios de reuniones e inscripción:
        </p>
        <ScoutingUnitsList locale="es" />
      </section>
    </div>
  );
}
