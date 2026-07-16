import { useAuth } from '../../../context/AuthContext';
import { quickActions } from '../quickAction';
import DashboardHero from '../sections/DashboardHero';
import DashboardStats from '../sections/DashboardStats';
import DashboardContent from '../sections/DashboardContent';
import DashboardSidebar from '../sections/DashboardSidebar';

export default function UserDashboard() {
  const { isCreator } = useAuth();

  return (
    <div className="space-y-6">
      <DashboardHero />

      <DashboardStats />

      <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
        <DashboardContent />

        <DashboardSidebar isCreator={isCreator} quickActions={quickActions} />
      </div>
    </div>
  );
}
