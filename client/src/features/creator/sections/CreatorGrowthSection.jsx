import { CreatorQuickActions, StoreProgressCard, TipsToGrow } from '../components';

import { tipsToGrow } from '../../../context/data/mock';

export default function CreatorGrowthSection() {
  return (
    <div className="grid gap-6 lg:grid-cols-3">
      <CreatorQuickActions />

      <StoreProgressCard />

      <TipsToGrow tips={tipsToGrow} />
    </div>
  );
}
