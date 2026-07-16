import { Bar, Circle } from '../common';

export default function FeaturedCard() {
  return (
    <div className="shrink-0">
      <div className="skeleton mb-3 aspect-[4/3] w-52 rounded-2xl sm:w-56" />
      <div className="flex items-center gap-2">
        <Circle className="h-6 w-6 shrink-0" />
        <Bar className="h-2.5 w-20" />
      </div>
      <Bar className="my-2 h-3.5 w-3/4" />
      <div className="flex items-center justify-between">
        <Bar className="h-2.5 w-12" />
        <Bar className="h-3 w-14" />
      </div>
    </div>
  );
}
