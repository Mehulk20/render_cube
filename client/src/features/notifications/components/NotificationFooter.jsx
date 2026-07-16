import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function NotificationFooter() {
  return (
    <footer className="shrink-0 border-t border-border bg-background p-3">
      <Link
        to="/notifications"
        className="group flex items-center justify-center gap-2 rounded-xl py-3 text-sm font-medium text-violet transition-interactive hover:bg-violet/10 focus-ring"
      >
        View all notifications
        <ChevronRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
      </Link>
    </footer>
  );
}
