import clsx from 'clsx';

export default function Card({ className, children, hover = false, ...props }) {
  return (
    <div
      className={clsx(
        'rounded-2xl border border-border bg-surface',
        hover && 'transition-colors duration-200 hover:border-violet/40 hover:bg-surface-raised',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
