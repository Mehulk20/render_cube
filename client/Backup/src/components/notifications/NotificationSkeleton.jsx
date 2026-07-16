export default function NotificationSkeleton() {
  return (
    <div className="animate-pulse">
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="flex gap-3 border-b border-border p-4">
          <div className="h-11 w-11 rounded-xl bg-surface-raised" />

          <div className="flex-1 space-y-2">
            <div className="h-4 w-32 rounded bg-surface-raised" />

            <div className="h-3 w-full rounded bg-surface-raised" />

            <div className="h-3 w-20 rounded bg-surface-raised" />
          </div>
        </div>
      ))}
    </div>
  );
}
