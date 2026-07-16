import ProfileSocials from './ProfileSocials';
import CreatorStatus from './CreatorStatus';

export default function CreatorSidebar({ user }) {
  return (
    <div className="space-y-6">
      <ProfileSocials social={user.social} className="hidden lg:block" />

      <CreatorStatus />
    </div>
  );
}
