import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { useCurrentUser } from '../hooks';

import { ProfileHero, ProfileEditSection } from '../sections';
import { ProfileView } from '../components';
import { Loader } from 'lucide-react';

export default function Profile() {
  const { data: user, isLoading } = useCurrentUser({});

  const [editing, setEditing] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="mx-auto max-w-5xl space-y-6">
      <ProfileHero editing={editing} onEdit={() => setEditing(true)} />

      <AnimatePresence mode="wait">
        {editing ? (
          <ProfileEditSection
            key="edit"
            user={user}
            showCreatorInfo
            onCancel={() => setEditing(false)}
          />
        ) : (
          <ProfileView
            key="view"
            user={user}
            activeTab={activeTab}
            onTabChange={setActiveTab}
            onEdit={() => setEditing(true)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
