import ProfileAbout from './ProfileAbout';
import ProfileSocials from './ProfileSocials';
import ProfileInfo from './ProfileInfo';

export default function ProfileOverviewSection({ user, tab }) {
  return (
    <div className="space-y-6">
      {(tab === 'overview' || tab === 'about') && <ProfileAbout bio={user.bio} />}

      {(tab === 'overview' || tab === 'creator') && <ProfileInfo user={user} />}

      {(tab === 'overview' || tab === 'social') && (
        <ProfileSocials social={user.social} className="lg:hidden" />
      )}
    </div>
  );
}
