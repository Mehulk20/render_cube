import PayoutCard from './PayoutCard';
import RevenueCard from './RevenueCard';
import RevenueChart from './RevenueChart';
import TopAssetList from './TopAssetList';

export default function CreatorDashboard() {
  return (
    <div
      className="
        flex
        items-center
        p-6
        lg:p-8
      "
    >
      <div
        className="
          w-full
          overflow-hidden
          rounded-2xl
          border
          border-border
          bg-card
          shadow-card
          hover-lift
          transition-surface
        "
      >
        {/* Header */}

        <div
          className="
            flex
            items-center
            justify-between
            border-b
            border-border
            px-6
            py-5
          "
        >
          <h3
            className="
              text-sm
              font-semibold
              text-foreground
            "
          >
            Creator Overview
          </h3>

          <span
            className="
              rounded-full
              bg-surface-hover
              px-3
              py-1
              text-xs
              font-medium
              text-foreground-soft
            "
          >
            This Month
          </span>
        </div>

        {/* Body */}

        <div className="space-y-6 p-6">
          <RevenueCard />

          <RevenueChart />

          <TopAssetList />
        </div>

        {/* Footer */}

        <div className="px-6 pb-6">
          <PayoutCard />
        </div>
      </div>
    </div>
  );
}
