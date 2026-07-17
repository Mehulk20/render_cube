import { TopPerformingList, RecentReviews } from '../components';

import { topPerforming, recentReviews } from '../../../context/data/mock';

export default function CreatorPerformanceSection() {
  return (
    <div className="space-y-6">
      <TopPerformingList items={topPerforming} />

      <RecentReviews reviews={recentReviews} />
    </div>
  );
}
