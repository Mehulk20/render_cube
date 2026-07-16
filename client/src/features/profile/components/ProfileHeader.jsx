import { motion } from 'framer-motion';
import { MapPin, CalendarDays, BadgeCheck } from 'lucide-react';

import { ProfileAvatar, ProfileActions } from '.';

export default function ProfileHeader({
  user,
  editable = false,
  isCreator = false,
  following = false,

  onEdit,
  onFollow,
  onShare,
  onMessage,
}) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.35,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="rounded-3xl border border-border bg-surface p-6"
    >
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        {/* Left */}

        <div className="flex items-start gap-5">
          <ProfileAvatar src={user.avatar} alt={user.name} editable={editable} />

          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-2">
              <h2 className="font-display text-2xl font-semibold text-ink">{user.name}</h2>

              {isCreator && <BadgeCheck size={20} className="fill-violet text-violet" />}
            </div>

            <p className="text-sm text-ink-faint">@{user.username}</p>

            {user.bio && (
              <p className="max-w-2xl text-sm leading-relaxed text-ink-soft">{user.bio}</p>
            )}

            <div className="flex flex-wrap items-center gap-5 text-sm text-ink-faint">
              {user.location && (
                <span className="flex items-center gap-1.5">
                  <MapPin size={15} />
                  {user.location}
                </span>
              )}

              {user.createdAt && (
                <span className="flex items-center gap-1.5">
                  <CalendarDays size={15} />
                  Joined{' '}
                  {new Date(user.createdAt).toLocaleDateString('en-US', {
                    month: 'short',
                    year: 'numeric',
                  })}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Right */}

        <ProfileActions
          editable={editable}
          following={following}
          onEdit={onEdit}
          onFollow={onFollow}
          onShare={onShare}
          onMessage={onMessage}
        />
      </div>
    </motion.section>
  );
}
