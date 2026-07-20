import { motion, AnimatePresence } from 'framer-motion';
import {
  BadgeCheck,
  CalendarDays,
  Check,
  MoreHorizontal,
  Plus,
  Share2,
  CameraIcon,
} from 'lucide-react';

import { ProfileAvatar } from '.';
import { Button } from '../../public/components';
import StatButton from './StatButton';

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.07, delayChildren: 0.35 } },
};

const item = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } },
};

function formatCount(n = 0) {
  if (n >= 1000) return `${(n / 1000).toFixed(1).replace(/\.0$/, '')}K`;
  return n;
}

export default function ProfileHeader({
  user,
  editable = true,
  isCreator = false,

  onEdit,

  onShare,

  onFollowersClick,
  onFollowingClick,
  onPostsClick,
}) {
  return (
    <motion.div
      className="w-full overflow-hidden rounded-3xl bg-surface shadow-xl ring-1 ring-black/5"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Cover */}
      <div className="relative h-40 w-full overflow-hidden sm:h-52">
        {user.coverImage ? (
          <motion.img
            src={user.coverImage}
            alt=""
            className="h-full w-full object-cover"
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          />
        ) : (
          <motion.img
            src="https://wallpaperaccess.com/full/1725737.jpg"
            alt=""
            className="h-full w-full object-cover"
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          />
        )}

        {editable && (
          <motion.button
            type="button"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="absolute top-4 right-4 z-30 flex h-11 w-11 items-center justify-center rounded-full bg-white/90 shadow-lg backdrop-blur hover:bg-brand-500 hover:text-white"
          >
            <CameraIcon size={20} />
          </motion.button>
        )}
      </div>
      {/* Body */}
      <div className="relative z-20 -mt-16 px-5 pb-5 sm:px-8 sm:pb-6">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          {/* Left: avatar + identity */}
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end">
            <div className="-mt-14 sm:-mt-16">
              <ProfileAvatar
                src={user.avatar}
                alt={user.name}
                editable={editable}
                online={user.isOnline}
                onEdit={onEdit}
              />
            </div>

            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="pt-1 sm:pb-1"
            >
              <motion.div variants={item} className="flex flex-wrap items-center gap-1.5">
                <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
                  {user.name}
                </h2>
                {isCreator && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 15, delay: 0.55 }}
                  >
                    <BadgeCheck size={20} className="fill-brand-500 text-white" />
                  </motion.span>
                )}
              </motion.div>

              <motion.p variants={item} className=" text-base text-ink-faint">
                @{user.username}
              </motion.p>

              {user.createdAt && (
                <motion.div
                  variants={item}
                  className="mt-2.5 flex items-center gap-1.5 text-sm text-ink-faint"
                >
                  <CalendarDays size={15} />
                  Joined{' '}
                  {new Date(user.createdAt).toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </motion.div>
              )}
            </motion.div>
          </div>

          {/* Right: stats + actions */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="flex flex-col items-center gap-5 lg:items-end pt-2"
          >
            <div className="flex items-center gap-5 sm:gap-7">
              <StatButton value={user.posts?.length ?? 0} label="Posts" onClick={onPostsClick} />
              <div className="h-8 w-px bg-ink-faint/20" />
              <StatButton
                value={formatCount(user.followers?.length)}
                label="Followers"
                onClick={onFollowersClick}
              />
              <div className="h-8 w-px bg-ink-faint/20" />
              <StatButton
                value={user.following?.length ?? 0}
                label="Following"
                onClick={onFollowingClick}
              />
            </div>

            <motion.div variants={item} className="flex items-center gap-2">
              <motion.button
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.92 }}
                onClick={onShare}
                className="flex h-10 w-10 items-center justify-center hover:bg-brand-500 hover:text-ink-50 rounded-full border border-ink-faint/20 text-ink-500 ring-1 ring-brand-600"
              >
                <Share2 size={24}>share</Share2>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.92 }}
                onClick={onShare}
                className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-brand-500 hover:text-ink-50 text-ink-500 ring-1 ring-brand-600"
              >
                <MoreHorizontal size={18} />
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
