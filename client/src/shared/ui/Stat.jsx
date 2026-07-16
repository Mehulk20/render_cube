import clsx from 'clsx';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';

const toneClasses = {
  primary: 'bg-primary/15 text-primary',
  success: 'bg-success/15 text-success',
  warning: 'bg-warning/15 text-warning',
  danger: 'bg-danger/15 text-danger',
  info: 'bg-info/15 text-info',
};

export default function Stat({ icon: Icon, label, value, delta, tone = 'primary' }) {
  const positive = typeof delta === 'number' ? delta >= 0 : true;

  return (
    <div
      className={clsx(
        'rounded-2xl border border-border bg-surface p-4 sm:p-5',
        'transition-colors duration-[var(--duration-normal)] ease-[var(--ease-standard)] hover:border-primary/30'
      )}
    >
      <div className="flex items-center justify-between">
        <span className={clsx('flex h-9 w-9 items-center justify-center rounded-xl', toneClasses[tone])}>
          {Icon && <Icon className="h-4.5 w-4.5" size={18} />}
        </span>
      </div>
      <p className="mt-3 font-display text-2xl font-semibold tracking-tight text-foreground">{value}</p>
      <p className="text-sm text-foreground-faint">{label}</p>
      {delta !== undefined && (
        <p
          className={clsx(
            'mt-2 flex items-center gap-1 text-xs font-medium',
            positive ? 'text-success' : 'text-danger'
          )}
        >
          {positive ? <ArrowUpRight size={13} /> : <ArrowDownRight size={13} />}
          {Math.abs(delta)}% vs last 30 days
        </p>
      )}
    </div>
  );
}
