import { Star } from 'lucide-react';
import { Card, Avatar } from '../ui';

export default function RecentReviews({ reviews }) {
  return (
    <Card className="p-4 sm:p-5">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="font-display text-sm font-semibold text-ink">Recent Reviews</h3>
        <a href="#" className="text-xs font-medium text-violet hover:text-fuchsia">
          View all
        </a>
      </div>
      <ul className="space-y-4">
        {reviews.map((r) => (
          <li key={r.id} className="flex gap-3">
            <Avatar src={r.avatar} size="sm" />
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={12}
                    className={i < r.rating ? 'fill-amber text-amber' : 'text-border'}
                  />
                ))}
                <span className="ml-1.5 text-xs text-ink-faint">{r.time}</span>
              </div>
              <p className="mt-1 text-sm text-ink-soft">{r.text}</p>
              <p className="mt-1 text-xs font-medium text-ink-faint">{r.name}</p>
            </div>
          </li>
        ))}
      </ul>
    </Card>
  );
}
