import { Card } from '../../../shared/components';

const Skeleton = ({ className = '' }) => (
  <div className={`animate-pulse rounded-md bg-ink-200 ${className}`} />
);

const ProfileSkeleton = () => {
  return (
    <>
      {/* Tabs */}
      <div className="mb-6 flex gap-6 border-b border-ink-200 pb-3">
        <Skeleton className="h-8 w-20" />
        <Skeleton className="h-8 w-16" />
        <Skeleton className="h-8 w-20" />
        <Skeleton className="h-8 w-16" />
        <Skeleton className="h-8 w-20" />
      </div>

      <main className="flex flex-col gap-6 lg:flex-row items-stretch">
        {/* Left */}
        <div className="flex flex-2 flex-col gap-6">
          {/* About */}
          <Card>
            <div className="flex items-center justify-between mb-5">
              <Skeleton className="h-6 w-32" />
              <Skeleton className="h-5 w-5 rounded-full" />
            </div>

            <div className="space-y-3">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-11/12" />
              <Skeleton className="h-4 w-10/12" />
              <Skeleton className="h-4 w-8/12" />
            </div>
          </Card>

          {/* Creator Info */}
          <Card>
            <div className="flex items-center justify-between mb-5">
              <Skeleton className="h-6 w-44" />
              <Skeleton className="h-5 w-5 rounded-full" />
            </div>

            <div className="grid grid-cols-2 gap-y-6 gap-x-8">
              {Array.from({ length: 10 }).map((_, i) => (
                <div key={i}>
                  <Skeleton className="mb-2 h-3 w-20" />
                  <Skeleton className="h-5 w-32" />
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Right */}
        <div className="flex flex-1 flex-col gap-6">
          {/* Social Links */}
          <Card>
            <div className="flex items-center justify-between mb-5">
              <Skeleton className="h-6 w-32" />
              <Skeleton className="h-5 w-5 rounded-full" />
            </div>

            <div className="space-y-4">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="flex items-center gap-3">
                  <Skeleton className="h-6 w-6 rounded-full" />
                  <Skeleton className="h-4 flex-1" />
                </div>
              ))}
            </div>
          </Card>

          {/* Creator Status */}
          <Card>
            <div className="flex items-center justify-between mb-5">
              <Skeleton className="h-6 w-36" />
              <Skeleton className="h-5 w-5 rounded-full" />
            </div>

            <Skeleton className="mb-6 h-5 w-48" />

            <div className="space-y-4 border-t border-ink-100 pt-5">
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="flex items-center gap-3">
                  <Skeleton className="h-4 w-4 rounded-full" />
                  <Skeleton className="h-4 flex-1" />
                </div>
              ))}
            </div>
          </Card>
        </div>
      </main>
    </>
  );
};

export default ProfileSkeleton;
