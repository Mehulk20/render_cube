import { Bar, Circle, Panel } from '../common';

/** Stat card with a trend pill — used for revenue / payouts / conversion on the creator dashboard. */
export default function EarningsCard() {
  return (
    <Panel className="p-4">
      <div className="mb-3 flex items-center justify-between">
        <Circle className="h-9 w-9" />
        <Bar rounded="rounded-full" className="h-5 w-12" />
      </div>
      <Bar className="mb-2 h-6 w-20" />
      <Bar className="h-2.5 w-28" />
    </Panel>
  );
}
