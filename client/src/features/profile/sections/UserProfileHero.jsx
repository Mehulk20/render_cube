import { motion } from 'framer-motion';

export default function UserProfileHero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.35,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <h1 className="font-display text-2xl font-semibold text-ink">My Profile</h1>

      <p className="text-sm text-ink-faint">
        Manage your personal information and account details.
      </p>
    </motion.section>
  );
}
