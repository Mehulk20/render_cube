import { Link } from 'react-router-dom';
import { NAV_ITEMS } from './navbar.config';

const MobileMenu = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <div
      className={`
        overflow-hidden border-t border-border bg-modal
        transition-all duration-300 ease-in-out md:hidden
        ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
      `}
    >
      <div className="space-y-1 px-4 py-4">
        {NAV_ITEMS.map(({ label, to }) => (
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
  );
};

export default MobileMenu;
