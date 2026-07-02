export default function Checkbox({ id, label, checked, onChange, className = '' }) {
  return (
    <label htmlFor={id} className={`inline-flex cursor-pointer select-none items-center gap-2.5 ${className}`}>
      <span className="relative inline-flex h-5 w-5 shrink-0 items-center justify-center">
        <input
          id={id}
          type="checkbox"
          checked={checked}
          onChange={onChange}
          className="peer sr-only"
        />
        <span className="h-5 w-5 rounded-md border-2 border-ink-300 bg-white transition-all duration-200 peer-checked:border-brand-600 peer-checked:bg-gradient-to-br peer-checked:from-brand-500 peer-checked:to-brand-700 dark:border-ink-600 dark:bg-ink-800" />
        <svg
          viewBox="0 0 16 16"
          fill="none"
          className="pointer-events-none absolute h-3.5 w-3.5 scale-0 text-white transition-transform duration-200 peer-checked:scale-100"
        >
          <path d="M3 8.5L6.2 11.5L13 4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
      {label && <span className="text-sm text-ink-700 dark:text-ink-300">{label}</span>}
    </label>
  )
}
