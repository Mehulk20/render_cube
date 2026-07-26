import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function NotificationFooter() {
  return (
    <footer className="shrink-0 border-t border-border bg-background p-3">
      <Link
        to="/notifications"
        className="group flex items-center justify-center gap-sm rounded-sm py-md text-sm font-medium text-brand-500 transition-interactive hover:bg-brand-500/10 focus-ring"
      >
        View all notifications
        <ChevronRight
          size={16}
          className="transition-transform duration-200 group-hover:translate-x-1"
        />
      </Link>
    </footer>
  );
}
