import {
  BadgeCheck,
  Bell,
  Download,
  Heart,
  ShieldCheck,
  Star,
  Trash2,
  UserPlus,
  Wallet,
  XCircle,
} from 'lucide-react';

import { timeAgo } from './notification-utils';
import { NotificationType } from './notification-types';

const iconMap = {
  [NotificationType.SALE]: {
    icon: Wallet,
    color: 'bg-emerald-500/10 text-emerald-500',
  },

  [NotificationType.DOWNLOAD]: {
    icon: Download,
    color: 'bg-violet/10 text-violet',
  },

  [NotificationType.REVIEW]: {
    icon: Star,
    color: 'bg-amber-500/10 text-amber-500',
  },

  [NotificationType.FOLLOWER]: {
    icon: UserPlus,
    color: 'bg-sky-500/10 text-sky-500',
  },

  [NotificationType.PAYOUT]: {
    icon: Wallet,
    color: 'bg-emerald-500/10 text-emerald-500',
  },

  [NotificationType.APPROVED]: {
    icon: BadgeCheck,
    color: 'bg-green-500/10 text-green-500',
  },

  [NotificationType.REJECTED]: {
    icon: XCircle,
    color: 'bg-red-500/10 text-red-500',
  },

  [NotificationType.SECURITY]: {
    icon: ShieldCheck,
    color: 'bg-orange-500/10 text-orange-500',
  },

  [NotificationType.SYSTEM]: {
    icon: Bell,
    color: 'bg-ink-200 text-ink',
  },
};

export default function NotificationItem({ notification, onDelete }) {
  const config = iconMap[notification.type] || iconMap.system;

  const Icon = config.icon;

  return (
    <div
      className="
      group
      flex
      items-start
      gap-3
      border-b
      border-border/60
      p-4
      transition-all
      duration-200
      hover:bg-surface-raised
      "
    >
      {/* Icon */}

      <div
        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${config.color}`}
      >
        <Icon size={18} />
      </div>

      {/* Content */}

      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2">
          <h4
            className={`truncate text-sm font-semibold ${
              notification.read ? 'text-ink' : 'text-violet'
            }`}
          >
            {notification.title}
          </h4>

          {!notification.read && <span className="h-2 w-2 rounded-full bg-violet" />}
        </div>

        <p className="mt-1 line-clamp-2 text-sm text-ink-soft">{notification.message}</p>

        <p className="mt-2 text-xs text-ink-faint">{timeAgo(notification.time)}</p>
      </div>

      {/* Delete */}

      <button
        onClick={() => onDelete(notification.id)}
        className="
        rounded-lg
        p-2
        opacity-0
        transition
        hover:bg-red-500/10
        hover:text-red-500
        group-hover:opacity-100
        "
      >
        <Trash2 size={16} />
      </button>
    </div>
  );
}
