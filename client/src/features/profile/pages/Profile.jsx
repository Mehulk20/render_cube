import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';

import { useAuth } from '../../../context/AuthContext';

import { ProfileHero, ProfileEditSection, ProfileOverviewSection, Sidebar } from '../sections';

import { ProfileHeader, ProfileTabs } from '../components';

import { creatorProfileTabs } from '../constants/creatorProfileTabs';

export default function Profile() {
  const { user, updateProfile } = useAuth();

  const [editing, setEditing] = useState(false);
  const [tab, setTab] = useState('overview');

  function handleSave(patch) {
    updateProfile(patch);
    setEditing(false);
  }

  return (
    <div className="mx-auto max-w-5xl space-y-6">
      <ProfileHero editing={editing} onEdit={() => setEditing(true)} />

      <AnimatePresence mode="wait">
        {editing ? (
          <ProfileEditSection
            user={user}
            showCreatorInfo
            onSave={handleSave}
            onCancel={() => setEditing(false)}
          />
        ) : (
          <div className="space-y-6">
            <ProfileHeader user={user} onEdit={() => setEditing(true)} />

            <ProfileTabs tabs={creatorProfileTabs} activeTab={tab} onChange={setTab} />

            <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
              <ProfileOverviewSection user={user} tab={tab} />

              <Sidebar user={user} />
            </div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
