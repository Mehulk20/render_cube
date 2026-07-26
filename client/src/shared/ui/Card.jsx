import clsx from 'clsx';

export default function Card({ className, children, hover = false, ...props }) {
  return (
    <div
      className={clsx(
        'card rounded-card',
        hover && 'motion-card hover:border-brand-500/40 hover:bg-surface-raised',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
