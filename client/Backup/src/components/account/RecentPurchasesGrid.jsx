export default function RecentPurchasesGrid({ items }) {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
      {items.map((p) => (
        <div key={p.id} className="overflow-hidden rounded-2xl border border-border bg-surface transition-colors hover:border-violet/40">
          <div className={`aspect-[4/3] bg-gradient-to-br ${p.color}`} />
          <div className="p-3.5">
            <p className="truncate text-sm font-medium text-ink">{p.title}</p>
            <p className="mt-0.5 text-sm text-ink-faint">${p.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
