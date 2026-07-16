import { Menu, Bell, Search } from 'lucide-react';
import { Avatar } from '../../shared/ui';
import { Logo, ThemeToggle } from '../../shared/components';
import { useAuth } from '../../context/AuthContext';

export default function DashboardTopBar({ onMenuClick, title }) {
  const { user } = useAuth();

  return (
    <header className="sticky top-0 z-30 flex h-16 items-center gap-3 border-b border-border-soft bg-void/85 px-4 backdrop-blur-md sm:px-6">
      <button
        onClick={onMenuClick}
        className="flex h-9 w-9 items-center justify-center rounded-lg text-ink-soft hover:bg-surface-raised lg:hidden focus-ring"
        aria-label="Open menu"
      >
        <Menu size={20} />
      </button>
      <div className="lg:hidden">
        <Logo />
      </div>
      {title && (
        <h1 className="hidden font-display text-lg font-semibold text-ink lg:block">{title}</h1>
      )}

      <div className="ml-auto flex items-center gap-2">
        <ThemeToggle />
        <button
          className="hidden h-9 w-9 items-center justify-center rounded-lg text-ink-soft hover:bg-surface-raised sm:flex focus-ring"
          aria-label="Search"
        >
          <Search size={17} />
        </button>
        <button
          className="relative flex h-9 w-9 items-center justify-center rounded-lg text-ink-soft hover:bg-surface-raised focus-ring"
          aria-label="Notifications"
        >
          <Bell size={17} />
          <span className="absolute right-1.5 top-1.5 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-violet text-[9px] font-semibold text-white">
            3
          </span>
        </button>
        <Avatar src={user?.avatar} size="sm" />
      </div>
    </header>
  );
}
