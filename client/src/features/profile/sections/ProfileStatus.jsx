import { CheckCircle2 } from 'lucide-react';

import { Card } from '../../../shared/ui';

const statusItems = ['Email Verified', 'Identity Verified', 'Active Creator'];

export default function ProfileStatus() {
  return (
    <Card className="p-5">
      <h3 className="mb-3 font-display text-sm font-semibold text-ink">Creator Status</h3>

      <p className="mb-3 flex items-center gap-2 text-sm text-mint">
        <CheckCircle2 size={16} />
        You are a verified creator.
      </p>

      <ul className="space-y-2">
        {statusItems.map((item) => (
          <li key={item} className="flex items-center gap-2 text-sm text-ink-soft">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-mint/15 text-mint">
              <CheckCircle2 size={12} />
            </span>

            {item}
          </li>
        ))}
      </ul>
    </Card>
  );
}
