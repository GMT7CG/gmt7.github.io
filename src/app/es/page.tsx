import { homeTagline } from '@/lib/i18n';
import { pageMetadata } from '@/lib/metadata';
import { siteConfig } from '@/lib/site';

export const metadata = pageMetadata({
  title: `${siteConfig.name} | ${homeTagline.es}`,
  description:
    'La misión, visión y valores de George Merrick Troop 7 of Coral Gables, Inc., organización patrocinadora y custodia de la histórica Casa Scout para Troop 7, Troop 719, Pack 7 y Crew 7.',
  path: '/',
  locale: 'es',
});

export default function HomePageEs() {
  return (
    <div className="flex flex-col gap-10">
      <section className="flex flex-col gap-4">
        <h1 className="font-heading text-2xl font-semibold text-forest">{siteConfig.name}</h1>
      </section>

      <section className="flex flex-col gap-4 border-t border-rule pt-10">
        <h2 className="font-heading text-2xl font-semibold text-forest">Nuestra Misión</h2>
        <p className="leading-7 text-muted">
          Preservar el legado de cien años de Troop 7 de Coral Gables, y fortalecer y sostener la
          comunidad de Scouting alrededor de Troop 7, Troop 719, Crew 7 y Pack 7, apoyando el
          desarrollo juvenil, fomentando el compañerismo de por vida, sirviendo a nuestra comunidad,
          y preservando nuestra herencia compartida para las futuras generaciones.
        </p>
      </section>

      <section className="flex flex-col gap-4 border-t border-rule pt-10">
        <h2 className="font-heading text-2xl font-semibold text-forest">Nuestra Visión</h2>
        <p className="leading-7 text-muted">
          Una comunidad de Scouting próspera y multigeneracional donde los jóvenes se convierten en
          líderes con principios, los exalumnos permanecen conectados mediante el compañerismo y el
          servicio, nuestra comunidad se beneficia del compromiso cívico, y nuestra herencia
          compartida de Scouting perdura por generaciones.
        </p>
      </section>

      <section className="flex flex-col gap-6 border-t border-rule pt-10">
        <h2 className="font-heading text-2xl font-semibold text-forest">Nuestros Valores</h2>

        <div className="flex flex-col gap-2">
          <h3 className="font-heading text-lg font-semibold text-forest">
            Desarrollo Juvenil y Liderazgo
          </h3>
          <p className="leading-7 text-muted">
            Sostenemos los principios de Scouting America y empoderamos a los jóvenes para construir
            carácter, desarrollar habilidades de liderazgo, y descubrir su potencial como ciudadanos
            responsables.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-heading text-lg font-semibold text-forest">Servicio a los Demás</h3>
          <p className="leading-7 text-muted">
            Contribuimos con nuestro tiempo, talentos y recursos para servir a nuestros vecinos,
            fortalecer nuestra comunidad, y marcar una diferencia positiva más allá de nosotros
            mismos.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-heading text-lg font-semibold text-forest">
            Compañerismo entre Generaciones
          </h3>
          <p className="leading-7 text-muted">
            Fomentamos lazos duraderos entre Scouts, familias, voluntarios y exalumnos, a la vez que
            celebramos las identidades y tradiciones distintivas de Pack 7, Troop 7, Troop 719 y
            Crew 7 como una sola comunidad de Scouting.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-heading text-lg font-semibold text-forest">Responsabilidad Cívica</h3>
          <p className="leading-7 text-muted">
            Nos relacionamos de manera constructiva con la Ciudad de Coral Gables, el Condado de
            Miami-Dade, y nuestros socios comunitarios para promover la participación cívica, el
            servicio público, y el bien común.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-heading text-lg font-semibold text-forest">
            Custodia de Nuestra Herencia
          </h3>
          <p className="leading-7 text-muted">
            Honramos nuestra historia compartida preservando la histórica cabaña de Troop 7 y sus
            terrenos, sosteniendo nuestras tradiciones, y asegurando que las futuras generaciones
            tengan un lugar donde aprender, servir y pertenecer.
          </p>
        </div>
      </section>
    </div>
  );
}
