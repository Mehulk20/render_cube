import { Bar, AppShell } from '../../components/common';
import { HeroBanner, CategoryChips, FeaturedCard } from '../../components/home';

function Rail({ count }) {
  return (
    <div className="scrollbar-hide -mx-4 flex gap-5 overflow-x-auto px-4 sm:-mx-6 sm:px-6 lg:mx-0 lg:px-0">
      {Array.from({ length: count }).map((_, i) => (
        <FeaturedCard key={i} />
      ))}
    </div>
  );
}

export default function HomePageSkeleton() {
  return (
    <AppShell>
      <HeroBanner />
      <CategoryChips />

      <div className="space-y-10">
        <section>
          <div className="mb-4 flex items-center justify-between">
            <Bar className="h-4 w-36" />
            <Bar className="h-3 w-12" />
          </div>
          <Rail count={5} />
        </section>

        <section>
          <div className="mb-4 flex items-center justify-between">
            <Bar className="h-4 w-32" />
            <Bar className="h-3 w-12" />
          </div>
          <Rail count={5} />
        </section>

        <section>
          <div className="mb-4 flex items-center justify-between">
            <Bar className="h-4 w-40" />
            <Bar className="h-3 w-12" />
          </div>
          <Rail count={4} />
        </section>
      </div>
    </AppShell>
  );
}
