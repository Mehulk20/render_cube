import { Trash2 } from 'lucide-react';

import { timeAgo } from '../services/notification-utils';
import { getNotificationIcon } from '../services';

export default function NotificationItem({ notification, onDelete }) {
  const { icon: Icon, iconColor, iconBg } = getNotificationIcon(notification.type);

  return (
    <li className="group relative flex items-start gap-3 p-4 transition-interactive hover:bg-surface-raised">
      {/* Icon */}
      <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${iconBg}`}>
        <Icon size={18} className={iconColor} />
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

          {!notification.read && (
            <span aria-hidden="true" className="h-1.5 w-1.5 shrink-0 rounded-full bg-violet" />
          )}
        </div>

        <p className="mt-1 line-clamp-2 text-sm text-ink-soft">{notification.message}</p>

        <time dateTime={notification.time} className="mt-2 block text-xs text-ink-faint">
          {timeAgo(notification.time)}
        </time>
      </div>

      {/* Delete */}
      <button
        onClick={() => onDelete(notification.id)}
        aria-label={`Delete notification: ${notification.title}`}
        className="shrink-0 rounded-lg p-2 text-ink-faint opacity-0 transition-interactive hover:bg-danger-soft hover:text-danger focus-ring group-hover:opacity-100 group-focus-within:opacity-100 max-md:opacity-100"
      >
        <Trash2 size={16} />
      </button>
    </li>
  );
}
