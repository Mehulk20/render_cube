import { Bell } from 'lucide-react';

export default function NotificationButton() {
  return (
    <button
      className="
        relative rounded-xl p-2 text-foreground-soft
        transition-colors duration-[var(--duration-fast)] ease-[var(--ease-standard)]
        hover:bg-surface-hover hover:text-foreground
        focus-ring
      "
      aria-label="Notifications"
    >
      <Bell size={20} />
      <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-danger ring-2 ring-surface" />
    </button>
  );
}
