import { motion } from 'framer-motion';

import { RecentDownloadsList } from '../components';
import { recentDownloads } from '../../../data/mock';

export default function RecentDownloadsSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.35,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <h3 className="mb-3 font-display text-sm font-semibold text-ink">Recent Downloads</h3>

      <RecentDownloadsList items={recentDownloads} />
    </motion.section>
  );
}
