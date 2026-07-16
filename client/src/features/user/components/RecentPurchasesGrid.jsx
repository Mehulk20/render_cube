import { Card } from '../../../shared/ui';

export default function RecentPurchasesGrid({ items }) {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
      {items.map((p) => (
        <Card key={p.id} hover className="hover-lift overflow-hidden">
          <div className={`aspect-[4/3] bg-gradient-to-br ${p.color}`} />
          <div className="p-3.5">
            <p className="truncate text-sm font-medium text-foreground">{p.title}</p>
            <p className="mt-0.5 text-sm text-foreground-faint">${p.price}</p>
          </div>
        </Card>
      ))}
    </div>
  );
}
