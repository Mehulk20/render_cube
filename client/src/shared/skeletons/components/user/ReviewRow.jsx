import { Bar, Circle } from '../common';

export default function ReviewRow() {
  return (
    <div className="space-y-2 py-3">
      <div className="flex items-center justify-between">
        <Bar className="h-3 w-20" />
        <Bar className="h-2.5 w-14" />
      </div>
      <Bar className="h-2.5 w-full" />
      <Bar className="h-2.5 w-3/4" />
      <div className="flex items-center gap-2 pt-1">
        <Circle className="h-5 w-5" />
        <Bar className="h-2.5 w-16" />
      </div>
    </div>
  );
}
