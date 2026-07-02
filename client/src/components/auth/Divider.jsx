export default function Divider({ label }) {
  return (
    <div className="flex items-center gap-4">
      <span className="h-px flex-1 bg-ink-200 dark:bg-ink-700" />
      {label && <span className="text-xs font-medium text-ink-400 dark:text-ink-500">{label}</span>}
      <span className="h-px flex-1 bg-ink-200 dark:bg-ink-700" />
    </div>
  )
}
