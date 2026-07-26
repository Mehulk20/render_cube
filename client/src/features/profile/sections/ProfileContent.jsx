import { useSelector } from 'react-redux';

import { PROFILE_TABS } from '../../user/constants';

import {
  Tabs,
  AboutCard,
  SocialLinksCard,
  CreatorInfoCard,
  CreatorStatusCard,
} from '../components';

import { selectActiveProfileTab } from '../../user/services';
import { useCurrentUser } from '../../user/hooks';

function ProfileContent() {
  const activeTab = useSelector(selectActiveProfileTab);
  const { data: user, isLoading } = useCurrentUser();

  return (
    <>
      <div>
        <Tabs tabs={PROFILE_TABS} active={activeTab} />
      </div>
      <main className="flex flex-col lg:flex-row gap-6 items-stretch">
        {activeTab === 'overview' && (
          <>
            <div className="flex-2 flex flex-col gap-6 ">
              <AboutCard about={user.bio} />
              <CreatorInfoCard />
            </div>

            <div className="flex-1 flex flex-col gap-6">
              <SocialLinksCard socials={user?.socials} />
              <CreatorStatusCard />
            </div>
          </>
        )}

        {activeTab === 'about' && <AboutCard about={user.bio} />}
        {activeTab === 'social' && <SocialLinksCard socials={user?.socials} />}
      </main>
    </>
  );
}

export default ProfileContent;
