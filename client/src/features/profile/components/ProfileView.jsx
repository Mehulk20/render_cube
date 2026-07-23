import ProfileHeader from './ProfileHeader';
import ProfileTabs from './ProfileTabs';
import ProfileOverViewCard from './ProfileOverviewCards';

import { ProfileOverviewSection, Sidebar } from '../sections';

export default function ProfileView({ activeTab, onEdit }) {
  return (
    <div className="space-y-6">
      <ProfileHeader onEdit={onEdit} />

      <ProfileOverViewCard tab={activeTab} />

      <div className="grid gap-6 lg:grid-cols-[1fr_320px]"></div>
    </div>
  );
}
