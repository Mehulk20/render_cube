import { Download } from 'lucide-react';
import { Card } from '../ui';

export default function RecentDownloadsList({ items }) {
  return (
    <Card className="p-4 sm:p-5">
      <ul className="divide-y divide-border-soft">
        {items.map((d) => (
          <li key={d.id} className="flex items-center gap-3 py-3 first:pt-0 last:pb-0">
            <span className={`h-10 w-10 shrink-0 rounded-lg bg-gradient-to-br ${d.color}`} />
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-medium text-ink">{d.title}</p>
              <p className="text-xs text-ink-faint">{d.time}</p>
            </div>
            <button
              className="flex h-8 w-8 items-center justify-center rounded-lg text-ink-faint hover:bg-surface-raised hover:text-violet"
              aria-label="Re-download"
            >
              <Download size={15} />
            </button>
          </li>
        ))}
      </ul>
    </Card>
  );
}
