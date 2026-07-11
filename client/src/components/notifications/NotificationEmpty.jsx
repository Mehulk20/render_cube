import { BellRing } from 'lucide-react';
import { Button } from '../ui';

export default function NotificationEmpty() {
  return (
    <div className="flex flex-col items-center justify-center px-8 py-16 text-center">
      <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-violet/10 text-violet">
        <BellRing size={28} />
      </div>

      <h3 className="text-lg font-semibold text-ink">You're all caught up</h3>

      <p className="mt-2 max-w-xs text-sm text-ink-faint">
        No new notifications right now. We'll let you know when something important happens.
      </p>

      <Button className="mt-6" variant="gradient">
        Explore Assets
      </Button>
    </div>
  );
}
