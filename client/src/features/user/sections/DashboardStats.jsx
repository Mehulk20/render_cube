import { motion } from 'framer-motion';

import { useWishlist } from '../../../context/WishlistContext';
import { userStats } from '../../../context/data/mock';

import { QuickStatGrid } from '../components';

export default function DashboardStats() {
  const { count } = useWishlist();

  const stats = {
    ...userStats,
    wishlist: count,
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.35,
        delay: 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <QuickStatGrid stats={stats} />
    </motion.section>
  );
}
