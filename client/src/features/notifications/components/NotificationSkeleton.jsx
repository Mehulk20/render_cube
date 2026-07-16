export default function NotificationSkeleton({ rows = 6 }) {
  return (
    <div aria-hidden="true" aria-busy="true" className="divide-y divide-border/60">
      {Array.from({ length: rows }).map((_, i) => (
        <div key={i} className="flex gap-3 p-4">
          <div className="h-11 w-11 shrink-0 overflow-hidden rounded-xl bg-surface-raised">
            <div className="h-full w-full bg-shimmer animate-shimmer" />
          </div>

          <div className="min-w-0 flex-1 space-y-2">
            <div className="h-4 w-32 overflow-hidden rounded bg-surface-raised">
              <div className="h-full w-full bg-shimmer animate-shimmer" />
            </div>

            <div className="h-3 w-full overflow-hidden rounded bg-surface-raised">
              <div className="h-full w-full bg-shimmer animate-shimmer" />
            </div>

            <div className="h-3 w-20 overflow-hidden rounded bg-surface-raised">
              <div className="h-full w-full bg-shimmer animate-shimmer" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
