import { Bar, Circle } from '../common';

/** A row in the "recent orders" list: buyer, item purchased, amount, timestamp. */
export default function OrderRow() {
  return (
    <div className="flex items-center gap-3 py-2.5">
      <Circle className="h-8 w-8 shrink-0" />
      <div className="min-w-0 flex-1 space-y-1.5">
        <Bar className="h-3 w-1/2" />
        <Bar className="h-2.5 w-1/3" />
      </div>
      <div className="space-y-1.5 text-right">
        <Bar className="ml-auto h-3 w-12" />
        <Bar className="ml-auto h-2.5 w-10" />
      </div>
    </div>
  );
}
