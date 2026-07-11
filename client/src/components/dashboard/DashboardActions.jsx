import { useState } from 'react';
import { Avatar, NotificationButton, ProfileMenu } from '../ui';
import { NotificationBell } from '../notifications';
import Cart from '../common/Cart';
const DashboardActions = () => {
  const role = 'creator';
  const [isCreatorDashboard, setIsCreatorDashboard] = useState(false);
  return (
    <div className="flex items-center gap-3">
      {!isCreatorDashboard && <Cart icon={24} />}
      <NotificationBell />
      <ProfileMenu
        role={role}
        setIsCreatorDashboard={setIsCreatorDashboard}
        isCreatorDashboard={isCreatorDashboard}
      />
    </div>
  );
};

export default DashboardActions;
