import { Bar, Circle, Panel, SkeletonCard, StatSkeleton, AppShell } from '../../components/common';

export default function ProfilePageSkeleton() {
  return (
    <AppShell>
      {/* Page heading */}
      <div className="mb-6 flex items-center justify-between">
        <div className="space-y-2">
          <Bar className="h-7 w-40" />
          <Bar className="h-3 w-64" />
        </div>
        <Bar className="hidden h-10 w-32 rounded-xl sm:block" />
      </div>

      {/* Cover + avatar */}
      <Panel className="relative mb-16 h-36 overflow-hidden sm:h-48">
        <div className="skeleton h-full w-full" />
        <Circle className="absolute -bottom-10 left-6 h-24 w-24 border-4 border-[var(--color-background)] sm:h-28 sm:w-28" />
      </Panel>

      {/* Identity row */}
      <div className="mb-8 mt-2 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="ml-1 space-y-2 sm:ml-32">
          <Bar className="h-5 w-40" />
          <Bar className="h-3 w-24" />
          <Bar className="h-3 w-32" />
        </div>
        <div className="flex gap-6 sm:gap-8">
          <StatSkeleton />
          <StatSkeleton />
          <StatSkeleton />
        </div>
      </div>

      {/* Card grid */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        <SkeletonCard lines={4} />
        <SkeletonCard lines={4} />
        <Panel className="p-5 md:col-span-2 lg:col-span-1">
          <Bar className="mb-4 h-4 w-28" />
          <div className="space-y-2.5">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="flex items-center gap-2">
                <Circle className="h-4 w-4" />
                <Bar className="h-3 w-full" />
              </div>
            ))}
          </div>
          <Bar className="mt-4 h-9 w-full rounded-xl" />
        </Panel>
      </div>

      {/* Creator info form-like block */}
      <Panel className="mt-5 p-5">
        <Bar className="mb-4 h-4 w-40" />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <Bar className="h-2.5 w-20" />
            <Bar className="h-10 w-full rounded-lg" />
          </div>
          <div className="space-y-2">
            <Bar className="h-2.5 w-24" />
            <Bar className="h-16 w-full rounded-lg" />
          </div>
        </div>
      </Panel>
    </AppShell>
  );
}
