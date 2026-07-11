import { Bell } from 'lucide-react';

const NotificationButton = () => {
  return (
    <button className="relative rounded-xl p-2 hover:bg-muted">
      <Bell size={20} />

      <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-red-500" />
    </button>
  );
};

export default NotificationButton;
