export interface DataTableRow {
  key: string;
  primary: React.ReactNode;
  secondary: React.ReactNode;
}

export function DataTable({ headers, rows }: { headers: [string, string]; rows: DataTableRow[] }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse text-left text-sm">
        <thead>
          <tr className="border-b border-rule">
            <th className="py-2 pr-4 font-semibold">{headers[0]}</th>
            <th className="py-2 font-semibold">{headers[1]}</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.key} className="border-b border-rule/60">
              <td className="py-2 pr-4">{row.primary}</td>
              <td className="py-2 text-muted">{row.secondary}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
