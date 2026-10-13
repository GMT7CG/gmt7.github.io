export interface Fact {
  label: string;
  value: React.ReactNode;
}

export function FactGrid({ facts }: { facts: Fact[] }) {
  return (
    <dl className="grid grid-cols-2 gap-x-6 gap-y-3 rounded border border-rule bg-plaque px-6 py-5 text-sm sm:grid-cols-4">
      {facts.map((fact) => (
        <div key={fact.label}>
          <dt className="text-muted">{fact.label}</dt>
          <dd className="font-medium text-foreground">{fact.value}</dd>
        </div>
      ))}
    </dl>
  );
}
