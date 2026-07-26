import { Card } from '../../../shared/components';

const Skeleton = ({ className }) => (
  <div className={`animate-pulse rounded-full bg-ink-200 ${className}`} />
);

export default function ProfileHeaderSkeleton() {
  return (
    <div className="overflow-hidden rounded-2xl bg-surface shadow-card ring-1 ring-border/5">
      {/* Cover */}
      <Skeleton className="h-40 w-full sm:h-52 rounded-none" />

      {/* Body */}
      <div className="relative -mt-16 px-5 pb-5 sm:px-8 sm:pb-6">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          {/* Left */}
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end">
            <Skeleton className="h-28 w-28 rounded-full ring-4 ring-surface" />

            <div className="space-y-4 pb-1">
              <Skeleton className="h-8 w-56" />
              <Skeleton className="h-5 w-36" />
              <Skeleton className="h-4 w-40" />
            </div>
          </div>

          {/* Right */}
          <div className="flex flex-col items-center gap-5 pt-2 lg:items-end">
            <div className="flex gap-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex flex-col items-center">
                  <Skeleton className="h-6 w-10" />
                  <Skeleton className="mt-2 h-4 w-16" />
                </div>
              ))}
            </div>

            <div className="flex gap-2">
              <Skeleton className="h-10 w-10 rounded-full" />
              <Skeleton className="h-10 w-10 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
