import { Stat } from '../../../shared/ui';
import { ShoppingBag, Download, Heart, Users } from 'lucide-react';

export default function QuickStatGrid({ stats }) {
  const items = [
    { icon: ShoppingBag, label: 'Purchases', value: stats.purchases, tone: 'primary' },
    { icon: Download, label: 'Downloads', value: stats.downloads, tone: 'info' },
    { icon: Heart, label: 'In Wishlist', value: stats.wishlist, tone: 'danger' },
    { icon: Users, label: 'Following', value: stats.following, tone: 'success' },
  ];
  return (
    <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
      {items.map((it) => (
        <Stat key={it.label} {...it} />
      ))}
    </div>
  );
}
