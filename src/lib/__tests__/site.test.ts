import { boardOfDirectors, scoutingUnits, unitRepresentatives } from '@/lib/site';

describe('boardOfDirectors', () => {
  it('has exactly one non-voting member, the Scouting America Liaison', () => {
    const nonVoting = boardOfDirectors.filter((member) => !member.votingMember);
    expect(nonVoting).toHaveLength(1);
    expect(nonVoting[0].title).toBe('Scouting America Liaison');
  });
});

describe('unitRepresentatives', () => {
  it('lists a representative for each chartered unit', () => {
    const units = new Set(unitRepresentatives.map((rep) => rep.unit));
    expect(units.size).toBeGreaterThanOrEqual(4);
  });
});

describe('scoutingUnits', () => {
  it('links out to each unit site over https', () => {
    for (const unit of scoutingUnits) {
      expect(unit.url.startsWith('https://')).toBe(true);
    }
  });
});
