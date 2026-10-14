export const siteConfig = {
  name: 'George Merrick Troop 7 of Coral Gables, Inc.',
  shortName: 'George Merrick Troop 7 of Coral Gables',
  url: 'https://gmt7.org',
  description:
    'George Merrick Troop 7 of Coral Gables, Inc. is the Florida not-for-profit corporation that holds the deed to the Troop 7 Cabin at 1107 South Greenway Drive, administers its long-term lease with the City of Coral Gables, and keeps the lights on for the Scouting units that meet there.',
  email: 'contact@gmt7.org',
  ein: '59-6194123',
  incorporated: 'March 9, 1967',
  documentNumber: '712382',
  address: {
    street: '1107 South Greenway Drive',
    city: 'Coral Gables',
    state: 'FL',
    zip: '33134',
  },
};

export const addressMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${siteConfig.address.street}, ${siteConfig.address.city}, ${siteConfig.address.state} ${siteConfig.address.zip}`,
)}`;

export interface BoardMember {
  name: string;
  title: string;
}

export const boardOfDirectors: BoardMember[] = [
  { name: 'Brandon Shoop', title: 'President' },
  { name: 'Chris Grabowski', title: 'Vice President' },
  { name: 'Rich Richards', title: 'General Counsel (Authorized Representative)' },
  { name: 'Clayton Odor', title: 'Treasurer' },
  { name: 'Christine Casas', title: 'Secretary' },
];

export interface UnitRepresentative {
  name: string;
  unit: string;
}

export const unitRepresentatives: UnitRepresentative[] = [
  { name: 'Anna Brown', unit: 'Crew 7 Representative' },
  { name: 'Brandon Shoop', unit: 'Troop 7 Representative' },
  { name: 'Chris Grabowski', unit: 'Pack 7 Representative' },
  { name: 'Christine Casas', unit: 'Troop 7 Representative' },
  { name: 'Christine Yormack', unit: 'Troop 719 Representative' },
  { name: 'Clayton Odor', unit: 'Troop 7 Representative' },
  { name: 'Emily Khan', unit: 'Troop 7 Representative' },
];

export interface Subscriber {
  name: string;
  role: string;
}

export const subscribers: Subscriber[] = [
  { name: 'Chris Vidal', role: 'Building Manager' },
  { name: 'Fred Kimball', role: 'Historian and Alumni Liaison' },
  { name: 'Emily Khan', role: 'Scouting America Liaison' },
  { name: 'Don Slesnick III', role: 'City Liaison' },
];

export interface ScoutingUnit {
  name: string;
  url: string;
}

export const scoutingUnits: ScoutingUnit[] = [
  {
    name: 'Troop 7',
    url: 'https://troop7coralgables.org/',
  },
  {
    name: 'Pack 7',
    url: 'https://pack7.troop7coralgables.org/',
  },
  {
    name: 'Troop 719',
    url: 'https://troop719.troop7coralgables.org/',
  },
  {
    name: 'Crew 7',
    url: 'https://troop7coralgables.org/',
  },
];

export interface ExternalLink {
  name: string;
  url: string;
}

export const externalLinks: ExternalLink[] = [
  { name: 'South Florida Council', url: 'https://sfcscouting.org/' },
  { name: 'City of Coral Gables', url: 'https://www.coralgables.com/' },
];

export interface SocialLink {
  name: 'GitHub' | 'LinkedIn';
  url: string;
}

export const socialLinks: SocialLink[] = [
  { name: 'GitHub', url: 'https://github.com/GMT7CG' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/company/gmt7cg' },
];

export const sources = {
  historicalMarker: 'https://www.hmdb.org/m.asp?m=74784',
  floridaHeritageMarker: 'https://markers.flheritage.com/home/details/512',
  centennialArticle:
    'https://communitynewspapers.com/coral-gables-news/coral-gables-troop-7-celebrates-100-years-of-scouting/',
};

export interface SitePage {
  path: string;
  label: string;
}

export const sitePages: SitePage[] = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/board', label: 'Board' },
  { path: '/meetings', label: 'Meetings' },
  { path: '/contact', label: 'Contact' },
];
