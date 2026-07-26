import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useUploadBannerMutation } from '../../user/services';
import {
  BadgeCheck,
  CalendarDays,
  Check,
  MoreHorizontal,
  Plus,
  Share2,
  CameraIcon,
} from 'lucide-react';

import { ProfileAvatar } from '../components';
import { Button } from '../../public/components';
import { StatButton } from '../components';
import { useCurrentUser } from '../../user/hooks';
import { getMediaUrl } from '../../../utils/media';

// NOTE: assumes a cover-upload mutation exists alongside useUploadAvatarMutation.
// Rename this import (and the hook call below) to match your actual services file.

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
  editable = true,
  isCreator = false,

  onEdit,

  onShare,

  onFollowersClick,
  onFollowingClick,
  onPostsClick,
}) {
  const { data: user } = useCurrentUser({});

  const [uploadBanner, { isLoading: isBannerLoading }, error] = useUploadBannerMutation();
  const [showCoverSuccessRing, setShowCoverSuccessRing] = useState(false);

  const coverInputRef = useRef(null);
  const coverError = false;

  const banner = getMediaUrl(user?.bannerUrl);

  useEffect(() => {
    if (!showCoverSuccessRing) return;

    const timer = setTimeout(() => {
      setShowCoverSuccessRing(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [showCoverSuccessRing]);

  const handleCoverUpload = async (file) => {
    if (!file) return;
    try {
      const formData = new FormData();
      formData.append('banner', file);

      await uploadBanner(formData).unwrap();

      setShowCoverSuccessRing(true);
    } catch (err) {
      // `coverError` below already surfaces the failure state.
    }
  };

  const handleCoverFileChange = (e) => {
    const file = e.target.files?.[0];
    e.target.value = '';
    handleCoverUpload(file);
  };

  const triggerCoverFilePicker = () => {
    coverInputRef.current?.click();
  };

  return (
    <motion.div
      className="relative w-full rounded-3xl"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1],
      }}
    >
      {/* Traveling glow border that runs along the card's perimeter, corner to corner, while the banner uploads */}
      <AnimatePresence>
        {isBannerLoading && (
          <motion.svg
            key="cover-travel-border"
            className="pointer-events-none absolute inset-0 z-40 h-full w-full overflow-visible"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.25 } }}
            style={{ filter: 'drop-shadow(0 0 5px var(--color-brand-500, #6366f1))' }}
          >
            <defs>
              <linearGradient id="coverTravelGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="var(--color-brand-300)" />
                <stop offset="20%" stopColor="var(--color-brand-500)" />
                <stop offset="40%" stopColor="var(--color-category-graphics)" />
                <stop offset="60%" stopColor="var(--color-category-video)" />
                <stop offset="80%" stopColor="var(--color-category-photo)" />
                <stop offset="100%" stopColor="var(--color-category-code)" />
              </linearGradient>
            </defs>
            <rect
              x="1.5"
              y="1.5"
              width="calc(100% - 3px)"
              height="calc(100% - 3px)"
              rx="22"
              fill="none"
              stroke="url(#coverTravelGradient)"
              strokeWidth="3"
              strokeLinecap="round"
              pathLength="100"
              strokeDasharray="20 80"
            >
              <animate
                attributeName="stroke-dashoffset"
                values="0;-100"
                dur="2.6s"
                repeatCount="indefinite"
              />
            </rect>
          </motion.svg>
        )}
      </AnimatePresence>

      {/* Steady glowing border shown briefly once the banner upload succeeds */}
      <motion.div
        className="pointer-events-none absolute -inset-1 z-40 rounded-[26px] ring-4 ring-brand-500"
        style={{ boxShadow: '0 0 18px 3px var(--color-brand-500, #6366f1)' }}
        initial={false}
        animate={{
          opacity: showCoverSuccessRing ? 1 : 0,
          scale: showCoverSuccessRing ? 1 : 0.98,
        }}
        transition={{
          duration: 2.5,
          ease: [0.4, 0, 0.2, 1],
        }}
      />

      {/* Everything else stays clipped to the rounded card shape */}
      <div className="overflow-hidden rounded-3xl bg-surface shadow-xl ring-1 ring-black/5">
        {/* Cover */}
        <div className="relative h-40 w-full overflow-hidden sm:h-52">
          {banner ? (
            <motion.img
              src={banner}
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
            <>
              <input
                type="file"
                accept="image/*"
                ref={coverInputRef}
                onChange={handleCoverFileChange}
                className="hidden"
              />
              <motion.button
                type="button"
                onClick={triggerCoverFilePicker}
                disabled={isBannerLoading}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="absolute top-4 right-4 z-30 flex h-11 w-11 items-center justify-center rounded-full bg-white/90 shadow-lg backdrop-blur hover:bg-brand-500 hover:text-white disabled:cursor-not-allowed disabled:opacity-60"
              >
                <CameraIcon size={20} />
              </motion.button>
            </>
          )}

          {coverError && (
            <p className="absolute bottom-3 left-4 z-30 rounded-md bg-white/90 px-2 py-1 text-xs text-red-500">
              Cover upload failed, try again
            </p>
          )}
        </div>
        {/* Body */}
        <div className="relative z-20 -mt-16 px-5 pb-5 sm:px-8 sm:pb-6">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            {/* Left: avatar + identity */}
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end">
              <div className="-mt-14 sm:-mt-16">
                <ProfileAvatar user={user} editable={editable} onEdit={onEdit} />
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
      </div>
    </motion.div>
  );
}
