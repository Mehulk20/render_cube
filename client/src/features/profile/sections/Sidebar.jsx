import ProfileSocials from './ProfileSocials';
import ProfileStatus from './ProfileStatus';

export default function Sidebar({ user }) {
  return (
    <div className="space-y-6">
      <ProfileSocials social={user.social} className="hidden lg:block" />

      <ProfileStatus />
    </div>
  );
}
