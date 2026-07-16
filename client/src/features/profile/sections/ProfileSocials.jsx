import { SocialLinksCard } from '../components';

export default function ProfileSocials({ social, className = '' }) {
  return (
    <div className={className}>
      <SocialLinksCard social={social || {}} />
    </div>
  );
}
