import { Bar } from '../common';

export default function Field({ labelWidth = 'w-24' }) {
  return (
    <div className="space-y-2">
      <Bar className={`h-2.5 ${labelWidth}`} />
      <Bar className="h-10 w-full rounded-lg" />
    </div>
  );
}
