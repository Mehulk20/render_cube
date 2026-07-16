import { Bar, Panel, AppShell } from '../../components/common';
import { StatCard, AssetRow, ReviewRow } from '../../components/user';

export default function UserDashboardSkeleton() {
  return (
    <AppShell>
      {/* greeting */}
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-2">
          <Bar className="h-6 w-56" />
          <Bar className="h-3 w-72" />
        </div>
        <Bar className="h-9 w-36 rounded-lg" />
      </div>

      {/* stat cards */}
      <div className="mb-6 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-5">
        {Array.from({ length: 5 }).map((_, i) => (
          <StatCard key={i} />
        ))}
      </div>

      {/* main split: chart + side panels */}
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
        <Panel className="p-5 lg:col-span-2">
          <div className="mb-4 flex items-center justify-between">
            <Bar className="h-4 w-40" />
            <Bar className="h-8 w-28 rounded-lg" />
          </div>
          <div className="skeleton h-52 w-full rounded-xl sm:h-64" />
        </Panel>

        <Panel className="p-5">
          <Bar className="mb-4 h-4 w-32" />
          <div className="grid grid-cols-2 gap-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <Bar key={i} className="h-16 w-full rounded-lg" />
            ))}
          </div>
        </Panel>
      </div>

      {/* recent assets + reviews */}
      <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">
        <Panel className="p-5">
          <div className="mb-2 flex items-center justify-between">
            <Bar className="h-4 w-28" />
            <Bar className="h-3 w-12" />
          </div>
          <div className="divide-y divide-[var(--color-border-soft)]">
            {Array.from({ length: 4 }).map((_, i) => (
              <AssetRow key={i} />
            ))}
          </div>
        </Panel>

        <Panel className="p-5">
          <div className="mb-2 flex items-center justify-between">
            <Bar className="h-4 w-28" />
            <Bar className="h-3 w-12" />
          </div>
          <div className="divide-y divide-[var(--color-border-soft)]">
            {Array.from({ length: 3 }).map((_, i) => (
              <ReviewRow key={i} />
            ))}
          </div>
        </Panel>
      </div>
    </AppShell>
  );
}
