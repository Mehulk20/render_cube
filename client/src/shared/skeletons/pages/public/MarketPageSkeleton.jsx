import { Bar, Circle, Panel, AppShell, AssetThumb, ListRow } from '../../components/common';

function Rail({ count }) {
  return (
    // scrollbar-hide + overflow-x-auto so the rail actually scrolls instead
    // of relying on overflow-hidden to clip it (that was the overflow bug).
    <div className="scrollbar-hide -mx-4 flex gap-4 overflow-x-auto px-4 sm:-mx-6 sm:px-6 lg:mx-0 lg:px-0">
      {Array.from({ length: count }).map((_, i) => (
        <AssetThumb key={i} />
      ))}
    </div>
  );
}

export default function MarketPageSkeleton() {
  return (
    <AppShell>
      {/* greeting + stat row */}
      <div className="mb-6 space-y-2">
        <Bar className="h-6 w-52" />
        <Bar className="h-3 w-72" />
      </div>
      <div className="mb-8 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <Panel key={i} className="flex items-center gap-3 p-4">
            <Circle className="h-9 w-9 shrink-0" />
            <div className="space-y-1.5">
              <Bar className="h-4 w-8" />
              <Bar className="h-2.5 w-14" />
            </div>
          </Panel>
        ))}
      </div>

      {/* min-w-0 on both columns: grid items default to min-width:auto, and
         the fixed 320px column plus the scrollable rails above would
         otherwise force this whole grid wider than the viewport. */}
      <div className="grid min-w-0 grid-cols-1 gap-6 lg:grid-cols-[1fr_320px]">
        <div className="min-w-0 space-y-8">
          <section>
            <div className="mb-3 flex items-center justify-between">
              <Bar className="h-4 w-32" />
              <Bar className="h-3 w-12" />
            </div>
            <Rail count={4} />
          </section>

          <section>
            <div className="mb-3 flex items-center justify-between">
              <Bar className="h-4 w-32" />
              <Bar className="h-3 w-12" />
            </div>
            <Rail count={4} />
          </section>

          <section>
            <div className="mb-3 flex items-center justify-between">
              <Bar className="h-4 w-40" />
              <Bar className="h-3 w-12" />
            </div>
            <Rail count={5} />
          </section>
        </div>

        {/* right column */}
        <div className="min-w-0 space-y-5">
          <Panel className="p-5">
            <Bar className="mb-4 h-4 w-32" />
            <div className="space-y-2.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <div key={i} className="flex items-center gap-3">
                  <Circle className="h-4 w-4" />
                  <Bar className="h-3 w-full" />
                </div>
              ))}
            </div>
          </Panel>

          <Panel className="flex items-center gap-4 p-5">
            <div className="flex-1 space-y-2">
              <Bar className="h-3.5 w-28" />
              <Bar className="h-2.5 w-full" />
              <Bar className="h-9 w-32 rounded-lg" />
            </div>
            <Circle className="h-14 w-14 shrink-0" />
          </Panel>

          <Panel className="p-5">
            <div className="mb-3 flex items-center justify-between">
              <Bar className="h-4 w-24" />
              <Bar className="h-3 w-12" />
            </div>
            <div className="divide-y divide-[var(--color-border-soft)]">
              {Array.from({ length: 3 }).map((_, i) => (
                <ListRow key={i} />
              ))}
            </div>
          </Panel>
        </div>
      </div>
    </AppShell>
  );
}
