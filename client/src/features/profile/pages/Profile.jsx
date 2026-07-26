import { AnimatePresence, motion } from 'framer-motion';
import { useCurrentUser } from '../../user/hooks';

import { ProfileHeader, ProfileContent } from '../sections';
import { Loader } from 'lucide-react';
import { ProfileHeaderSkeleton, ProfileSkeleton } from '../skeletons';

export default function Profile() {
  const { isLoading } = useCurrentUser({});

  return (
    <div className="mx-auto my-6 max-w-6xl space-y-18">
      {isLoading ? <ProfileHeaderSkeleton /> : <ProfileHeader />}

      <AnimatePresence mode="wait">
        {isLoading ? <ProfileSkeleton /> : <ProfileContent />}
      </AnimatePresence>
    </div>
  );
}
