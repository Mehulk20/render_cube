import { forwardRef } from 'react';

const InputField = forwardRef(function InputField(
  { id, label, icon: Icon, error, trailing, className = '', wrapperClassName = '', ...props },
  ref
) {
  return (
    <div className={wrapperClassName}>
      {label && (
        <label
          htmlFor={id}
          className="mb-2 block text-sm font-semibold tracking-tight text-foreground"
        >
          {label}
        </label>
      )}

      <div
        className={`
          group relative flex h-14 items-center rounded-2xl
          border bg-input/70 backdrop-blur-xl

          transition-all duration-300 ease-out

          ${
            error
              ? 'border-danger focus-within:border-danger focus-within:ring-4 focus-within:ring-danger/10'
              : 'border-input-border hover:border-border-strong focus-within:border-primary/50 focus-within:ring-4 focus-within:ring-primary/10'
          }
        `}
      >
        {Icon && (
          <Icon
            className="
              pointer-events-none
              ml-4
              h-[18px]
              w-[18px]
              shrink-0
              text-foreground-faint
              transition-colors
              duration-300
              group-focus-within:text-brand-500
            "
            strokeWidth={1.8}
          />
        )}

        <input
          id={id}
          ref={ref}
          className={`
            h-full
            flex-1
            bg-transparent

            border-none
            outline-none
            ring-0
            shadow-none

            px-4

            text-[16px]
            font-medium
            tracking-[-0.01em]

            text-foreground
            placeholder:text-foreground-faint

            focus:outline-none
            focus:ring-0

            ${className}
          `}
          {...props}
        />

        {trailing && <div className="mr-4">{trailing}</div>}
      </div>

      {error && (
        <p className="mt-2 text-xs font-medium text-danger" role="alert">
          {error}
        </p>
      )}
    </div>
  );
});

export default InputField;
