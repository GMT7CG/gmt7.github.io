'use client';

import { useEffect, useState } from 'react';
import type { Locale } from '@/lib/i18n';
import { getNextMeetingDates, type MeetingOccurrence } from '@/lib/meetings';

const heading: Record<Locale, string> = {
  en: 'Next six meeting dates',
  es: 'Próximas seis fechas de reunión',
};

const timeLabel: Record<Locale, string> = {
  en: '6:30-7:30pm ET',
  es: '6:30-7:30 p.m., hora del Este',
};

const rescheduledNote: Record<Locale, string> = {
  en: '* rescheduled due to a holiday',
  es: '* reprogramada por feriado',
};

function formatDate(date: Date, locale: Locale): string {
  return date.toLocaleDateString(locale === 'es' ? 'es-US' : 'en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
}

export function NextMeetingDates({ locale }: { locale: Locale }) {
  const [occurrences, setOccurrences] = useState<MeetingOccurrence[] | null>(null);

  useEffect(() => {
    setOccurrences(getNextMeetingDates(new Date(), 6));
  }, []);

  if (!occurrences) {
    return null;
  }

  return (
    <div className="rounded border border-rule bg-plaque px-6 py-4 text-sm text-muted">
      <p className="font-medium text-foreground">{heading[locale]}</p>
      <ul className="mt-2 list-inside list-disc space-y-1">
        {occurrences.map((occurrence) => (
          <li key={occurrence.date.toISOString()}>
            {formatDate(occurrence.date, locale)}, {timeLabel[locale]}
            {occurrence.rescheduled ? '*' : ''}
          </li>
        ))}
      </ul>
      {occurrences.some((occurrence) => occurrence.rescheduled) && (
        <p className="mt-2">{rescheduledNote[locale]}</p>
      )}
    </div>
  );
}
