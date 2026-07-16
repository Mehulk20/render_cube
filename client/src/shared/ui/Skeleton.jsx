import clsx from 'clsx';

// Reuses the centralized .bg-shimmer + .animate-shimmer utilities from utilities.css
// and animation.css instead of re-implementing the gradient/keyframe inline.
export default function Skeleton({ className }) {
  return (
    <div
      className={clsx(
        'rounded-lg bg-surface-raised bg-shimmer animate-shimmer',
        className
      )}
    />
  );
}
