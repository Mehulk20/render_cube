import { CheckCircle } from 'lucide-react';

import Button from '../Button';

export default function SignupSuccess({ onClose, onReset }) {
  const handleBack = () => {
    onClose();
    onReset();
  };

  return (
    <div className="flex flex-col items-center gap-5 py-12">
      <div className="flex h-18 w-18 items-center justify-center rounded-full bg-success/10 ring-1 ring-success/20">
        <CheckCircle size={34} className="text-success" />
      </div>

      <div className="space-y-2">
        <h3 className="font-display text-3xl font-bold text-foreground">You're in! 🎉</h3>

        <p className="mx-auto max-w-sm text-sm leading-relaxed text-foreground-muted">
          Welcome to Estadious. Check your inbox to verify your email and start selling.
        </p>
      </div>

      <Button variant="primary" onClick={handleBack}>
        Back to Home
      </Button>
    </div>
  );
}
