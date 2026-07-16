import { ChipSkeleton } from '../common';

const WIDTHS = ['w-24', 'w-20', 'w-28', 'w-16', 'w-24', 'w-20', 'w-28'];

export default function CategoryChips() {
  return (
    <div className="scrollbar-hide -mx-4 mb-8 flex gap-2.5 overflow-x-auto px-4 sm:-mx-6 sm:px-6 lg:mx-0 lg:flex-wrap lg:px-0">
      {WIDTHS.map((w, i) => (
        <ChipSkeleton key={i} className={`h-9 shrink-0 ${w}`} />
      ))}
    </div>
  );
}
