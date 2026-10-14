/**
 * Small, bounded translation dictionary for the short, repeated strings that
 * are displayed per locale (nav labels, footer headings, board titles, unit
 * representative labels, scouting unit descriptions). Page-specific prose
 * lives directly in each locale's page component, matching how English copy
 * is already written in this repo.
 *
 * The corporation's legal name, and the "Troop" / "Pack" / "Crew" unit
 * designations, are never translated -- they are the units' registered names.
 */

export type Locale = 'en' | 'es';

export const locales: Locale[] = ['en', 'es'];
export const defaultLocale: Locale = 'en';

export function localizePath(path: string, locale: Locale): string {
  if (locale === 'en') return path;
  return path === '/' ? '/es' : `/es${path}`;
}

export function otherLocale(locale: Locale): Locale {
  return locale === 'en' ? 'es' : 'en';
}

export function delocalizePath(pathname: string): string {
  if (pathname === '/es') return '/';
  if (pathname.startsWith('/es/')) return pathname.slice('/es'.length);
  return pathname;
}

export const nav: Record<Locale, Record<string, string>> = {
  en: {
    '/': 'Home',
    '/about': 'About',
    '/board': 'Board',
    '/meetings': 'Meetings',
    '/contact': 'Contact',
  },
  es: {
    '/': 'Inicio',
    '/about': 'Acerca de',
    '/board': 'Directiva',
    '/meetings': 'Reuniones',
    '/contact': 'Contacto',
  },
};

export const languageSwitchLabel: Record<Locale, string> = {
  en: 'Español',
  es: 'English',
};

export const menuLabels: Record<Locale, { open: string; close: string }> = {
  en: { open: 'Open menu', close: 'Close menu' },
  es: { open: 'Abrir menú', close: 'Cerrar menú' },
};

export const openAddressInMapsLabel: Record<Locale, string> = {
  en: 'Open address in Maps',
  es: 'Abrir dirección en Maps',
};

export const socialLinkLabel: Record<Locale, Record<'GitHub' | 'LinkedIn', string>> = {
  en: {
    GitHub: 'GMT7CG on GitHub',
    LinkedIn: 'GMT7CG on LinkedIn',
  },
  es: {
    GitHub: 'GMT7CG en GitHub',
    LinkedIn: 'GMT7CG en LinkedIn',
  },
};

export const footer: Record<
  Locale,
  {
    about: string;
    site: string;
    units: string;
    links: string;
    ein: string;
    designedBy: string;
  }
> = {
  en: {
    about: 'About',
    site: 'Site',
    units: 'Units',
    links: 'Links',
    ein: 'EIN',
    designedBy: 'Site designed and maintained by',
  },
  es: {
    about: 'Acerca de',
    site: 'Sitio',
    units: 'Unidades',
    links: 'Enlaces',
    ein: 'EIN',
    designedBy: 'Sitio diseñado y mantenido por',
  },
};

export const orgDescription: Record<Locale, string> = {
  en: 'George Merrick Troop 7 of Coral Gables, Inc. is the Florida not-for-profit corporation that holds the deed to the Troop 7 Cabin at 1107 South Greenway Drive, administers its long-term lease with the City of Coral Gables, and keeps the lights on for the Scouting units that meet there.',
  es: 'George Merrick Troop 7 of Coral Gables, Inc. es la corporación sin fines de lucro de Florida que posee el título del Troop 7 Cabin en 1107 South Greenway Drive, administra su contrato de arrendamiento a largo plazo con la Ciudad de Coral Gables, y mantiene los servicios para las unidades de Scouting que se reúnen ahí.',
};

export const homeTagline: Record<Locale, string> = {
  en: 'Stewards of the Historic Scout Hut in Coral Gables, FL',
  es: 'Custodios de la Histórica Casa Scout en Coral Gables, FL',
};

export const boardTitles: Record<Locale, Record<string, string>> = {
  en: {
    President: 'President',
    'Vice President': 'Vice President',
    'General Counsel (Authorized Representative)': 'General Counsel (Authorized Representative)',
    Treasurer: 'Treasurer',
    Secretary: 'Secretary',
  },
  es: {
    President: 'Presidente',
    'Vice President': 'Vicepresidente',
    'General Counsel (Authorized Representative)':
      'Asesor Legal General (Representante Autorizado)',
    Treasurer: 'Tesorero',
    Secretary: 'Secretaria',
  },
};

export const unitRepresentativeLabels: Record<Locale, Record<string, string>> = {
  en: {
    'Crew 7 Representative': 'Crew 7 Representative',
    'Troop 7 Representative': 'Troop 7 Representative',
    'Pack 7 Representative': 'Pack 7 Representative',
    'Troop 719 Representative': 'Troop 719 Representative',
  },
  es: {
    'Crew 7 Representative': 'Representante de Crew 7',
    'Troop 7 Representative': 'Representante de Troop 7',
    'Pack 7 Representative': 'Representante de Pack 7',
    'Troop 719 Representative': 'Representante de Troop 719',
  },
};

export const subscriberLabels: Record<Locale, Record<string, string>> = {
  en: {
    'Building Manager': 'Building Manager',
    'Historian and Alumni Liaison': 'Historian and Alumni Liaison',
    'Scouting America Liaison': 'Scouting America Liaison',
    'City Liaison': 'City Liaison',
  },
  es: {
    'Building Manager': 'Gerente del Edificio',
    'Historian and Alumni Liaison': 'Historiador y Enlace de Exalumnos',
    'Scouting America Liaison': 'Enlace de Scouting America',
    'City Liaison': 'Enlace con la Ciudad',
  },
};

export const scoutingUnitDescriptions: Record<Locale, Record<string, string>> = {
  en: {
    'Troop 7':
      'Scouts BSA troop for boys, chartered in the Everglades District, South Florida Council.',
    'Pack 7': 'Cub Scout pack for grades K-5, meeting in the Scout House alongside Troop 7.',
    'Troop 719': 'Scouts BSA troop for girls, registered since February 2019.',
    'Crew 7': 'Venturing crew for ages 14-20, meeting alongside the other units.',
  },
  es: {
    'Troop 7':
      'Troop de Scouts BSA para varones, registrado en el Distrito Everglades, Consejo South Florida.',
    'Pack 7':
      'Pack de Cub Scouts para los grados K-5, que se reúne en la Scout House junto con Troop 7.',
    'Troop 719': 'Troop de Scouts BSA para niñas, registrado desde febrero de 2019.',
    'Crew 7':
      'Crew de Venturing para edades de 14 a 20 años, que se reúne junto con las demás unidades.',
  },
};

/**
 * These three lookups are keyed by strings owned by site.ts (board titles, unit
 * representative roles, scouting unit names). Falling back to the English copy --
 * rather than rendering blank -- keeps a site.ts edit from silently breaking the
 * Spanish pages if the matching i18n.ts entry isn't updated in the same change.
 */
export function translateBoardTitle(title: string, locale: Locale): string {
  return boardTitles[locale][title] ?? boardTitles.en[title] ?? title;
}

export function translateUnitRepresentativeLabel(unit: string, locale: Locale): string {
  return unitRepresentativeLabels[locale][unit] ?? unitRepresentativeLabels.en[unit] ?? unit;
}

export function translateScoutingUnitDescription(unitName: string, locale: Locale): string {
  return scoutingUnitDescriptions[locale][unitName] ?? scoutingUnitDescriptions.en[unitName] ?? '';
}

export function translateSubscriberLabel(role: string, locale: Locale): string {
  return subscriberLabels[locale][role] ?? subscriberLabels.en[role] ?? role;
}
