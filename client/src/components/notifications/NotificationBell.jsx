import { useMemo, useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { Bell } from 'lucide-react';
import clsx from 'clsx';

import NotificationPanel from './NotificationPanel';
import { notifications as initialNotifications } from './notification-data';

export default function NotificationBell() {
  const [open, setOpen] = useState(false);

  const [notifications, setNotifications] = useState(initialNotifications);
  const buttonRef = useRef(null);
  const location = useLocation();

  const unread = useMemo(() => notifications.filter((n) => !n.read).length, [notifications]);

  useEffect(() => {
    setOpen(false);
  }, [location.key]);

  useEffect(() => {
    if (!open) return;

    const timer = setTimeout(() => {
      setNotifications((prev) =>
        prev.map((notification) =>
          notification.read ? notification : { ...notification, read: true }
        )
      );
    }, 2500);

    return () => clearTimeout(timer);
  }, [open]);

  function deleteNotification(id) {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  }

  function markAllRead() {
    setNotifications((prev) =>
      prev.map((n) => ({
        ...n,
        read: true,
      }))
    );
  }

  return (
    <div className="relative">
      <button
        ref={buttonRef}
        onClick={() => setOpen((prev) => !prev)}
        className="
        group
        relative
        flex
        h-11
        w-11
        items-center
        justify-center
        rounded-nav-elm
        transition-all
        hover:bg-surface-raised
        hover:border-violet/40
        "
      >
        <Bell
          size={19}
          className={clsx(
            'transition-transform duration-300 group-hover:rotate-12',
            unread > 0 && 'animate-bell'
          )}
        />

        {unread > 0 && (
          <span
            className={clsx(
              'absolute -right-1 -top-1 flex h-5 min-w-5 origin-center items-center justify-center rounded-full bg-violet px-1 text-[10px] font-bold text-white shadow-md ring-2 ring-background transition-all duration-300 ease-out',
              unread === 0 ? 'pointer-events-none scale-0 opacity-0' : 'scale-100 opacity-100'
            )}
          >
            {unread > 99 ? '99+' : unread}
          </span>
        )}
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
