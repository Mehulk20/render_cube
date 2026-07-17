import { ChevronDown } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { NAV_ITEMS } from './navbar.config';

const navLinkClass = ({ isActive }) =>
  `text-sm font-medium transition-colors duration-300 ${
    isActive ? 'text-primary' : 'text-foreground-muted hover:text-primary'
  }`;

const DesktopNav = () => {
  return (
    <div className="hidden items-center gap-8 md:flex">
      {NAV_ITEMS.map(({ label, to }) => (
        <NavLink key={to} to={to} className={navLinkClass}>
          {label}
        </NavLink>
      ))}

      <button
        type="button"
        className="flex items-center gap-1 text-sm font-medium text-foreground-muted transition-colors duration-300 hover:text-primary"
      >
        Categories
        <ChevronDown size={14} />
      </button>
    </div>
  );
};

export default DesktopNav;
