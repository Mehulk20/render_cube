import { useLocation } from 'react-router-dom';
import { ProfileMenu } from '../../../shared/ui';
import { NotificationBell } from '../../notifications/components';
import { Cart } from '../../../shared/components';

const DashboardActions = () => {
  const location = useLocation();

  // Replace with authenticated user role
  const isCreatorDashboard = location.pathname.startsWith('/creator');

  return (
    <div className="flex items-center gap-3">
      {!isCreatorDashboard && <Cart icon={24} />}

      <NotificationBell />

      <ProfileMenu />
    </div>
  );
};

export default DashboardActions;
