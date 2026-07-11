import { useEffect, useRef } from 'react';
import clsx from 'clsx';

import NotificationHeader from './NotificationHeader';
import NotificationList from './NotificationList';
import NotificationFooter from './NotificationFooter';
import NotificationEmpty from './NotificationEmpty';

export default function NotificationPanel({
  open,
  triggerRef,
  notifications,
  onClose,
  onDelete,
  onMarkAllRead,
}) {
  const panelRef = useRef(null);

  // Close on outside click
  useEffect(() => {
    function handleClick(e) {
      if (!panelRef.current) return;

      const clickedPanel = panelRef.current.contains(e.target);
      const clickedTrigger = triggerRef?.current?.contains(e.target);

      if (!clickedPanel && !clickedTrigger) {
        onClose();
      }
    }

    if (open) {
      document.addEventListener('mousedown', handleClick);
    }

    return () => document.removeEventListener('mousedown', handleClick);
  }, [open, onClose, triggerRef]);

  // Close on ESC
  useEffect(() => {
    function handleKey(e) {
      if (e.key === 'Escape') {
        onClose();
      }
    }

    if (open) {
      window.addEventListener('keydown', handleKey);
    }

    return () => window.removeEventListener('keydown', handleKey);
  }, [open, onClose]);

  return (
    <div
      className={clsx(
        'absolute right-0 top-full z-50 mt-3 w-95 origin-top-right transition-all duration-200',
        open ? 'translate-y-0 opacity-100' : 'pointer-events-none -translate-y-2 opacity-0'
      )}
    >
      <div
        ref={panelRef}
        className="flex max-h-130 flex-col overflow-hidden rounded-2xl border border-border bg-background shadow-2xl"
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
