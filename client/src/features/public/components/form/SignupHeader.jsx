import { X } from 'lucide-react';

export default function SignupHeader({ onClose }) {
  return (
    <div className="mb-8 flex items-start justify-between">
      <div>
        <h3 className="font-display text-3xl font-bold text-foreground">Join as a Creator</h3>

        <p className="mt-2 text-sm text-foreground-muted">Start selling your assets in minutes.</p>
      </div>

      <button
        type="button"
        onClick={onClose}
        aria-label="Close form"
        className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface-raised text-foreground-soft transition-all duration-300 hover:bg-surface-hover hover:text-foreground"
      >
        <X size={16} />
      </button>
    </div>
  );
}
