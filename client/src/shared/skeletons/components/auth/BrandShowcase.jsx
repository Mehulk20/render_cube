import { Bar, Circle } from '../common';

/** Left-hand brand panel on the auth page — hidden below lg, shown alongside the form on wide screens. */
export default function BrandShowcase() {
  return (
    <div className="hidden flex-col justify-center gap-8 px-16 lg:flex">
      <div className="flex items-center gap-2">
        <Circle className="h-9 w-9" />
        <div className="space-y-1.5">
          <Bar className="h-3.5 w-28" />
          <Bar className="h-2.5 w-36" />
        </div>
      </div>
      <div className="space-y-3">
        <Bar className="h-9 w-64" />
        <Bar className="h-9 w-48" />
      </div>
      <div className="max-w-sm space-y-2">
        <Bar className="h-3 w-full" />
        <Bar className="h-3 w-4/5" />
      </div>
      <div className="space-y-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="flex items-center gap-3">
            <Circle className="h-10 w-10 shrink-0" />
            <div className="space-y-1.5">
              <Bar className="h-3 w-32" />
              <Bar className="h-2.5 w-40" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
