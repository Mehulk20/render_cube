import ProfileHeader from './ProfileHeader';
import ProfileTabs from './ProfileTabs';
import ProfileOverViewCard from './ProfileOverviewCards';

import { ProfileOverviewSection, Sidebar } from '../sections';

import { creatorProfileTabs } from '../constants/creatorProfileTabs';

export default function ProfileView({ user, activeTab, onTabChange, onEdit }) {
  return (
    <div className="space-y-6">
      <ProfileHeader user={user} onEdit={onEdit} />

      <ProfileTabs tabs={creatorProfileTabs} activeTab={activeTab} onChange={onTabChange} />

      <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
        <ProfileOverViewCard user={user} tab={activeTab} />

        <Sidebar user={user} />
      </div>
    </div>
  );
}
