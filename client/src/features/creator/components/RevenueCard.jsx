import { TrendingUp } from 'lucide-react';

export default function RevenueCard({ title = 'Revenue', amount = '$24,790', growth = '+18.6%' }) {
  return (
    <div className="flex items-start justify-between">
      {/* Revenue */}

      <div>
        <p
          className="
            text-xs
            font-medium
            uppercase
            tracking-wide
            text-foreground-faint
          "
        >
          {title}
        </p>

        <h2
          className="
            mt-2
            font-display
            text-4xl
            font-bold
            tracking-tight
            text-foreground
          "
        >
          {amount}
        </h2>
      </div>

      {/* Growth */}

      <div
        className="
          inline-flex
          items-center
          gap-1.5
          rounded-full
          border
          border-success/20
          bg-success-soft
          px-3
          py-1.5
          text-xs
          font-semibold
          text-success
          shadow-xs
        "
      >
        <TrendingUp size={14} />

        {growth}
      </div>
    </div>
  );
}
