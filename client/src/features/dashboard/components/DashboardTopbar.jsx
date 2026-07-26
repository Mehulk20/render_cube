import { Menu, Bell, Search } from 'lucide-react';
import { Avatar } from '../../shared/ui';
import { Logo, ThemeToggle } from '../../shared/components';
import { useAuth } from '../../context/AuthContext';

export default function DashboardTopBar({ onMenuClick, title }) {
  const { user } = useAuth();

  return (
    <header className="sticky top-0 z-sticky flex h-16 items-center gap-md border-b border-border-soft bg-surface/85 px-4 backdrop-blur-md sm:px-6">
      <button onClick={onMenuClick} className="icon-trigger lg:hidden" aria-label="Open menu">
        <Menu size={20} />
      </button>
      <div className="lg:hidden">
        <Logo />
      </div>
      {title && (
        <h1 className="hidden font-display text-lg font-semibold text-ink lg:block">{title}</h1>
      )}

      <div className="ml-auto flex items-center gap-sm">
        <ThemeToggle />
        <button className="hidden icon-trigger sm:flex" aria-label="Search">
          <Search size={20} />
        </button>
        <button className="icon-trigger relative" aria-label="Notifications">
          <Bell size={20} />
          <span className="absolute right-1.5 top-1.5 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-brand-500 text-xs font-bold text-white">
            3
          </span>
        </button>
        <Avatar src={user?.avatar} size="sm" />
      </div>
    </header>
  );
}
