import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, ShoppingCart, Bell, ChevronDown, ChevronsUpDown, Sun, Moon } from 'lucide-react';
import { Logo, ThemeToggle } from '../../shared/components';
import { Avatar, Button } from '../../shared/ui';
import { useAuth } from '../../context/AuthContext';
import { useTheme } from '../../context/ThemeContext';

const browseLinks = ['Templates', 'Sound Effects', 'UI Kits', 'Motion Graphics', 'Icons', 'Fonts'];

export default function Navbar() {
  const { isAuthed = true, isCreator, user, logout } = useAuth();
  const { isLight, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const [browseOpen, setBrowseOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-40 border-b border-border-soft bg-void/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-2xl items-center gap-4 px-4 sm:px-6 lg:px-8">
        <Logo />

        <nav className="hidden items-center gap-1 lg:flex">
          <div className="relative">
            <button
              onClick={() => setBrowseOpen((v) => !v)}
              onBlur={() => setTimeout(() => setBrowseOpen(false), 120)}
              aria-haspopup="true"
              aria-expanded={browseOpen}
              className="flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium text-ink-soft transition-colors hover:text-ink focus-ring"
            >
              Browse{' '}
              <ChevronDown
                size={14}
                className={browseOpen ? 'rotate-180 transition-transform' : 'transition-transform'}
              />
            </button>
            {browseOpen && (
              <div className="absolute left-0 top-full mt-2 w-52 rounded-xl border border-border bg-surface p-2 shadow-floating">
                {browseLinks.map((l) => (
                  <Link
                    key={l}
                    to="/explore"
                    className="block rounded-lg px-3 py-2 text-sm text-ink-soft hover:bg-surface-raised hover:text-ink"
                  >
                    {l}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link
            to="/explore"
            className="rounded-lg px-3 py-2 text-sm font-medium text-ink-soft hover:text-ink"
          >
            Plugins
          </Link>
          <Link
            to="/explore"
            className="rounded-lg px-3 py-2 text-sm font-medium text-ink-soft hover:text-ink"
          >
            Enterprise
          </Link>
          <Link
            to="/explore"
            className="rounded-lg px-3 py-2 text-sm font-medium text-ink-soft hover:text-ink"
          >
            Pricing
          </Link>
        </nav>

        <div className="hidden flex-1 max-w-md md:flex">
          <label className="flex w-full items-center gap-2 rounded-xl border border-border bg-surface px-3.5 py-2 text-sm text-ink-faint transition-colors focus-within:border-violet focus-within:ring-2 focus-within:ring-violet/20">
            <Search size={16} />
            <input
              placeholder="Search for assets, templates, audio..."
              className="w-full bg-transparent text-ink placeholder:text-ink-faint outline-none"
              onKeyDown={(e) => e.key === 'Enter' && navigate('/explore')}
            />
            <kbd className="hidden shrink-0 rounded-md border border-border px-1.5 py-0.5 text-[10px] text-ink-faint lg:block">
              ⌘K
            </kbd>
          </label>
        </div>

        <div className="ml-auto flex items-center gap-1.5 sm:gap-3">
          <ThemeToggle className="hidden sm:flex" />
          <button
            className="hidden h-9 w-9 items-center justify-center rounded-lg text-ink-soft hover:bg-surface-raised hover:text-ink sm:flex focus-ring"
            aria-label="Cart"
          >
            <ShoppingCart size={18} />
          </button>
          <button
            className="relative flex h-9 w-9 items-center justify-center rounded-lg text-ink-soft hover:bg-surface-raised hover:text-ink focus-ring"
            aria-label="Notifications"
          >
            <Bell size={18} />
            <span className="absolute right-1.5 top-1.5 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-violet text-[9px] font-semibold text-white">
              3
            </span>
          </button>

          {isAuthed ? (
            <div className="relative">
              <button
                onClick={() => setMenuOpen((v) => !v)}
                onBlur={() => setTimeout(() => setMenuOpen(false), 120)}
                aria-haspopup="true"
                aria-expanded={menuOpen}
                aria-label="Account menu"
                className="flex items-center gap-1.5 rounded-full pl-0.5 pr-1 focus-ring"
              >
                <Avatar src={user?.avatar} size="sm" />
                <ChevronsUpDown size={13} className="text-ink-faint" />
              </button>
              {menuOpen && (
                <div className="absolute right-0 top-full mt-2 w-56 rounded-xl border border-border bg-surface p-1.5 shadow-floating">
                  <div className="px-3 py-2">
                    <p className="text-sm font-medium text-ink">{user?.name}</p>
                    <p className="text-xs text-ink-faint">@{user?.username}</p>
                  </div>
                  <div className="my-1 h-px bg-border" />
                  <Link
                    to="/account/dashboard"
                    className="block rounded-lg px-3 py-2 text-sm text-ink-soft hover:bg-surface-raised hover:text-ink"
                  >
                    Dashboard
                  </Link>
                  <Link
                    to="/account/profile"
                    className="block rounded-lg px-3 py-2 text-sm text-ink-soft hover:bg-surface-raised hover:text-ink"
                  >
                    Profile
                  </Link>
                  {isCreator && (
                    <Link
                      to="/creator/dashboard"
                      className="block rounded-lg px-3 py-2 text-sm text-ink-soft hover:bg-surface-raised hover:text-ink"
                    >
                      Creator Studio
                    </Link>
                  )}
                  <div className="my-1 h-px bg-border" />
                  <button
                    onClick={toggleTheme}
                    className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-sm text-ink-soft hover:bg-surface-raised hover:text-ink sm:hidden"
                  >
                    {isLight ? <Moon size={15} /> : <Sun size={15} />}{' '}
                    {isLight ? 'Dark mode' : 'Light mode'}
                  </button>
                  <div className="my-1 h-px bg-border" />
                  <button
                    onClick={() => {
                      logout();
                      navigate('/');
                    }}
                    className="block w-full rounded-lg px-3 py-2 text-left text-sm text-rose hover:bg-rose/10"
                  >
                    Log out
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Button as={Link} to="/login" variant="ghost" size="sm">
                Log in
              </Button>
              <Button as={Link} to="/register" variant="primary" size="sm">
                Sign up
              </Button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
