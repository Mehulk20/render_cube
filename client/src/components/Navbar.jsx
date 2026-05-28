import { ChevronDown, Menu, Moon, ShoppingCart, Sun, X } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { useCart } from '../context/CartContext';

/**
 * Navbar — fixed top navigation.
 *
 * FIX: Hides when user scrolls DOWN (>8px movement), reappears instantly
 * when user scrolls UP. Uses a ref to track previous scroll position to
 * avoid stale-closure bugs inside the event listener.
 *
 * Also includes:
 * - Dark/light mode toggle
 * - Cart icon with item-count badge
 * - Active route highlighting via NavLink
 * - Responsive mobile menu
 */
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false); // true  → slid up off screen
  const [scrolled, setScrolled] = useState(false); // true  → add shadow/backdrop
  const lastScrollY = useRef(0);

  const { isDark, toggleTheme } = useTheme();
  const { cartItems } = useCart();
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

  const navLinkClass = ({ isActive }) =>
    `text-sm font-medium transition-colors ${
      isActive
        ? 'text-primary'
        : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
    }`;

  const navItems = [
    { label: 'Marketplace', to: '/marketplace' },
    { label: 'Creators', to: '/creators' },
    { label: 'Pricing', to: '/pricing' },
  ];

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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 flex-shrink-0">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M3 9L9 3L15 9L9 15L3 9Z" fill="white" fillOpacity="0.9" />
                <path d="M6 9L9 6L12 9L9 12L6 9Z" fill="white" />
              </svg>
            </div>
            <span
              className="font-display font-bold text-xl text-gray-900 dark:text-white"
              style={{ fontFamily: 'Syne' }}
            >
              RenderCube
            </span>
          </Link>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map(({ label, to }) => (
              <NavLink key={to} to={to} className={navLinkClass}>
                {label}
              </NavLink>
            ))}
            <div className="flex items-center gap-1 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white text-sm font-medium cursor-pointer transition-colors">
              Categories <ChevronDown size={14} />
            </div>
          </div>

          {/* Right controls */}
          <div className="hidden md:flex items-center gap-3">
            {/* Dark mode toggle */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle dark mode"
              className="w-9 h-9 rounded-full flex items-center justify-center text-gray-500 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            {/* Cart */}
            <button
              onClick={() => navigate('/cart')}
              aria-label="Shopping cart"
              className="relative w-9 h-9 rounded-full flex items-center justify-center text-gray-500 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              <ShoppingCart size={18} />
              {cartItems.length > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-primary text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                  {cartItems.length}
                </span>
              )}
            </button>

            <Link
              to="/login"
              className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white text-sm font-medium px-4 py-2 transition-colors"
            >
              Log in
            </Link>
            <Link
              to="/signup"
              className="bg-primary hover:bg-primary-dark text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-purple-200 dark:hover:shadow-purple-900"
            >
              Sign up
            </Link>
          </div>

          {/* Mobile right controls */}
          <div className="md:hidden flex items-center gap-1">
            <button
              onClick={toggleTheme}
              className="w-9 h-9 rounded-full flex items-center justify-center text-gray-500 dark:text-gray-300"
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              onClick={() => navigate('/cart')}
              className="relative w-9 h-9 rounded-full flex items-center justify-center text-gray-500 dark:text-gray-300"
            >
              <ShoppingCart size={18} />
              {cartItems.length > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-primary text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                  {cartItems.length}
                </span>
              )}
            </button>
            <button
              className="p-2 text-gray-600 dark:text-gray-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown */}
      <div
        className={`md:hidden bg-white dark:bg-gray-950 border-t border-gray-100 dark:border-gray-800 overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 py-4 space-y-1">
          {navItems.map(({ label, to }) => (
            <Link
              key={to}
              to={to}
              onClick={() => setIsMenuOpen(false)}
              className="block text-gray-700 dark:text-gray-200 font-medium py-2.5 hover:text-primary transition-colors"
            >
              {label}
            </Link>
          ))}
          <Link
            to="/marketplace"
            onClick={() => setIsMenuOpen(false)}
            className="block text-gray-700 dark:text-gray-200 font-medium py-2.5"
          >
            Categories
          </Link>
          <div className="pt-3 flex flex-col gap-2 border-t border-gray-100 dark:border-gray-800 mt-2">
            <Link
              to="/login"
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-700 dark:text-gray-200 font-medium py-2"
            >
              Log in
            </Link>
            <Link
              to="/signup"
              onClick={() => setIsMenuOpen(false)}
              className="bg-primary text-white font-semibold py-2.5 rounded-full text-center"
            >
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
