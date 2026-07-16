import CreatorHero from '../sections/CreatorHero';
import CreatorStats from '../sections/CreatorStats';
import CreatorAnalyticsSection from '../sections/CreatorAnalyticsSection';
import CreatorPerformanceSection from '../sections/CreatorPerformanceSection';
import CreatorGrowthSection from '../sections/CreatorGrowthSection';

export default function CreatorDashboard() {
  return (
    <div className="space-y-6">
      <CreatorHero />

      <CreatorStats />

      <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
        <CreatorAnalyticsSection />

        <CreatorPerformanceSection />
      </div>

      <CreatorGrowthSection />
    </div>
  );
}
