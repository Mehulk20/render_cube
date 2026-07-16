import { QuickActionsCard } from '../components';

import RecentDownloadsSection from './RecentDownloadsSection';
import FollowingUpdatesSection from './FollowingUpdatesSection';
import CreatorCTA from './CreatorCTA';

export default function DashboardSidebar({ isCreator, quickActions }) {
  return (
    <div className="space-y-6">
      <QuickActionsCard actions={quickActions} />

      <RecentDownloadsSection />

      {!isCreator && <CreatorCTA />}

      <FollowingUpdatesSection />
    </div>
  );
}
