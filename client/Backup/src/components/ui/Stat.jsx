import clsx from 'clsx';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';

export default function Stat({ icon: Icon, label, value, delta, tone = 'violet' }) {
  const positive = typeof delta === 'number' ? delta >= 0 : true;
  const toneClasses = {
    violet: 'bg-violet/15 text-violet',
    mint: 'bg-mint/15 text-mint',
    amber: 'bg-amber/15 text-amber',
    rose: 'bg-rose/15 text-rose',
    cyan: 'bg-cyan/15 text-cyan',
  };
  return (
    <div className="rounded-2xl border border-border bg-surface p-4 sm:p-5 transition-colors hover:border-violet/30">
      <div className="flex items-center justify-between">
        <span className={clsx('flex h-9 w-9 items-center justify-center rounded-xl', toneClasses[tone])}>
          {Icon && <Icon className="h-4.5 w-4.5" size={18} />}
        </span>
      </div>
      <p className="mt-3 font-display text-2xl font-semibold tracking-tight text-ink">{value}</p>
      <p className="text-sm text-ink-faint">{label}</p>
      {delta !== undefined && (
        <p className={clsx('mt-2 flex items-center gap-1 text-xs font-medium', positive ? 'text-mint' : 'text-rose')}>
          {positive ? <ArrowUpRight size={13} /> : <ArrowDownRight size={13} />}
          {Math.abs(delta)}% vs last 30 days
        </p>
      )}
    </div>
  );
}
