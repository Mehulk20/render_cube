import NotificationItem from './NotificationItem';

export default function NotificationList({ notifications, onDelete }) {
  return (
    <div>
      {notifications.map((notification) => (
        <NotificationItem key={notification.id} notification={notification} onDelete={onDelete} />
      ))}
    </div>
  );
}
