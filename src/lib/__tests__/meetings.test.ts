import { getNextMeetingDates } from '@/lib/meetings';

describe('getNextMeetingDates', () => {
  it('returns the requested count, each on a Monday, in order', () => {
    const occurrences = getNextMeetingDates(new Date(2026, 0, 1), 6);
    expect(occurrences).toHaveLength(6);
    for (const occurrence of occurrences) {
      expect(occurrence.date.getDay()).toBe(1);
    }
    for (let i = 1; i < occurrences.length; i++) {
      expect(occurrences[i].date.getTime()).toBeGreaterThan(occurrences[i - 1].date.getTime());
    }
  });

  it('picks the second Monday for a month with no holiday collision', () => {
    const [first] = getNextMeetingDates(new Date(2026, 2, 1), 1);
    expect(first.date).toEqual(new Date(2026, 2, 9));
    expect(first.rescheduled).toBe(false);
  });

  it('moves October to the third Monday because the second Monday is Columbus Day', () => {
    const october = getNextMeetingDates(new Date(2026, 9, 1), 1)[0];
    expect(october.date).toEqual(new Date(2026, 9, 19));
    expect(october.rescheduled).toBe(true);
  });

  it('excludes a this-month occurrence that has already passed', () => {
    const occurrences = getNextMeetingDates(new Date(2026, 2, 10), 1);
    expect(occurrences[0].date).toEqual(new Date(2026, 3, 13));
  });

  it('includes today when today is the meeting date', () => {
    const occurrences = getNextMeetingDates(new Date(2026, 2, 9), 1);
    expect(occurrences[0].date).toEqual(new Date(2026, 2, 9));
  });
});
