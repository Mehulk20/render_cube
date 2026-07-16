import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Sparkles } from 'lucide-react';

import { Card } from '../../../shared/ui';

export default function CreatorCTA() {
  return (
    <motion.div
      animate={{
        y: [0, -3, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      <Card className="border-violet/25 bg-gradient-to-br from-violet/10 to-fuchsia/10 p-5">
        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-violet/20 text-violet">
          <Sparkles size={17} />
        </span>

        <p className="mt-3 font-display text-sm font-semibold text-ink">Become a Creator</p>

        <p className="mt-1 text-xs text-ink-faint">
          Share your creativity with the world and earn from your work.
        </p>

        <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
          <Link
            to="/creator/become"
            className="mt-3 inline-flex h-9 items-center rounded-xl bg-gradient-to-r from-violet to-fuchsia px-4 text-sm font-medium text-white shadow-glow"
          >
            Get Started Now
          </Link>
        </motion.div>
      </Card>
    </motion.div>
  );
}
