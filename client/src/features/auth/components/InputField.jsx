import { forwardRef } from 'react';

const InputField = forwardRef(function InputField(
  { id, label, icon: Icon, error, trailing, className = '', wrapperClassName = '', ...props },
  ref
) {
  return (
    <div className={wrapperClassName}>
      {label && (
        <label htmlFor={id} className="mb-2 block text-sm font-semibold text-foreground">
          {label}
        </label>
      )}
      <div className="relative">
        {Icon && (
          <Icon
            className="pointer-events-none absolute left-3.5 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-foreground-faint"
            strokeWidth={1.8}
          />
        )}
        <input
          id={id}
          ref={ref}
          className={`
            w-full rounded-xl border bg-input/60 py-3 text-[15px] text-foreground placeholder:text-foreground-faint outline-none
            transition-all duration-[var(--duration-fast)] ease-[var(--ease-standard)]
            focus:border-primary focus:bg-input focus:ring-4 focus:ring-primary/10
            ${Icon ? 'pl-11' : 'pl-4'} ${trailing ? 'pr-11' : 'pr-4'}
            ${error ? 'border-danger focus:border-danger focus:ring-danger/10' : 'border-input-border'}
            ${className}
          `}
          {...props}
        />
        {trailing}
      </div>
      {error && (
        <p className="mt-1.5 text-xs font-medium text-danger" role="alert">
          {error}
        </p>
      )}
    </div>
  );
});

export default InputField;
