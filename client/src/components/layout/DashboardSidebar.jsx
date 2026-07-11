import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import { Sparkles } from 'lucide-react';
import { Logo } from '../common';
import { Button } from '../ui';
import { accountLinks, creatorLinks } from '../../lib/navLinks';

export default function DashboardSidebar({ mode = 'account' }) {
  const links = mode === 'creator' ? creatorLinks : accountLinks;

  return (
    <aside className="sticky top-16 hidden h-[calc(100vh-4rem)] w-64 shrink-0 flex-col border-r border-border-soft bg-void lg:flex ">
      {mode === 'creator' && (
        <div className="px-5 pt-5">
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-fuchsia">
            <Sparkles size={13} /> Creator Studio
          </span>
        </div>
      )}

      <nav className="min-h-0 flex-1 space-y-0.5 overflow-y-auto px-3 py-4 scrollbar-hide">
        {links.map((l) => (
          <NavLink
            key={l.label}
            to={l.to}
            end={l.end}
            className={({ isActive }) =>
              clsx(
                'group flex items-center justify-between rounded-xl px-3 py-2.5 text-sm font-medium transition-colors',
                isActive
                  ? 'bg-violet/15 text-violet'
                  : 'text-ink-soft hover:bg-surface-raised hover:text-ink'
              )
            }
          >
            <span className="flex items-center gap-2.5">
              <l.icon size={17} />
              {l.label}
            </span>
            {l.count !== undefined && (
              <span className="rounded-full bg-surface-raised px-1.5 py-0.5 text-[11px] text-ink-faint">
                {l.count}
              </span>
            )}
          </NavLink>
        ))}
      </nav>

      {mode === 'account' && (
        <div className="mt-auto p-3">
          <div className="rounded-2xl border border-violet/25 bg-linear-to-br from-violet/10 to-fuchsia/10 p-4">
            <p className="font-display text-sm font-semibold text-ink">Become a Creator</p>

            <p className="mt-1 text-xs text-ink-faint">
              Share your creativity and earn from your work.
            </p>

            <Button
              as={NavLink}
              to="/creator/become"
              variant="gradient"
              size="sm"
              className="mt-4 w-full"
            >
              Get Started
            </Button>
          </div>
        </div>
      )}

      {mode === 'creator' && (
        <div className="m-3 rounded-2xl border border-amber/25 bg-linear-to-br from-amber/10 to-transparent p-4">
          <p className="font-display text-sm font-semibold text-ink">Grow Your Store</p>
          <p className="mt-1 text-xs text-ink-faint">
            Add a banner and profile video to increase engagement by 40%.
          </p>
          <Button variant="secondary" size="sm" className="mt-3 w-full">
            Customize Store
          </Button>
        </div>
      )}
    </aside>
  );
}
