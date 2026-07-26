import { useMemo, useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { Bell } from 'lucide-react';
import clsx from 'clsx';

import NotificationPanel from './NotificationPanel';
import { notifications as initialNotifications } from '../services/notification-data';

const MARK_READ_DELAY = 2500;

export default function NotificationBell() {
  const [open, setOpen] = useState(false);
  const [notifications, setNotifications] = useState(initialNotifications);

  const buttonRef = useRef(null);
  const location = useLocation();

  const unread = useMemo(() => notifications.filter((n) => !n.read).length, [notifications]);

  // Close whenever the route changes so the panel never survives a navigation.
  useEffect(() => {
    setOpen(false);
  }, [location.key]);

  // Give the person a moment to actually see what's new before it's marked read.
  useEffect(() => {
    if (!open) return;

    const timer = setTimeout(() => {
      setNotifications((prev) =>
        prev.map((notification) =>
          notification.read ? notification : { ...notification, read: true }
        )
      );
    }, MARK_READ_DELAY);

    return () => clearTimeout(timer);
  }, [open]);

  function deleteNotification(id) {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  }

  function markAllRead() {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
  }

  return (
    <div className="relative">
      <button
        ref={buttonRef}
        onClick={() => setOpen((prev) => !prev)}
        aria-haspopup="true"
        aria-expanded={open}
        aria-label={unread > 0 ? `Notifications, ${unread} unread` : 'Notifications'}
        className={clsx(
          'group relative flex h-11 w-11 items-center justify-center rounded-full',
          'text-ink-muted transition-interactive hover:bg-brand-50 hover:text-ink',
          'focus-ring',
          open && 'bg-surface-raised text-ink'
        )}
      >
        <Bell
          size={19}
          className={clsx('group-hover:animate-bell', unread > 0 && 'group-hover:animate-bell')}
        />

        <span
          aria-hidden="true"
          className={clsx(
            'absolute -right-0.5 -top-0.5 flex h-5 min-w-5 items-center justify-center rounded-full',
            'bg-violet px-1 text-[10px] font-bold tabular-nums text-white shadow-sm ring-2 ring-background',
            'transition-transform duration-200 ease-out',
            unread > 0 ? 'scale-100 opacity-100' : 'pointer-events-none scale-0 opacity-0'
          )}
        >
          {unread > 99 ? '99+' : unread}
        </span>
      </button>

      <NotificationPanel
        open={open}
        triggerRef={buttonRef}
        notifications={notifications}
        onClose={() => setOpen(false)}
        onDelete={deleteNotification}
        onMarkAllRead={markAllRead}
      />
    </div>
  );
}
