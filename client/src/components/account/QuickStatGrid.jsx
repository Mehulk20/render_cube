import { Stat } from '../ui';
import { ShoppingBag, Download, Heart, Users } from 'lucide-react';

export default function QuickStatGrid({ stats }) {
  const items = [
    { icon: ShoppingBag, label: 'Purchases', value: stats.purchases, tone: 'violet' },
    { icon: Download, label: 'Downloads', value: stats.downloads, tone: 'cyan' },
    { icon: Heart, label: 'In Wishlist', value: stats.wishlist, tone: 'rose' },
    { icon: Users, label: 'Following', value: stats.following, tone: 'mint' },
  ];
  return (
    <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
      {items.map((it) => (
        <Stat key={it.label} {...it} />
      ))}
    </div>
  );
}
