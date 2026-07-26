import { forwardRef } from 'react';
import clsx from 'clsx';

const Input = forwardRef(function Input({ className, label, hint, ...props }, ref) {
  return (
    <label className="block">
      {label && <span className="label-base">{label}</span>}
      <input ref={ref} className={clsx('input-base focus-ring-primary', className)} {...props} />
      {hint && <span className="label-hint">{hint}</span>}
    </label>
  );
});

export default Input;
