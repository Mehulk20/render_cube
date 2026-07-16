import { Bar, Circle } from '../common';

/** A row in the "your listings" management table: thumb, title, price, status, sales. */
export default function ListingRow() {
  return (
    <div className="flex items-center gap-3 py-3">
      <div className="skeleton h-11 w-11 shrink-0 rounded-lg" />
      <div className="min-w-0 flex-1 space-y-2">
        <Bar className="h-3 w-2/3 sm:w-1/2" />
        <Bar className="h-2.5 w-1/3 sm:w-1/4" />
      </div>
      <Bar className="hidden h-3 w-12 sm:block" />
      <Bar rounded="rounded-full" className="h-5 w-16" />
      <Circle className="hidden h-6 w-6 shrink-0 sm:block" />
    </div>
  );
}
