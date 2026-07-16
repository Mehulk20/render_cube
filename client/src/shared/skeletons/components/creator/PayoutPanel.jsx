import { Bar, Circle, Panel } from '../common';

export default function PayoutPanel() {
  return (
    <Panel className="flex items-center gap-4 p-5">
      <div className="flex-1 space-y-2">
        <Bar className="h-3.5 w-32" />
        <Bar className="h-7 w-24" />
        <Bar className="h-2.5 w-full" />
        <Bar className="h-9 w-32 rounded-lg" />
      </div>
      <Circle className="h-14 w-14 shrink-0" />
    </Panel>
  );
}
