import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';

import { useGetCurrentUserQuery } from '../services';

import { ProfilePageSkeleton } from '../../../shared/skeletons/pages/profile';

import {
  UserProfileHero,
  ProfileAbout,
  ProfileSocials,
  ProfileEditSection,
  CreatorCTA,
} from '../sections';

import { ProfileHeader } from '../components';

const user = {
  _id: '685f7a52e4c0bcb7b71c9f01',

  // Basic Info
  name: 'Aarav Sharma',
  username: 'aaravdesigns',
  email: 'aarav@example.com',
  bio: 'Motion Designer & UI Creator. I build modern UI kits, animations and premium After Effects templates for creators worldwide.',

  // Media
  avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400',
  banner: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1600',

  // Profile
  location: 'Kolkata, India',
  website: 'https://rendercube.dev',
  createdAt: '2024-02-10T09:30:00Z',

  // Role
  role: 'creator',
  creatorProfile: true,

  // Creator Store
  storeName: 'Aarav Studio',
  storeSlug: 'aarav-studio',
  storeDescription:
    'Premium UI Kits, Motion Graphics, Lottie Animations and After Effects Templates.',
  storeCategory: 'Motion Graphics',

  // Stats
  stats: {
    followers: 1240,
    following: 189,
    assets: 132,
    downloads: 12580,
    collections: 18,
    views: 84200,
    likes: 3240,
  },

  // Social
  social: {
    website: 'https://aaravstudio.dev',
    github: 'https://github.com/aaravdesigns',
    dribbble: 'https://dribbble.com/aarav',
    behance: 'https://behance.net/aarav',
    instagram: 'https://instagram.com/aaravdesigns',
    x: 'https://x.com/aaravdesigns',
    linkedin: 'https://linkedin.com/in/aaravdesigns',
    youtube: 'https://youtube.com/@aaravdesigns',
  },

  // Verification
  verification: {
    email: true,
    identity: true,
    creator: true,
  },

  // Preferences
  preferences: {
    theme: 'dark',
    language: 'en',
    notifications: true,
  },
};

export default function UserProfile() {
  // const { data: user, isLoading, isError } = useGetCurrentUserQuery();

  const [editing, setEditing] = useState(false);

  // if (isLoading) return <ProfilePageSkeleton />;

  // if (isError) {
  //   return (
  //     <div className="rounded-xl border border-red-500/20 bg-red-500/10 p-6">
  //       Failed to load profile.
  //     </div>
  //   );
  // }

  // if (!user) return null;

  function handleSave() {
    // TODO:
    // updateCurrentUser()
    setEditing(false);
  }

  return (
    <div className="mx-auto max-w-4xl space-y-6">
      <UserProfileHero />

      <AnimatePresence mode="wait">
        {editing ? (
          <ProfileEditSection user={user} onSave={handleSave} onCancel={() => setEditing(false)} />
        ) : (
          <div className="space-y-6">
            <ProfileHeader user={user} onEdit={() => setEditing(true)} />

            <div className="grid gap-6 sm:grid-cols-2">
              <ProfileAbout bio={user.bio} />

              <ProfileSocials social={user.social} />
            </div>

            {!user.creatorProfile && <CreatorCTA />}
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
