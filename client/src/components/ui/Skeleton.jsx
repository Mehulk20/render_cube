import clsx from 'clsx';

export default function Skeleton({ className }) {
  return (
    <div className={clsx('relative overflow-hidden rounded-lg bg-surface-raised', className)}>
      <div
        className="absolute inset-0 -translate-x-full animate-shimmer bg-linear-to-r from-transparent via-white/5 to-transparent"
        style={{ backgroundSize: '400px 100%' }}
      />
    </div>
  );
}
