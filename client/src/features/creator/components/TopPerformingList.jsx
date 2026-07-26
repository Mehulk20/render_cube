import { Card } from '../../../shared/ui';

export default function TopPerformingList({ items }) {
  return (
    <Card className="p-4 sm:p-5">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="font-display text-sm font-semibold text-foreground">
          Top Performing Assets
        </h3>
        <a href="#" className="text-xs font-medium text-brand-500 motion-link hover:text-brand-600">
          View all
        </a>
      </div>
      <div className="hidden grid-cols-[1fr_auto_auto] gap-lg pb-md text-xs text-foreground-faint sm:grid">
        <span />
        <span className="text-right">Downloads</span>
        <span className="text-right">Favorites</span>
      </div>
      <ul className="divide-y divide-border-soft">
        {items.map((it) => (
          <li key={it.id} className="grid grid-cols-[1fr_auto_auto] items-center gap-4 py-2.5">
            <span className="flex min-w-0 items-center gap-2.5">
              <span className={`h-8 w-8 shrink-0 rounded-lg bg-gradient-to-br ${it.color}`} />
              <span className="truncate text-sm text-foreground">{it.title}</span>
            </span>
            <span className="text-right text-sm text-foreground-soft">
              {it.downloads.toLocaleString()}
            </span>
            <span className="text-right text-sm text-foreground-soft">
              {it.favorites.toLocaleString()}
            </span>
          </li>
        ))}
      </ul>
    </Card>
  );
}
