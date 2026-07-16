import { motion } from 'framer-motion';

import { SectionHeader } from '../../../shared/components';
import { AssetGrid } from '../../assets/components';

import { assets } from '../../../data/mock';

export default function RecommendedSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.35,
        delay: 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <SectionHeader title="Recommended For You" viewAllTo="/explore" />

      <AssetGrid assets={assets.slice(0, 5)} />
    </motion.section>
  );
}
