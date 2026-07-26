import clsx from 'clsx';

const tones = {
  primary: 'bg-brand-500/15 text-brand-500 border-brand-500/30',
  success: 'bg-success/15 text-success border-success/30',
  warning: 'bg-warning/15 text-warning border-warning/30',
  danger: 'bg-danger/15 text-danger border-danger/30',
  info: 'bg-info/15 text-info border-info/30',
  neutral: 'bg-surface-raised text-foreground-soft border-border',
};

export default function Badge({ tone = 'primary', className, children }) {
  return <span className={clsx('badge-base', tones[tone], className)}>{children}</span>;
}
