import RecentPurchasesSection from './RecentPurchasesSection';
import RecentlyViewedSection from './RecentlyViewedSection';
import RecommendedSection from './RecommendedSection';

export default function DashboardContent() {
  return (
    <div className="space-y-6">
      <RecentPurchasesSection />

      <RecentlyViewedSection />

      <RecommendedSection />
    </div>
  );
}
