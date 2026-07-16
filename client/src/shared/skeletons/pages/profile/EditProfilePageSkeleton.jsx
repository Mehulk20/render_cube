import { Bar, Circle, Panel } from '../../components/common';
import { Field } from '../../components/profile';

/**
 * Focused edit flow — deliberately not wrapped in AppShell (no sidebar/bottom
 * tabs), matching a dedicated "edit profile" screen rather than a dashboard tab.
 */
export default function EditProfilePageSkeleton() {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-lg px-4 pb-10 pt-5 sm:max-w-2xl sm:px-8">
        {/* header */}
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Circle className="h-5 w-5" />
            <Bar className="h-4 w-24" />
          </div>
          <Bar className="h-4 w-10" />
        </div>

        {/* photo + cover */}
        <div className="mb-6 flex flex-col items-center gap-3">
          <Circle className="h-20 w-20" />
          <Bar className="h-2.5 w-40" />
        </div>
        <Panel className="mb-6 h-32 w-full overflow-hidden sm:h-40">
          <div className="skeleton h-full w-full" />
        </Panel>

        {/* personal info */}
        <Bar className="mb-3 h-4 w-40" />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Field labelWidth="w-28" />
          <Field labelWidth="w-20" />
        </div>
        <div className="mt-4 space-y-2">
          <Bar className="h-2.5 w-10" />
          <Bar className="h-20 w-full rounded-lg" />
        </div>
        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Field labelWidth="w-16" />
          <Field labelWidth="w-16" />
        </div>

        {/* social links */}
        <Bar className="mb-3 mt-7 h-4 w-28" />
        <div className="space-y-3">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="flex items-center gap-3">
              <Circle className="h-8 w-8 shrink-0" />
              <Bar className="h-10 w-full rounded-lg" />
              <Circle className="h-5 w-5 shrink-0" />
            </div>
          ))}
          <Bar className="h-3 w-28" />
        </div>

        {/* creator info */}
        <Bar className="mb-3 mt-7 h-4 w-36" />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Field labelWidth="w-20" />
          <Field labelWidth="w-16" />
        </div>

        <Bar className="mt-8 h-11 w-full rounded-xl sm:ml-auto sm:w-40" />
      </div>
    </div>
  );
}
