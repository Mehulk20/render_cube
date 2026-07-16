import { Bar, Circle, Panel } from '../common';

export default function StatCard() {
  return (
    <Panel className="p-4">
      <div className="mb-3 flex items-center justify-between">
        <Circle className="h-9 w-9" />
      </div>
      <Bar className="mb-2 h-6 w-16" />
      <Bar className="h-2.5 w-24" />
    </Panel>
  );
}
