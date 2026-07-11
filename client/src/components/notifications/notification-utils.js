export function timeAgo(date) {
  const now = new Date();
  const seconds = Math.floor((now - new Date(date)) / 1000);

  const intervals = [
    { label: 'year', value: 31536000 },
    { label: 'month', value: 2592000 },
    { label: 'week', value: 604800 },
    { label: 'day', value: 86400 },
    { label: 'hour', value: 3600 },
    { label: 'minute', value: 60 },
  ];

  for (const interval of intervals) {
    const count = Math.floor(seconds / interval.value);

    if (count >= 1) {
      return `${count} ${interval.label}${count > 1 ? 's' : ''} ago`;
    }
  }

  return 'Just now';
}
