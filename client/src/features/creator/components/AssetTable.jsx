import { MoreHorizontal } from 'lucide-react';
import { Card, Badge } from '../../../shared/ui';

const statusTone = { Published: 'success', 'Pending Review': 'warning', Draft: 'neutral' };

export default function AssetTable({ items }) {
  return (
    <Card className="overflow-hidden p-0">
      <div className="flex items-center justify-between border-b border-border-soft p-md sm:p-lg">
        <h3 className="font-display text-sm font-semibold text-foreground">Recent Assets</h3>
        <a href="#" className="text-xs font-medium text-brand-500 motion-link hover:text-brand-600">
          View all
        </a>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-xs text-foreground-faint">
              <th className="px-lg py-md font-medium">Asset</th>
              <th className="px-lg py-md font-medium">Status</th>
              <th className="px-lg py-md font-medium text-right">Downloads</th>
              <th className="px-lg py-md font-medium text-right">Favorites</th>
              <th className="px-lg py-md font-medium">Updated</th>
              <th className="px-lg py-md" />
            </tr>
          </thead>
          <tbody>
            {items.map((a) => (
              <tr
                key={a.id}
                className="border-t border-border-soft transition-surface hover:bg-surface-raised"
              >
                <td className="px-lg py-md">
                  <div className="flex items-center gap-md">
                    <span
                      className={`h-10 w-10 shrink-0 rounded-sm bg-gradient-to-br ${a.color}`}
                    />
                    <span className="font-medium text-foreground">{a.title}</span>
                  </div>
                </td>
                <td className="px-lg py-md">
                  <Badge tone={statusTone[a.status]}>{a.status}</Badge>
                </td>
                <td className="px-lg py-md text-right text-foreground-soft">
                  {a.downloads ? a.downloads.toLocaleString() : '—'}
                </td>
                <td className="px-lg py-md text-right text-foreground-soft">
                  {a.favorites ? a.favorites.toLocaleString() : '—'}
                </td>
                <td className="px-lg py-md text-foreground-faint">{a.updated}</td>
                <td className="px-lg py-md text-right">
                  <button className="flex h-8 w-8 items-center justify-center rounded-sm text-foreground-faint transition-colors motion-fast ease-standard hover:bg-surface hover:text-foreground">
                    <MoreHorizontal size={16} />
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
