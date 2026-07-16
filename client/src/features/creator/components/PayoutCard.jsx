import { CheckCircle2 } from 'lucide-react';
import clsx from 'clsx';

export default function PayoutCard({
  title = 'Next Payout',
  amount = '$850.00',
  status = 'Completed',
  variant = 'success',
}) {
  const variants = {
    success: {
      container: 'border-success/20 bg-success/10',
      badge: 'bg-success text-white',
      icon: 'text-success',
    },

    pending: {
      container: 'border-warning/20 bg-warning/10',
      badge: 'bg-warning text-white',
      icon: 'text-warning',
    },

    failed: {
      container: 'border-danger/20 bg-danger/10',
      badge: 'bg-danger text-white',
      icon: 'text-danger',
    },
  };

  const current = variants[variant] ?? variants.success;

  return (
    <div
      className={clsx(
        `
        flex
        items-center
        justify-between
        rounded-xl
        border
        px-5
        py-4
        transition-all
        duration-300
        hover:shadow-card
      `,
        current.container
      )}
    >
      {/* Left */}

      <div>
        <p className="text-xs font-medium text-foreground-muted">{title}</p>

        <h3 className="mt-1 font-display text-2xl font-bold text-foreground">{amount}</h3>
      </div>

      {/* Right */}

      <div
        className={clsx(
          `
          inline-flex
          items-center
          gap-2
          rounded-full
          px-3
          py-1.5
          text-xs
          font-semibold
        `,
          current.badge
        )}
      >
        <CheckCircle2 size={14} className={current.icon} />

        {status}
      </div>
    </div>
  );
}
