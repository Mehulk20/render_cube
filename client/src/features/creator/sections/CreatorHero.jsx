import { motion } from 'framer-motion';
import { Eye } from 'lucide-react';

import { Button } from '../../../shared/ui';
import { useAuth } from '../../../context/AuthContext';

export default function CreatorHero() {
  const { user } = useAuth();

  return (
    <motion.section
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.35,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
    >
      <div>
        <h1 className="font-display text-2xl font-semibold text-ink">
          Welcome back, {user.name.split(' ')[0]} 👋
        </h1>

        <p className="text-sm text-ink-faint">
          Here's what's happening with your creator store today.
        </p>
      </div>

      <div className="flex items-center gap-3">
        <div className="text-right text-sm">
          <p className="text-ink-faint">Your Store</p>

          <a href="#" className="font-medium text-violet transition-colors hover:text-fuchsia">
            {user.username}.motionenvato.com
          </a>
        </div>

        <Button variant="secondary" className="gap-2">
          <Eye size={15} />
          Store Preview
        </Button>
      </div>
    </motion.section>
  );
}
