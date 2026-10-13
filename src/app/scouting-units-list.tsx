import { type Locale, scoutingUnitDescriptions } from '@/lib/i18n';
import { scoutingUnits } from '@/lib/site';

export function ScoutingUnitsList({ locale }: { locale: Locale }) {
  return (
    <ul className="flex flex-col divide-y divide-rule">
      {scoutingUnits.map((unit) => (
        <li key={unit.name} className="py-4 first:pt-0">
          <a
            href={unit.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-4"
          >
            <span className="font-medium text-forest">{unit.name}</span>
            <span className="text-sm text-muted">
              {scoutingUnitDescriptions[locale][unit.name]}
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
}
