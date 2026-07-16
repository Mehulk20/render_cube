import { BellRing } from 'lucide-react';
import { Button } from '../../../shared/ui';

export default function NotificationEmpty() {
  return (
    <div className="flex flex-col items-center justify-center px-8 py-16 text-center">
      <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-violet/10 text-violet animate-float-slow">
        <BellRing size={28} />
      </div>

      <h3 className="font-display text-lg font-bold text-ink">You're all caught up</h3>

      <p className="mt-2 max-w-xs text-sm text-ink-faint">
        No new notifications right now. We'll let you know when something important happens.
      </p>

      <Button className="mt-6" variant="gradient">
        Explore assets
      </Button>
    </div>
  );
}
