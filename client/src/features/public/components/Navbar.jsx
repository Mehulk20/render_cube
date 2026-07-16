import { useSelector } from 'react-redux';
import { ChevronDown, Menu, ShoppingCart, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { selectIsAuthenticated } from '../../auth/services';
import { Cart, NotificationBell } from '../../../shared/components';
import { ProfileMenu } from '../../../shared/ui';
import ThemeToggle from './ThemeToggle';
import Logo from './Logo';

/**
 * Navbar — fixed top navigation.
 * Hides when the person scrolls down (>8px movement), reappears
 * instantly on scroll up. Uses a ref for the previous scroll position
 * so the listener never reads a stale value.
 */
const Navbar = ({ variant = 'default' }) => {
  const isAuthenticated = useSelector(selectIsAuthenticated);

  const location = useLocation();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [hidden, setHidden] = useState(false);

  const [scrolled, setScrolled] = useState(false);

  const lastScrollY = useRef(0);

  useEffect(() => {
    const THRESHOLD = 8;

    const handleScroll = () => {
      const currentY = window.scrollY;
      const diff = currentY - lastScrollY.current;

      if (diff > THRESHOLD && currentY > 80) {
        setHidden(true);
        setIsMenuOpen(false);
      } else if (diff < -THRESHOLD) {
        setHidden(false);
      }

      setScrolled(currentY > 10);
      lastScrollY.current = currentY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinkClass = ({ isActive }) =>
    `text-sm font-medium transition-colors duration-300 ${
      isActive ? 'text-primary' : 'text-foreground-muted hover:text-primary'
    }`;

  const navItems = [
    { label: 'Marketplace', to: '/marketplace' },
    { label: 'Creators', to: '/creators' },
    { label: 'Pricing', to: '/pricing' },
  ];

  return (
    <nav
      className={`
        fixed inset-x-0 top-0 z-50
        border-b border-border
        bg-modal/90 backdrop-blur-xl
        transition-all duration-300 ease-in-out
        ${hidden ? '-translate-y-full shadow-none' : 'translate-y-0'}
        ${scrolled ? 'shadow-card' : ''}
      `}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="group flex shrink-0 items-center gap-2.5">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl">
              <Logo />
            </div>

            <span className="font-display text-xl font-bold text-foreground transition-colors duration-300 group-hover:text-primary">
              RenderCube
            </span>
          </Link>

          {/* Desktop Navigation */}
          {!isAuthenticated && (
            <div className="hidden items-center gap-8 md:flex">
              {navItems.map(({ label, to }) => (
                <NavLink key={to} to={to} className={navLinkClass}>
                  {label}
                </NavLink>
              ))}

              <div className="flex cursor-pointer items-center gap-1 text-sm font-medium text-foreground-muted transition-colors duration-300 hover:text-primary">
                Categories
                <ChevronDown size={14} />
              </div>
            </div>
          )}

          {/* Right controls */}
          <div className="hidden items-center gap-3 md:flex">
            <ThemeToggle />
            <Cart icon={20} />

            {isAuthenticated ? (
              <>
                <NotificationBell />
                <ProfileMenu />
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="rounded-full px-4 py-2 text-sm font-medium text-foreground-muted transition-colors duration-300 hover:text-primary"
                >
                  Log in
                </Link>

                <Link
                  to="/signup"
                  className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-hover hover:shadow-glow active:translate-y-0 active:scale-[0.98]"
                >
                  Sign up
                </Link>
              </>
            )}
          </div>

          {/* Mobile right controls */}
          <div className="flex items-center gap-1.5 md:hidden">
            <ThemeToggle />

            {isAuthenticated ? (
              <>
                <NotificationBell />
                <Cart icon={18} />
                <ProfileMenu />
              </>
            ) : (
              <>
                <Cart icon={20} />

                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  aria-label="Toggle menu"
                  aria-expanded={isMenuOpen}
                  className="flex h-10 w-10 items-center justify-center rounded-xl text-foreground-muted transition-all duration-300 hover:bg-surface-hover hover:text-primary active:scale-95"
                >
                  {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
                </button>
              </>
            )}
          </div>
        </div>

        {/* Mobile dropdown */}
        {!isAuthenticated && (
          <div
            className={`
              overflow-hidden border-t border-border bg-modal
              transition-all duration-300 ease-in-out md:hidden
              ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
            `}
          >
            <div className="space-y-1 px-4 py-4">
              {navItems.map(({ label, to }) => (
                <Link
                  key={to}
                  to={to}
                  onClick={() => setIsMenuOpen(false)}
                  className="block rounded-xl px-3 py-2.5 text-sm font-medium text-foreground transition-all duration-300 hover:bg-surface-hover hover:text-primary"
                >
                  {label}
                </Link>
              ))}

              <Link
                to="/marketplace"
                onClick={() => setIsMenuOpen(false)}
                className="block rounded-xl px-3 py-2.5 text-sm font-medium text-foreground transition-all duration-300 hover:bg-surface-hover hover:text-primary"
              >
                Categories
              </Link>

              <div className="mt-3 flex flex-col gap-2 border-t border-border pt-4">
                <Link
                  to="/login"
                  onClick={() => setIsMenuOpen(false)}
                  className="rounded-xl py-2.5 text-center text-sm font-medium text-foreground-muted transition-colors duration-300 hover:text-primary"
                >
                  Log in
                </Link>

                <Link
                  to="/signup"
                  onClick={() => setIsMenuOpen(false)}
                  className="rounded-full bg-primary py-2.5 text-center text-sm font-semibold text-white shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-hover hover:shadow-glow active:scale-[0.98]"
                >
                  Sign up
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
