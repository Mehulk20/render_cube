import DashboardNavbarBrand from './DashboardNavbarBrand';
import DashboardActions from './DashboardActions';
import { Logo, ThemeToggle } from '../../public/components';
import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';

import { Cart } from '../../../shared/components';

const DashboardNavbar = () => {
  const [hidden, setHidden] = useState(false); // true  → slid up off screen
  const [scrolled, setScrolled] = useState(false); // true  → add shadow/backdrop
  const lastScrollY = useRef(0);

  useEffect(() => {
    const THRESHOLD = 8; // px of movement before we react

    const handleScroll = () => {
      const currentY = window.scrollY;
      const diff = currentY - lastScrollY.current;

      // Scrolling DOWN past threshold → hide
      if (diff > THRESHOLD && currentY > 80) {
        setHidden(true); // close mobile menu when hiding
      }
      // Scrolling UP → show
      else if (diff < -THRESHOLD) {
        setHidden(false);
      }

      // Add shadow once we've scrolled at all
      setScrolled(currentY > 10);
      lastScrollY.current = currentY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`
    fixed inset-x-0 top-0 z-50
    transform-gpu
    border-b border-ink-200
    bg-surface/90
    backdrop-blur-md
    transition-transform duration-300 ease-in-out
    dark:border-gray-800
    dark:bg-gray-950/90
    ${hidden ? '-translate-y-full shadow-none' : 'translate-y-0'}
    ${scrolled ? 'shadow-sm' : ''}
  `}
    >
      <div className="flex h-16 items-center justify-between px-4 lg:px-8">
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <div className="w-12 h-12 rounded-lg flex items-center justify-center">
            <Logo />
          </div>
          <span
            className="font-display text-xl text-gray-900 dark:text-ink-100"
            style={{ fontFamily: 'Syne' }}
          >
            RenderCube
          </span>
        </Link>

        <DashboardActions />
      </div>
    </nav>
  );
};

export default DashboardNavbar;
