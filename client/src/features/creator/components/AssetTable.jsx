import { MoreHorizontal } from 'lucide-react';
import { Card, Badge } from '../../../shared/ui';

const statusTone = { Published: 'success', 'Pending Review': 'warning', Draft: 'neutral' };

export default function AssetTable({ items }) {
  return (
    <Card className="overflow-hidden p-0">
      <div className="flex items-center justify-between border-b border-border-soft p-4 sm:p-5">
        <h3 className="font-display text-sm font-semibold text-foreground">Recent Assets</h3>
        <a
          href="#"
          className="text-xs font-medium text-primary transition-colors duration-[var(--duration-fast)] hover:text-primary-hover"
        >
          View all
        </a>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-xs text-foreground-faint">
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
                className="border-t border-border-soft transition-colors duration-[var(--duration-fast)] ease-[var(--ease-standard)] hover:bg-surface-raised"
              >
                <td className="px-5 py-3">
                  <div className="flex items-center gap-3">
                    <span className={`h-9 w-9 shrink-0 rounded-lg bg-gradient-to-br ${a.color}`} />
                    <span className="font-medium text-foreground">{a.title}</span>
                  </div>
                </td>
                <td className="px-5 py-3">
                  <Badge tone={statusTone[a.status]}>{a.status}</Badge>
                </td>
                <td className="px-5 py-3 text-right text-foreground-soft">
                  {a.downloads ? a.downloads.toLocaleString() : '—'}
                </td>
                <td className="px-5 py-3 text-right text-foreground-soft">
                  {a.favorites ? a.favorites.toLocaleString() : '—'}
                </td>
                <td className="px-5 py-3 text-foreground-faint">{a.updated}</td>
                <td className="px-5 py-3 text-right">
                  <button className="flex h-7 w-7 items-center justify-center rounded-lg text-foreground-faint transition-colors duration-[var(--duration-fast)] ease-[var(--ease-standard)] hover:bg-surface hover:text-foreground">
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
