import clsx from 'clsx';

const tones = {
  violet: 'bg-violet/15 text-violet border-violet/30',
  mint: 'bg-mint/15 text-mint border-mint/30',
  amber: 'bg-amber/15 text-amber border-amber/30',
  rose: 'bg-rose/15 text-rose border-rose/30',
  neutral: 'bg-surface-raised text-ink-soft border-border',
};

export default function Badge({ tone = 'violet', className, children }) {
  return (
    <span className={clsx('inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-xs font-medium', tones[tone], className)}>
      {children}
    </span>
  );
}
