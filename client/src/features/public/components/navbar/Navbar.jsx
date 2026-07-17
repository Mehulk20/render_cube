import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import Logo from './Logo';
import DesktopNav from './DesktopNav';
import DesktopActions from './DesktopActions';
import MobileActions from './MobileActions';
import MobileMenu from './MobileMenu';

/**
 * Navbar
 *
 * Variants:
 * - default  -> Landing pages
 * - auth     -> Login / Signup / Forgot Password
 * - user     -> User Dashboard
 * - creator  -> Creator Dashboard
 */
const Navbar = ({ variant = 'default' }) => {
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

    window.addEventListener('scroll', handleScroll, {
      passive: true,
    });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
          {variant === 'default' && <DesktopNav />}

          {/* Desktop Actions */}
          <DesktopActions variant={variant} />

          {/* Mobile Actions */}
          <MobileActions variant={variant} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        </div>

        {/* Mobile Menu */}
        {variant === 'default' && (
          <MobileMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
