import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function NotificationFooter() {
  return (
    <footer className="border-t border-border bg-background p-3">
      <Link
        to="/notifications"
        className="
        group
        flex
        items-center
        justify-center
        gap-2
        rounded-xl
        py-3
        text-sm
        font-medium
        text-violet
        transition
        hover:bg-violet/10
        "
      >
        View All Notifications
        <ChevronRight size={17} className="transition group-hover:translate-x-1" />
      </Link>
    </footer>
  );
}
