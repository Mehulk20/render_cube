import { Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

import { Card, Button } from '../../../shared/ui';

export default function CreatorCTA() {
  return (
    <Card className="border-violet/25 bg-gradient-to-br from-violet/10 to-fuchsia/10 p-6">
      <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
        <div className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet/20 text-violet">
            <Sparkles size={20} />
          </span>

          <div>
            <p className="font-display text-sm font-semibold text-ink">You're not a creator yet</p>

            <p className="text-xs text-ink-faint">
              Open a store and start sharing assets with the community.
            </p>
          </div>
        </div>

        <Button as={Link} to="/creator/become" variant="gradient">
          Become a Creator
        </Button>
      </div>
    </Card>
  );
}
