import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { useCurrentUser } from '../../user/hooks';

import { ProfileHero } from '../sections';
import { ProfileView } from '../components';
import { Loader } from 'lucide-react';

export default function Profile() {
  const { isLoading } = useCurrentUser({});

  const [activeTab, setActiveTab] = useState('overview');

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="mx-auto max-w-5xl space-y-6">
      <ProfileHero />

      <AnimatePresence mode="wait">
        <ProfileView key="view" activeTab={activeTab} onTabChange={setActiveTab} />
      </AnimatePresence>
    </div>
  );
}
