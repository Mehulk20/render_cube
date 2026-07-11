import { CheckCheck } from 'lucide-react';

export default function NotificationHeader({ notifications, onMarkAllRead }) {
  const unread = notifications.filter((n) => !n.read).length;

  return (
    <header className="sticky top-0 z-20 border-b border-border bg-background px-5 py-4 backdrop-blur">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="font-semibold text-ink">Notifications</h3>

          <p className="mt-1 text-xs text-ink-faint">
            {unread} unread notification
            {unread !== 1 && 's'}
          </p>
        </div>

        {unread > 0 && (
          <button
            onClick={onMarkAllRead}
            className="flex items-center gap-2 rounded-lg px-3 py-2 text-xs font-medium text-violet transition hover:bg-violet/10"
          >
            <CheckCheck size={15} />
            Mark all read
          </button>
        )}
      </div>
    </header>
  );
}
