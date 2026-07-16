import { Bar } from '../common';

export default function AssetRow() {
  return (
    <div className="flex items-center gap-3 py-2.5">
      <div className="skeleton h-10 w-10 shrink-0 rounded-lg" />
      <div className="flex-1 space-y-2">
        <Bar className="h-3 w-2/3" />
        <Bar className="h-2.5 w-1/3" />
      </div>
      <Bar className="hidden h-5 w-16 rounded-full sm:block" />
    </div>
  );
}
