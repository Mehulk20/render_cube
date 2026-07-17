import { motion } from 'framer-motion';

import { SectionHeader } from '../../../shared/components';
import { RecentPurchasesGrid } from '../components';

import { recentPurchases } from '../../../context/data/mock';

export default function RecentPurchasesSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.35,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <SectionHeader title="Recent Purchases" viewAllTo="/explore" />

      <RecentPurchasesGrid items={recentPurchases} />
    </motion.section>
  );
}
