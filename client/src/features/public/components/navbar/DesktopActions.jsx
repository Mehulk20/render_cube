import { Link } from 'react-router-dom';

import ThemeToggle from './ThemeToggle';

import { Cart } from '../../../../shared/components';
import { NotificationBell } from '../../../notifications/components';

import { ProfileMenu } from '../../../../shared/ui';
import { useSelector } from 'react-redux';
import { selectIsAuthenticated } from '../../../auth/services';

const DesktopActions = ({ variant }) => {
  const isAuthenticated = useSelector(selectIsAuthenticated);

  return (
    <div className="hidden items-center gap-3 md:flex">
      <ThemeToggle />

      {isAuthenticated && variant !== 'auth' ? (
        <ProfileMenu />
      ) : (
        <>
          <Cart icon={20} />

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
  );
};

export default DesktopActions;
