import { CheckCheck } from 'lucide-react';

export default function NotificationHeader({ notifications, onMarkAllRead }) {
  const unread = notifications.filter((n) => !n.read).length;

  return (
    <header className="sticky top-0 z-10 shrink-0 border-b border-border bg-background/95 px-5 py-4 backdrop-blur-sm">
      <div className="flex items-center justify-between gap-3">
        <div className="min-w-0">
          <h3 className="font-display text-base font-bold text-ink">Notifications</h3>

          <p className="mt-0.5 text-xs text-ink-faint">
            {unread === 0 ? 'You\u2019re all caught up' : `${unread} unread notification${unread !== 1 ? 's' : ''}`}
          </p>
        </div>

        {unread > 0 && (
          <button
            onClick={onMarkAllRead}
            className="flex shrink-0 items-center gap-1.5 rounded-lg px-3 py-2 text-xs font-medium text-violet transition-interactive hover:bg-violet/10 focus-ring"
          >
            <CheckCheck size={15} />
            Mark all read
          </button>
        )}
      </div>
    </header>
  );
}
