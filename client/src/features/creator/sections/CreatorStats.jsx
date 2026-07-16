import { motion } from 'framer-motion';
import { Download, Eye, Layers, Star, Users } from 'lucide-react';

import { Stat } from '../../../shared/ui';
import { useAuth } from '../../../context/AuthContext';

export default function CreatorStats() {
  const { user } = useAuth();

  const stats = [
    {
      icon: Download,
      label: 'Total Downloads',
      value: '12,580',
      delta: 18.6,
      tone: 'violet',
    },
    {
      icon: Layers,
      label: 'Total Assets',
      value: user.assetsCount,
      delta: 12.5,
      tone: 'cyan',
    },
    {
      icon: Star,
      label: 'Total Favorites',
      value: '3,240',
      delta: 15.8,
      tone: 'amber',
    },
    {
      icon: Eye,
      label: 'Profile Views',
      value: '8,730',
      delta: 21.3,
      tone: 'mint',
    },
    {
      icon: Users,
      label: 'Followers',
      value: '1,240',
      delta: 16.4,
      tone: 'rose',
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.35,
        delay: 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-5"
    >
      {stats.map((stat) => (
        <Stat key={stat.label} {...stat} />
      ))}
    </motion.section>
  );
}
