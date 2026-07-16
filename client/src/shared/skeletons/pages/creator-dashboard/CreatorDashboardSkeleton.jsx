import { Bar, Panel, AppShell } from '../../components/common';
import { EarningsCard, ListingRow, OrderRow, PayoutPanel } from '../../components/creator';

export default function CreatorDashboardSkeleton() {
  return (
    <AppShell>
      {/* greeting */}
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-2">
          <Bar className="h-6 w-52" />
          <Bar className="h-3 w-72" />
        </div>
        <Bar className="h-9 w-40 rounded-lg" />
      </div>

      {/* earnings summary */}
      <div className="mb-6 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <EarningsCard key={i} />
        ))}
      </div>

      {/* revenue chart + payout */}
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
        <Panel className="p-5 lg:col-span-2">
          <div className="mb-4 flex items-center justify-between">
            <Bar className="h-4 w-40" />
            <Bar className="h-8 w-28 rounded-lg" />
          </div>
          <div className="skeleton h-52 w-full rounded-xl sm:h-64" />
        </Panel>

        <PayoutPanel />
      </div>

      {/* listings management + recent orders */}
      <div className="mt-5 grid min-w-0 grid-cols-1 gap-5 lg:grid-cols-[1fr_360px]">
        <Panel className="min-w-0 p-5">
          <div className="mb-2 flex items-center justify-between">
            <Bar className="h-4 w-32" />
            <Bar className="h-3 w-16" />
          </div>
          <div className="divide-y divide-[var(--color-border-soft)]">
            {Array.from({ length: 6 }).map((_, i) => (
              <ListingRow key={i} />
            ))}
          </div>
        </Panel>

        <Panel className="min-w-0 p-5">
          <div className="mb-2 flex items-center justify-between">
            <Bar className="h-4 w-28" />
            <Bar className="h-3 w-12" />
          </div>
          <div className="divide-y divide-[var(--color-border-soft)]">
            {Array.from({ length: 5 }).map((_, i) => (
              <OrderRow key={i} />
            ))}
          </div>
        </Panel>
      </div>
    </AppShell>
  );
}
