export default function EmptyState({ icon: Icon, title, text, action }) {
  return (
    <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-border px-6 py-16 text-center">
      {Icon && (
        <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-surface-raised text-foreground-faint">
          <Icon size={22} />
        </span>
      )}
      <h3 className="font-display text-base font-semibold text-foreground">{title}</h3>
      {text && <p className="mt-1.5 max-w-xs text-sm text-foreground-faint">{text}</p>}
      {action && <div className="mt-5">{action}</div>}
    </div>
  );
}
