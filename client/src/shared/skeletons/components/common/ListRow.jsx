import { Bar, Circle } from './Primitives';

export default function ListRow() {
  return (
    <div className="flex items-center gap-3 py-2.5">
      <div className="skeleton h-11 w-11 shrink-0 rounded-lg" />
      <div className="flex-1 space-y-2">
        <Bar className="h-3 w-3/4" />
        <Bar className="h-2.5 w-1/2" />
      </div>
      <Circle className="h-6 w-6 shrink-0" />
    </div>
  );
}
