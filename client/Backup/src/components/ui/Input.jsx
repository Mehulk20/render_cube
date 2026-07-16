import { forwardRef } from 'react';
import clsx from 'clsx';

const Input = forwardRef(function Input({ className, label, hint, ...props }, ref) {
  return (
    <label className="block">
      {label && <span className="mb-1.5 block text-sm font-medium text-ink-soft">{label}</span>}
      <input
        ref={ref}
        className={clsx(
          'w-full rounded-xl border border-border bg-surface-raised px-3.5 py-2.5 text-sm text-ink placeholder:text-ink-faint outline-none transition-colors duration-150 focus:border-violet focus:ring-2 focus:ring-violet/20',
          className
        )}
        {...props}
      />
      {hint && <span className="mt-1 block text-xs text-ink-faint">{hint}</span>}
    </label>
  );
});

export default Input;
