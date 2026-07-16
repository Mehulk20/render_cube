import { Link } from 'react-router-dom';
import { Card } from '../ui';

export default function QuickActionsCard({ actions }) {
  return (
    <Card className="p-4 sm:p-5">
      <h3 className="mb-3 font-display text-sm font-semibold text-ink">Quick Actions</h3>
      <ul className="space-y-1">
        {actions.map((a) => (
          <li key={a.label}>
            <Link
              to={a.to}
              className="flex items-center justify-between rounded-xl px-2.5 py-2.5 text-sm text-ink-soft transition-colors hover:bg-surface-raised hover:text-ink"
            >
              <span className="flex items-center gap-2.5">
                <a.icon size={16} className="text-violet" /> {a.label}
              </span>
              <span className="text-ink-faint">›</span>
            </Link>
          </li>
        ))}
      </ul>
    </Card>
  );
}
