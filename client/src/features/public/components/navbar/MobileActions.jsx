import { Menu, X } from 'lucide-react';

import ThemeToggle from './ThemeToggle';

import { Cart } from '../../../../shared/components';
import { NotificationBell } from '../../../notifications/components';
import { ProfileMenu } from '../../../../shared/ui';

const MobileActions = ({ variant, isMenuOpen, setIsMenuOpen }) => {
  const isPublic = variant === 'default';
  const isDashboard = variant === 'user' || variant === 'creator';

  return (
    <div className="flex items-center gap-1.5 md:hidden">
      <ThemeToggle />

      {isPublic && (
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

      {isDashboard && (
        <>
          <NotificationBell />
          <Cart icon={18} />
          <ProfileMenu />
        </>
      )}
    </div>
  );
};

export default MobileActions;
