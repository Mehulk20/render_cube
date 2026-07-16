export function Bar({ className = '', rounded = 'rounded-md' }) {
  return <div className={`skeleton ${rounded} ${className}`} />
}

export function Circle({ className = '' }) {
  return <div className={`skeleton rounded-full ${className}`} />
}

/** Card-shaped skeleton surface — mirrors .card's radius/shadow language, no hover-lift. */
export function Panel({ className = '', children }) {
  return <div className={`skeleton-panel rounded-2xl ${className}`}>{children}</div>
}

/** A labeled card matching the "About / Social Links / Creator Status" style cards */
export function SkeletonCard({ className = '', lines = 3, withHeader = true }) {
  return (
    <Panel className={`p-5 ${className}`}>
      {withHeader && (
        <div className="mb-4 flex items-center justify-between">
          <Bar className="h-4 w-28" />
          <Bar className="h-3 w-10" />
        </div>
      )}
      <div className="space-y-2.5">
        {Array.from({ length: lines }).map((_, i) => (
          <Bar key={i} className={`h-3 ${i === lines - 1 ? 'w-2/3' : 'w-full'}`} />
        ))}
      </div>
    </Panel>
  )
}

/** A stat block, e.g. "1.2K Followers" */
export function StatSkeleton({ className = '' }) {
  return (
    <div className={`flex flex-col items-center gap-1.5 ${className}`}>
      <Bar className="h-5 w-12" />
      <Bar className="h-2.5 w-14" />
    </div>
  )
}

/** Small pill / chip skeleton — filters, categories, status badges. */
export function ChipSkeleton({ className = 'h-7 w-20' }) {
  return <Bar rounded="rounded-full" className={className} />
}
