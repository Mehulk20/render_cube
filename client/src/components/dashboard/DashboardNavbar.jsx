import DashboardNavbarBrand from './DashboardNavbarBrand';
import DashboardActions from './DashboardActions';
import { Logo, ThemeToggle } from '../public';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { useAppSelector } from '../../store';
import { selectCartItems } from '../../features/cart';
import Cart from '../common/Cart';

const DashboardNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false); // true  → slid up off screen
  const [scrolled, setScrolled] = useState(false); // true  → add shadow/backdrop
  const lastScrollY = useRef(0);

  const cartItems = useAppSelector(selectCartItems);
  const navigate = useNavigate();

  useEffect(() => {
    const THRESHOLD = 8; // px of movement before we react

    const handleScroll = () => {
      const currentY = window.scrollY;
      const diff = currentY - lastScrollY.current;

      // Scrolling DOWN past threshold → hide
      if (diff > THRESHOLD && currentY > 80) {
        setHidden(true);
        setIsMenuOpen(false); // close mobile menu when hiding
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

  const handleNavigate = (path) => {
    if (document.startViewTransition) {
      document.startViewTransition(() => {
        navigate(path);
      });
    } else {
      navigate(path);
    }
  };

  const navLinkClass = ({ isActive }) =>
    `text-sm font-medium transition-colors ${
      isActive
        ? 'text-primary'
        : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
    }`;

  return (
    <nav
      className={`
        fixed top-0 left-0 right-0 z-50
        bg-white/90 dark:bg-gray-950/90 backdrop-blur-md
        border-b border-gray-100 dark:border-gray-800
        transition-all duration-300 ease-in-out
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
            className="font-display font-bold text-xl text-gray-900 dark:text-white"
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
