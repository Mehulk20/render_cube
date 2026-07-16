import { Link } from 'react-router-dom';
import { Card } from '../../../shared/ui';

export default function QuickActionsCard({ actions }) {
  return (
    <Card className="p-4 sm:p-5">
      <h3 className="mb-3 font-display text-sm font-semibold text-foreground">Quick Actions</h3>
      <ul className="space-y-1">
        {actions.map((a) => (
          <li key={a.label}>
            <Link
              to={a.to}
              className="
                group flex items-center justify-between rounded-xl px-2.5 py-2.5 text-sm text-foreground-soft
                transition-colors duration-[var(--duration-fast)] ease-[var(--ease-standard)]
                hover:bg-surface-raised hover:text-foreground
              "
            >
              <span className="flex items-center gap-2.5">
                <a.icon size={16} className="text-primary" /> {a.label}
              </span>
              <span
                className="
                  text-foreground-faint transition-transform duration-[var(--duration-fast)] ease-[var(--ease-standard)]
                  group-hover:translate-x-0.5
                "
              >
                ›
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </Card>
  );
}
