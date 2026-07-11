import { Link } from 'react-router-dom';
import { Compass, Layers, Music2, Star, Users, Sparkles } from 'lucide-react';
import { Card } from '../../components/ui';
import { SectionHeader } from '../../components/common';
import { AssetGrid } from '../../components/asset';
import {
  QuickStatGrid,
  RecentPurchasesGrid,
  RecentDownloadsList,
  QuickActionsCard,
} from '../../components/account';
import { useAuth } from '../../context/AuthContext';
import { useWishlist } from '../../context/WishlistContext';
import {
  userStats,
  recentDownloads,
  recentPurchases,
  assets,
  followingUpdates,
} from '../../data/mock';

const quickActions = [
  { label: 'Browse All Assets', icon: Compass, to: '/explore' },
  { label: 'Explore Templates', icon: Layers, to: '/explore' },
  { label: 'Sound Effects', icon: Music2, to: '/explore' },
  { label: 'Free Assets', icon: Star, to: '/explore' },
  { label: 'Top Authors', icon: Users, to: '/explore' },
];

export default function UserDashboard() {
  const { user, isCreator } = useAuth();
  const { count } = useWishlist();
  const stats = { ...userStats, wishlist: count };

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-1">
        <h1 className="font-display text-2xl font-semibold text-ink">
          Welcome back, {user.name.split(' ')[0]} 👋
        </h1>
        <p className="text-sm text-ink-faint">
          Discover, download and create amazing motion graphics.
        </p>
      </div>

      <QuickStatGrid stats={stats} />

      <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
        <div className="space-y-6">
          <div>
            <SectionHeader title="Recent Purchases" viewAllTo="/explore" />
            <RecentPurchasesGrid items={recentPurchases} />
          </div>
          <div>
            <SectionHeader title="Recently viewed" viewAllTo="/explore" />
            <AssetGrid assets={assets.slice(4, 9)} />
          </div>
          <div>
            <SectionHeader title="Recommended for you" viewAllTo="/explore" />
            <AssetGrid assets={assets.slice(0, 5)} />
          </div>
        </div>

        <div className="space-y-6">
          <QuickActionsCard actions={quickActions} />

          <div>
            <h3 className="mb-3 font-display text-sm font-semibold text-ink">Recent Downloads</h3>
            <RecentDownloadsList items={recentDownloads} />
          </div>

          {!isCreator && (
            <Card className="border-violet/25 bg-gradient-to-br from-violet/10 to-fuchsia/10 p-5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-violet/20 text-violet">
                <Sparkles size={17} />
              </span>
              <p className="mt-3 font-display text-sm font-semibold text-ink">Become a Creator</p>
              <p className="mt-1 text-xs text-ink-faint">
                Share your creativity with the world and earn from your work.
              </p>
              <Link
                to="/creator/become"
                className="mt-3 inline-flex h-9 items-center rounded-xl bg-gradient-to-r from-violet to-fuchsia px-4 text-sm font-medium text-white shadow-glow"
              >
                Get Started Now
              </Link>
            </Card>
          )}

          <Card className="p-5">
            <h3 className="mb-3 font-display text-sm font-semibold text-ink">Following Updates</h3>
            <ul className="space-y-3">
              {followingUpdates.map((f) => (
                <li key={f.id} className="flex items-center gap-3">
                  <img src={f.avatar} className="h-9 w-9 shrink-0 rounded-full" alt="" />
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm text-ink">
                      <span className="font-medium">{f.name}</span> {f.action}
                    </p>
                    <p className="text-xs text-ink-faint">{f.time}</p>
                  </div>
                  <span className={`h-8 w-8 shrink-0 rounded-lg bg-gradient-to-br ${f.cover}`} />
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </div>
    </div>
  );
}
