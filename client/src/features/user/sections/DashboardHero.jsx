import { motion } from 'framer-motion';
import { useAuth } from '../../../context/AuthContext';

export default function DashboardHero() {
  const { user } = useAuth();

  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.35,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="flex flex-col gap-1"
    >
      <h1 className="font-display text-2xl font-semibold text-ink">
        Welcome back, {user.name.split(' ')[0]} 👋
      </h1>

      <p className="text-sm text-ink-faint">
        Discover, download and create amazing motion graphics.
      </p>
    </motion.section>
  );
}
