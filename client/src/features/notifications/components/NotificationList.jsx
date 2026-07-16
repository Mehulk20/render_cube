import NotificationItem from './NotificationItem';

export default function NotificationList({ notifications, onDelete }) {
  return (
    <ul role="list" className="divide-y divide-border/60">
      {notifications.map((notification) => (
        <NotificationItem key={notification.id} notification={notification} onDelete={onDelete} />
      ))}
    </ul>
  );
}
