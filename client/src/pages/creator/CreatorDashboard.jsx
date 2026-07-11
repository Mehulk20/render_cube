import { Eye, Download, Layers, Star, Users } from 'lucide-react';
import { Stat, Button } from '../../components/ui';
import {
  DownloadsChart,
  TopPerformingList,
  AssetTable,
  RecentReviews,
  CreatorQuickActions,
  StoreProgressCard,
  TipsToGrow,
} from '../../components/creator';
import { useAuth } from '../../context/AuthContext';
import {
  downloadsSeries,
  topPerforming,
  myAssets,
  recentReviews,
  tipsToGrow,
} from '../../data/mock';

export default function CreatorDashboard() {
  const { user } = useAuth();

  const stats = [
    { icon: Download, label: 'Total Downloads', value: '12,580', delta: 18.6, tone: 'violet' },
    { icon: Layers, label: 'Total Assets', value: user.assetsCount, delta: 12.5, tone: 'cyan' },
    { icon: Star, label: 'Total Favorites', value: '3,240', delta: 15.8, tone: 'amber' },
    { icon: Eye, label: 'Profile Views', value: '8,730', delta: 21.3, tone: 'mint' },
    { icon: Users, label: 'Followers', value: '1,240', delta: 16.4, tone: 'rose' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="font-display text-2xl font-semibold text-ink">
            Welcome back, {user.name.split(' ')[0]} 👋
          </h1>
          <p className="text-sm text-ink-faint">
            Here's what's happening with your creator store today.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <div className="text-right text-sm">
            <p className="text-ink-faint">Your Store</p>
            <a href="#" className="font-medium text-violet hover:text-fuchsia">
              {user.username}.motionenvato.com
            </a>
          </div>
          <Button variant="secondary" className="gap-2">
            <Eye size={15} /> Store Preview
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-5">
        {stats.map((s) => (
          <Stat key={s.label} {...s} />
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
        <div className="space-y-6">
          <DownloadsChart data={downloadsSeries} />
          <AssetTable items={myAssets} />
        </div>
        <div className="space-y-6">
          <TopPerformingList items={topPerforming} />
          <RecentReviews reviews={recentReviews} />
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <CreatorQuickActions />
        <StoreProgressCard />
        <TipsToGrow tips={tipsToGrow} />
      </div>
    </div>
  );
}
