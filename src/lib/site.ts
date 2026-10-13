export const siteConfig = {
  name: 'George Merrick Troop 7 of Coral Gables, Inc.',
  shortName: 'George Merrick Troop 7 of Coral Gables',
  url: 'https://gmt7.org',
  description:
    'George Merrick Troop 7 of Coral Gables, Inc. is the Florida not-for-profit corporation that holds the deed to the historic Troop 7 Log Cabin at 1107 South Greenway Drive, administers its long-term lease with the City of Coral Gables, and keeps the lights on for the Scouting units that meet there.',
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

export interface BoardMember {
  name: string;
  title: string;
  votingMember: boolean;
}

export const boardOfDirectors: BoardMember[] = [
  { name: 'Brandon Shoop', title: 'President', votingMember: true },
  { name: 'Chris Grabowski', title: 'Vice President', votingMember: true },
  {
    name: 'Rich Richards',
    title: 'General Counsel (Authorized Representative)',
    votingMember: true,
  },
  { name: 'Clayton Odor', title: 'Treasurer', votingMember: true },
  { name: 'Christine Cases', title: 'Secretary', votingMember: true },
  { name: 'Emily Khan', title: 'Scouting America Liaison', votingMember: false },
];

export interface UnitRepresentative {
  name: string;
  unit: string;
}

export const unitRepresentatives: UnitRepresentative[] = [
  { name: 'Anna Brown', unit: 'Crew 7 Representative' },
  { name: 'Brandon Shoop', unit: 'Troop 7 Representative' },
  { name: 'Chris Grabowski', unit: 'Pack 7 Representative' },
  { name: 'Christine Cases', unit: 'Troop 7 Representative' },
  { name: 'Christine Yormack', unit: 'Troop 719 Representative' },
  { name: 'Clayton Odor', unit: 'Troop 7 Representative' },
  { name: 'Emily Khan', unit: 'Troop 7 Representative' },
];

export interface ScoutingUnit {
  name: string;
  description: string;
  url: string;
}

export const scoutingUnits: ScoutingUnit[] = [
  {
    name: 'Troop 7',
    description:
      'Scouts BSA troop for boys, chartered in the Everglades District, South Florida Council.',
    url: 'https://troop7coralgables.org/',
  },
  {
    name: 'Pack 7',
    description: 'Cub Scout pack for grades K-5, meeting in the Scout House alongside Troop 7.',
    url: 'https://pack7.troop7coralgables.org/',
  },
  {
    name: 'Troop 719',
    description: 'Scouts BSA troop for girls, registered since February 2019.',
    url: 'https://troop719.troop7coralgables.org/',
  },
  {
    name: 'Crew 7',
    description: 'Venturing crew for ages 14-20, meeting alongside the other units.',
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
