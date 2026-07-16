import { motion } from 'framer-motion';

import { SectionHeader } from '../../../shared/components';
import { AssetGrid } from '../../assets/components';

import { assets } from '../../../data/mock';

export default function RecentlyViewedSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.35,
        delay: 0.05,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <SectionHeader title="Recently Viewed" viewAllTo="/explore" />

      <AssetGrid assets={assets.slice(4, 9)} />
    </motion.section>
  );
}
