import { useRef } from 'react';
import clsx from 'clsx';

import NotificationHeader from './NotificationHeader';
import NotificationList from './NotificationList';
import NotificationFooter from './NotificationFooter';
import NotificationEmpty from './NotificationEmpty';
import { useClickOutside, useEscapeKey } from '../services/hooks';

export default function NotificationPanel({
  open,
  triggerRef,
  notifications,
  onClose,
  onDelete,
  onMarkAllRead,
}) {
  const panelRef = useRef(null);

  useClickOutside([panelRef, triggerRef], onClose, { enabled: open });
  useEscapeKey(onClose, { enabled: open });

  return (
    <div
      role="dialog"
      aria-label="Notifications"
      aria-hidden={!open}
      className={clsx(
        'absolute right-0 top-full z-50 mt-3 origin-top-right',
        'w-[min(23.75rem,calc(100vw-2rem))]',
        'transition-interactive',
        open
          ? 'translate-y-0 scale-100 opacity-100'
          : 'pointer-events-none -translate-y-2 scale-95 opacity-0'
      )}
    >
      <div
        ref={panelRef}
        className={clsx(
          'flex max-h-[min(32.5rem,calc(100vh-8.5rem))] flex-col overflow-hidden',
          'rounded-2xl border border-border bg-background shadow-floating'
        )}
      >
        <NotificationHeader notifications={notifications} onMarkAllRead={onMarkAllRead} />

        <div className="scrollbar-hide min-h-0 flex-1 overflow-y-auto">
          {notifications.length === 0 ? (
            <NotificationEmpty />
          ) : (
            <NotificationList notifications={notifications} onDelete={onDelete} />
          )}
        </div>

        <NotificationFooter />
      </div>
    </div>
  );
}
