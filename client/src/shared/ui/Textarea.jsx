import { forwardRef } from 'react';
import clsx from 'clsx';

const Textarea = forwardRef(function Textarea({ className, label, hint, ...props }, ref) {
  return (
    <label className="block">
      {label && (
        <span className="mb-1.5 block text-sm font-medium text-foreground-soft">{label}</span>
      )}
      <textarea
        ref={ref}
        className={clsx(
          'w-full resize-none rounded-xl border border-border bg-surface-raised px-3.5 py-2.5 text-sm text-foreground placeholder:text-foreground-faint outline-none',
          'transition-colors duration-[var(--duration-fast)] ease-[var(--ease-standard)]',
          'focus:border-primary focus:ring-2 focus:ring-primary/20',
          className
        )}
        {...props}
      />
      {hint && <span className="mt-1 block text-xs text-foreground-faint">{hint}</span>}
    </label>
  );
});

export default Textarea;
