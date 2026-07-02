import { forwardRef } from 'react'

const InputField = forwardRef(function InputField(
  { id, label, icon: Icon, error, trailing, className = '', wrapperClassName = '', ...props },
  ref
) {
  return (
    <div className={wrapperClassName}>
      {label && (
        <label htmlFor={id} className="mb-2 block text-sm font-semibold text-ink-800 dark:text-ink-100">
          {label}
        </label>
      )}
      <div className="relative">
        {Icon && (
          <Icon
            className="pointer-events-none absolute left-3.5 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-ink-400 dark:text-ink-500"
            strokeWidth={1.8}
          />
        )}
        <input
          id={id}
          ref={ref}
          className={`w-full rounded-xl border bg-white/60 py-3 text-[15px] text-ink-900 placeholder:text-ink-400 outline-none transition-all duration-200 focus:border-brand-500 focus:bg-white focus:ring-4 focus:ring-brand-500/10 dark:bg-ink-800/40 dark:text-ink-50 dark:placeholder:text-ink-500 dark:focus:bg-ink-800 ${
            Icon ? 'pl-11' : 'pl-4'
          } ${trailing ? 'pr-11' : 'pr-4'} ${
            error
              ? 'border-red-400 focus:border-red-500 focus:ring-red-500/10'
              : 'border-ink-200 dark:border-ink-700'
          } ${className}`}
          {...props}
        />
        {trailing}
      </div>
      {error && (
        <p className="mt-1.5 text-xs font-medium text-red-500" role="alert">
          {error}
        </p>
      )}
    </div>
  )
})

export default InputField
