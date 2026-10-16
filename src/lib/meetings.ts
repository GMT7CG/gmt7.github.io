export interface MeetingOccurrence {
  date: Date;
  rescheduled: boolean;
}

function nthWeekdayOfMonth(year: number, month: number, weekday: number, n: number): Date {
  const first = new Date(year, month, 1);
  const offset = (weekday - first.getDay() + 7) % 7;
  return new Date(year, month, 1 + offset + (n - 1) * 7);
}

function lastWeekdayOfMonth(year: number, month: number, weekday: number): Date {
  const last = new Date(year, month + 1, 0);
  const offset = (last.getDay() - weekday + 7) % 7;
  return new Date(year, month, last.getDate() - offset);
}

function isSameDate(a: Date, b: Date): boolean {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

const MONDAY = 1;
const THURSDAY = 4;

function federalHolidaysInMonth(year: number, month: number): Date[] {
  switch (month) {
    case 0:
      return [new Date(year, 0, 1), nthWeekdayOfMonth(year, 0, MONDAY, 3)];
    case 1:
      return [nthWeekdayOfMonth(year, 1, MONDAY, 3)];
    case 4:
      return [lastWeekdayOfMonth(year, 4, MONDAY)];
    case 5:
      return [new Date(year, 5, 19)];
    case 6:
      return [new Date(year, 6, 4)];
    case 8:
      return [nthWeekdayOfMonth(year, 8, MONDAY, 1)];
    case 9:
      return [nthWeekdayOfMonth(year, 9, MONDAY, 2)];
    case 10:
      return [new Date(year, 10, 11), nthWeekdayOfMonth(year, 10, THURSDAY, 4)];
    case 11:
      return [new Date(year, 11, 25)];
    default:
      return [];
  }
}

function isFederalHoliday(date: Date): boolean {
  return federalHolidaysInMonth(date.getFullYear(), date.getMonth()).some((holiday) =>
    isSameDate(holiday, date),
  );
}

function meetingDateForMonth(year: number, month: number): MeetingOccurrence {
  const secondMonday = nthWeekdayOfMonth(year, month, MONDAY, 2);
  if (!isFederalHoliday(secondMonday)) {
    return { date: secondMonday, rescheduled: false };
  }
  const thirdMonday = nthWeekdayOfMonth(year, month, MONDAY, 3);
  return { date: thirdMonday, rescheduled: true };
}

export function getNextMeetingDates(today: Date, count: number): MeetingOccurrence[] {
  const occurrences: MeetingOccurrence[] = [];
  let year = today.getFullYear();
  let month = today.getMonth();

  while (occurrences.length < count) {
    const occurrence = meetingDateForMonth(year, month);
    if (occurrence.date >= startOfDay(today)) {
      occurrences.push(occurrence);
    }
    month += 1;
    if (month > 11) {
      month = 0;
      year += 1;
    }
  }

  return occurrences;
}

function startOfDay(date: Date): Date {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}
