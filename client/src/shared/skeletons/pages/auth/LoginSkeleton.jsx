import { Bar, Panel } from '../../components/common';
import { BrandShowcase } from '../../components/auth';

export default function AuthPageSkeleton() {
  return (
    <div className="grid min-h-screen grid-cols-1 bg-background lg:grid-cols-2">
      <BrandShowcase />

      {/* form panel — full width on mobile/tablet, half on desktop */}
      <div className="flex items-center justify-center px-6 py-12 sm:px-10">
        <Panel className="w-full max-w-md p-6 sm:p-8">
          <Bar className="mb-2 h-6 w-40" />
          <Bar className="mb-8 h-3 w-56" />

          <div className="mb-5 space-y-2">
            <Bar className="h-2.5 w-28" />
            <Bar className="h-11 w-full rounded-lg" />
          </div>
          <div className="mb-4 space-y-2">
            <Bar className="h-2.5 w-20" />
            <Bar className="h-11 w-full rounded-lg" />
          </div>
          <div className="mb-6 flex items-center justify-between">
            <Bar className="h-3 w-24" />
            <Bar className="h-3 w-24" />
          </div>

          <Bar className="mb-6 h-11 w-full rounded-xl" />

          <div className="mb-6 flex items-center gap-3">
            <div className="skeleton h-px flex-1" />
            <Bar className="h-2.5 w-24" />
            <div className="skeleton h-px flex-1" />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <Bar className="h-10 w-full rounded-lg" />
            <Bar className="h-10 w-full rounded-lg" />
          </div>
        </Panel>
      </div>
    </div>
  );
}
