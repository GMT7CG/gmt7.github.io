import { BreadcrumbSchema } from '@/lib/BreadcrumbSchema';
import { pageMetadata } from '@/lib/metadata';
import { siteConfig, sources } from '@/lib/site';
import { FactGrid } from '../../fact-grid';
import { ScoutingUnitsList } from '../../scouting-units-list';

export const metadata = pageMetadata({
  title: 'Acerca de e Historia',
  description:
    'La historia del Troop 7 Cabin en Coral Gables, desde el campamento scout de George Merrick en la década de 1920 hasta el rol actual de esta organización como propietaria y organización patrocinadora.',
  path: '/about',
  locale: 'es',
});

export default function AboutPageEs() {
  return (
    <div className="flex flex-col gap-10">
      <BreadcrumbSchema path="/about" locale="es" />
      <section className="flex flex-col gap-4">
        <h1 className="font-heading text-2xl font-semibold text-forest">Acerca de e Historia</h1>
        <p className="leading-7 text-muted">
          {siteConfig.name} es la corporación sin fines de lucro de Florida que posee y mantiene el
          Troop 7 Cabin, un sitio histórico de Coral Gables con raíces en la época fundacional de la
          ciudad, y es la organización patrocinadora de Troop 7, Troop 719, Pack 7 y Crew 7. No
          organiza las reuniones diarias del troop ni los programas de Scouting; eso sigue a cargo
          del liderazgo voluntario de cada unidad.
        </p>
        <FactGrid
          facts={[
            { label: 'Constituida', value: '9 de marzo de 1967' },
            { label: 'Documento de Florida', value: siteConfig.documentNumber },
            { label: 'EIN', value: siteConfig.ein },
            { label: 'Estado', value: '501(c)(3)' },
            { label: 'Registro FDACS', value: siteConfig.fdacsRegistrationNumber },
            {
              label: 'Vencimiento del registro FDACS',
              value: siteConfig.fdacsRegistrationExpiration,
            },
          ]}
        />
      </section>

      <section className="flex flex-col gap-4 border-t border-rule pt-10">
        <h2 className="font-heading text-2xl font-semibold text-forest">
          La Casa Scout, de la década de 1920 a hoy
        </h2>
        <p className="leading-7 text-muted">
          El urbanizador de Coral Gables George E. Merrick reservó un área para el Scouting a
          principios de la década de 1920 e hizo que su empresa constructora edificara una rústica
          cabaña de troncos para el Troop 7, usando principalmente pinos y postes telefónicos
          después del huracán de 1926. Merrick cedió aproximadamente dos acres a los Scouts; el
          terreno hoy se encuentra dentro de las calles del campo de golf Granada, en 1107 South
          Greenway Drive. El primer Scoutmaster del troop, Albert H. Bartle, lo dirigió durante
          dieciséis años, hasta 1938.
        </p>
        <p className="leading-7 text-muted">
          La cabaña original se incendió en 1971, dejando solo su chimenea, que aún permanece como
          un elemento histórico señalizado del sitio. Un edificio de reemplazo, terminado en 1976,
          fue dedicado al Scoutmaster Rex Hawkins, quien mantuvo activo al troop durante la Segunda
          Guerra Mundial. Los scouts y vecinos todavía llaman al edificio la &quot;Casa Scout.&quot;
          Un marcador histórico de Florida colocado en el sitio en 2007 documenta esta historia, y
          la Ciudad de Coral Gables ha ayudado a mantener la propiedad.
        </p>
        <p className="leading-7 text-muted">
          El Scouting de Coral Gables celebró un siglo completo en el sitio con una celebración del
          centenario el 13 de enero de 2024, con una histórica ceremonia de izamiento de bandera y
          demostraciones de habilidades tradicionales del Scouting. Rich Richards, quien se
          desempeñó como Scoutmaster del Troop 7 de 2015 a 2022, ahora sirve a esta corporación como
          Asesor Legal General.
        </p>
      </section>

      <section className="flex flex-col gap-4 border-t border-rule pt-10">
        <h2 className="font-heading text-2xl font-semibold text-forest">La corporación</h2>
        <p className="leading-7 text-muted">
          George Merrick Troop 7 of Coral Gables, Inc. fue constituida en Florida el 9 de marzo de
          1967 (Número de Documento de Florida {siteConfig.documentNumber}) para servir como el
          punto de contacto legal de la propiedad de la Casa Scout. La corporación posee el título
          de propiedad, administra el contrato de arrendamiento a largo plazo con la Ciudad de Coral
          Gables, y paga los servicios públicos de la propiedad. Es reconocida por el IRS como una
          organización benéfica pública 501(c)(3), EIN {siteConfig.ein}. Desde 2026, también se
          desempeña como la organización patrocinadora de Troop 7, Troop 719, Pack 7 y Crew 7,
          asumiendo la relación formal de carta con Scouting America en nombre de las cuatro
          unidades, junto con su rol continuo como custodia de la Casa Scout. Está registrada ante
          el Florida Department of Agriculture and Consumer Services bajo el Capítulo 496 (número de
          registro {siteConfig.fdacsRegistrationNumber}, con vencimiento el{' '}
          {siteConfig.fdacsRegistrationExpiration}), como lo exige la ley a las organizaciones sin
          fines de lucro de Florida que solicitan contribuciones caritativas.
        </p>
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

      <section className="flex flex-col gap-2 border-t border-rule pt-10">
        <h2 className="font-heading text-2xl font-semibold text-forest">Fuentes</h2>
        <ul className="list-inside list-disc space-y-1 text-sm text-muted">
          <li>
            <a
              href={sources.historicalMarker}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-forest transition-colors hover:text-camel"
            >
              Marcador histórico Troop 7 Log Cabin, HMdb.org (en inglés)
            </a>
          </li>
          <li>
            <a
              href={sources.floridaHeritageMarker}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-forest transition-colors hover:text-camel"
            >
              Florida Historical Marker Database (en inglés)
            </a>
          </li>
          <li>
            <a
              href={sources.centennialArticle}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-forest transition-colors hover:text-camel"
            >
              Coral Gables Troop 7 Celebrates 100 Years of Scouting, Community Newspapers (en
              inglés)
            </a>
          </li>
          <li>
            Registros del Florida Division of Corporations (Sunbiz) para el Número de Documento
            712382
          </li>
        </ul>
      </section>
    </div>
  );
}
