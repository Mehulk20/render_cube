import { MoreHorizontal } from 'lucide-react';
import { Card, Badge } from '../ui';

const statusTone = { Published: 'mint', 'Pending Review': 'amber', Draft: 'neutral' };

export default function AssetTable({ items }) {
  return (
    <Card className="overflow-hidden p-0">
      <div className="flex items-center justify-between border-b border-border-soft p-4 sm:p-5">
        <h3 className="font-display text-sm font-semibold text-ink">Recent Assets</h3>
        <a href="#" className="text-xs font-medium text-violet hover:text-fuchsia">
          View all
        </a>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-xs text-ink-faint">
              <th className="px-5 py-2.5 font-medium">Asset</th>
              <th className="px-5 py-2.5 font-medium">Status</th>
              <th className="px-5 py-2.5 font-medium text-right">Downloads</th>
              <th className="px-5 py-2.5 font-medium text-right">Favorites</th>
              <th className="px-5 py-2.5 font-medium">Updated</th>
              <th className="px-5 py-2.5" />
            </tr>
          </thead>
          <tbody>
            {items.map((a) => (
              <tr
                key={a.id}
                className="border-t border-border-soft transition-colors hover:bg-surface-raised"
              >
                <td className="px-5 py-3">
                  <div className="flex items-center gap-3">
                    <span className={`h-9 w-9 shrink-0 rounded-lg bg-gradient-to-br ${a.color}`} />
                    <span className="font-medium text-ink">{a.title}</span>
                  </div>
                </td>
                <td className="px-5 py-3">
                  <Badge tone={statusTone[a.status]}>{a.status}</Badge>
                </td>
                <td className="px-5 py-3 text-right text-ink-soft">
                  {a.downloads ? a.downloads.toLocaleString() : '—'}
                </td>
                <td className="px-5 py-3 text-right text-ink-soft">
                  {a.favorites ? a.favorites.toLocaleString() : '—'}
                </td>
                <td className="px-5 py-3 text-ink-faint">{a.updated}</td>
                <td className="px-5 py-3 text-right">
                  <button className="flex h-7 w-7 items-center justify-center rounded-lg text-ink-faint hover:bg-surface hover:text-ink">
                    <MoreHorizontal size={15} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
}
