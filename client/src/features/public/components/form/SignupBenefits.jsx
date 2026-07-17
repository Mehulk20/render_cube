import { CheckCircle } from 'lucide-react';

import { PERKS } from './signup.constants';

export default function SignupBenefits() {
  return (
    <div className="space-y-2 pt-2">
      {PERKS.map((perk) => (
        <div key={perk} className="flex items-center gap-3 text-sm text-foreground-muted">
          <CheckCircle size={16} className="shrink-0 text-success" />

          <span>{perk}</span>
        </div>
      ))}
    </div>
  );
}
