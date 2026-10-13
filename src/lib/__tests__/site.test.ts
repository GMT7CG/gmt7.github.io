import { boardOfDirectors, scoutingUnits, subscribers, unitRepresentatives } from '@/lib/site';

describe('boardOfDirectors', () => {
  it('does not list the Scouting America Liaison as a board seat', () => {
    expect(boardOfDirectors.some((member) => member.title === 'Scouting America Liaison')).toBe(
      false,
    );
  });
});

describe('unitRepresentatives', () => {
  it('lists a representative for each chartered unit', () => {
    const units = new Set(unitRepresentatives.map((rep) => rep.unit));
    expect(units.size).toBeGreaterThanOrEqual(4);
  });

  it('lists Emily Khan as a Troop 7 Representative', () => {
    expect(unitRepresentatives).toEqual(
      expect.arrayContaining([{ name: 'Emily Khan', unit: 'Troop 7 Representative' }]),
    );
  });
});

describe('subscribers', () => {
  it('lists Chris Vidal as Building Manager', () => {
    expect(subscribers).toEqual(
      expect.arrayContaining([{ name: 'Chris Vidal', role: 'Building Manager' }]),
    );
  });

  it('lists Fred Kimball as Historian', () => {
    expect(subscribers).toEqual(
      expect.arrayContaining([{ name: 'Fred Kimball', role: 'Historian' }]),
    );
  });

  it('lists Emily Khan as the Scouting America Liaison', () => {
    expect(subscribers).toEqual(
      expect.arrayContaining([{ name: 'Emily Khan', role: 'Scouting America Liaison' }]),
    );
  });

  it('lists Don Slesnick III as City Liaison', () => {
    expect(subscribers).toEqual(
      expect.arrayContaining([{ name: 'Don Slesnick III', role: 'City Liaison' }]),
    );
  });
});

describe('scoutingUnits', () => {
  it('links out to each unit site over https', () => {
    for (const unit of scoutingUnits) {
      expect(unit.url.startsWith('https://')).toBe(true);
    }
  });
});
