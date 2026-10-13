export function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="list-inside list-disc space-y-1 leading-7 text-muted">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
