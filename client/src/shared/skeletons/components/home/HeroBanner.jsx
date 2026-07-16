import { Bar } from '../common';

export default function HeroBanner() {
  return (
    <div className="skeleton-panel relative mb-8 overflow-hidden rounded-2xl p-6 sm:p-10 lg:p-14">
      <div className="max-w-lg space-y-4">
        <Bar rounded="rounded-full" className="h-6 w-32" />
        <Bar className="h-8 w-full sm:h-10" />
        <Bar className="h-8 w-2/3 sm:h-10" />
        <Bar className="h-3 w-full max-w-sm" />
        <Bar className="h-3 w-4/5 max-w-sm" />
        <div className="flex flex-wrap gap-3 pt-2">
          <Bar className="h-11 w-36 rounded-xl" />
          <Bar className="h-11 w-32 rounded-xl" />
        </div>
      </div>
    </div>
  );
}
