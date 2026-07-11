import { Camera, MapPin, Link2, Calendar } from 'lucide-react';
import { Avatar, Badge, Button } from '../ui';
import { AuroraCover } from '../common';

export default function ProfileHeader({ user, onEdit }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-surface">
      <div className="relative">
        <AuroraCover className="h-36 sm:h-44" />
        <button className="absolute right-3 top-3 flex items-center gap-1.5 rounded-lg bg-black/40 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-sm hover:bg-black/60">
          <Camera size={13} /> Change Cover
        </button>
      </div>
      <div className="px-5 pb-5 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="-mt-10 flex items-end gap-4 sm:-mt-12">
            <span className="relative">
              <Avatar src={user.avatar} size="xl" verified={user.verified} ring />
              <button className="absolute bottom-0 right-0 flex h-7 w-7 items-center justify-center rounded-full bg-violet text-white ring-4 ring-surface">
                <Camera size={12} />
              </button>
            </span>
            <div className="pb-1">
              <h1 className="flex items-center gap-1.5 font-display text-xl font-semibold text-ink">
                {user.name}
              </h1>
              <p className="text-sm text-ink-faint">@{user.username}</p>
            </div>
          </div>
          <Button onClick={onEdit} variant="secondary" size="sm">
            Edit Profile
          </Button>
        </div>

        <div className="mt-3 flex items-center gap-2">
          {user.role === 'creator' && <Badge tone="mint">Creator</Badge>}
        </div>

        <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm text-ink-faint">
          <span className="flex items-center gap-1.5">
            <MapPin size={14} /> {user.location}
          </span>
          <a href="#" className="flex items-center gap-1.5 text-violet hover:text-fuchsia">
            <Link2 size={14} /> {user.website}
          </a>
          <span className="flex items-center gap-1.5">
            <Calendar size={14} /> Joined {user.joined}
          </span>
        </div>

        <div className="mt-5 flex gap-6 border-t border-border-soft pt-4 text-sm">
          <span>
            <strong className="font-display text-ink">{(user.followers / 1000).toFixed(1)}K</strong>{' '}
            <span className="text-ink-faint">Followers</span>
          </span>
          <span>
            <strong className="font-display text-ink">{user.following}</strong>{' '}
            <span className="text-ink-faint">Following</span>
          </span>
          <span>
            <strong className="font-display text-ink">{user.assetsCount}</strong>{' '}
            <span className="text-ink-faint">Assets</span>
          </span>
        </div>
      </div>
    </div>
  );
}
