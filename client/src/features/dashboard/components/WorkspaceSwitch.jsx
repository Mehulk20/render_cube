import { ArrowUpRight, ChevronRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const cardTransition = {
  type: 'spring',
  stiffness: 260,
  damping: 22,
};

export default function WorkspaceSwitch({ role, onClose }) {
  const location = useLocation();

  const isCreatorDashboard = location.pathname.startsWith('/creator');

  if (role !== 'creator') return null;

  if (isCreatorDashboard) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25 }}
      >
        <Link
          to="/account"
          onClick={onClose}
          className="group mx-4 my-3 flex items-center justify-between overflow-hidden rounded-2xl border border-border bg-surface p-4 shadow-sm transition-colors hover:border-primary/30"
        >
          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-foreground-faint">
              Current Workspace
            </p>

            <h3 className="mt-1 text-lg font-semibold text-foreground">Creator Studio</h3>

            <p className="mt-1 text-sm text-foreground-muted">
              Switch back to your account dashboard
            </p>
          </div>

          <motion.div
            whileHover={{ x: 4 }}
            transition={cardTransition}
            className="rounded-xl bg-primary p-3 text-primary-foreground"
          >
            <ChevronRight size={20} />
          </motion.div>
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
    >
      <motion.div
        whileHover={{
          y: -4,
          scale: 1.02,
        }}
        whileTap={{
          scale: 0.98,
        }}
        transition={cardTransition}
      >
        <Link
          to="/creator"
          onClick={onClose}
          className="
            group
            relative
            mx-3
            my-3
            block
            overflow-hidden
            rounded-2xl
            bg-gradient-to-br
            from-violet-600
            via-fuchsia-600
            to-indigo-600
            p-5
            text-white
            shadow-lg
            shadow-violet-500/20
          "
        >
          {/* Glow */}
          <motion.div
            animate={{
              opacity: [0.15, 0.3, 0.15],
              scale: [1, 1.15, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-white/20 blur-3xl"
          />

          <div className="relative flex items-center justify-between">
            <div>
              <span className="inline-flex rounded-full bg-white/20 px-2 py-1 text-xs font-semibold">
                Creator
              </span>

              <h3 className="mt-3 text-xl font-bold">Creator Studio</h3>

              <p className="mt-2 max-w-[200px] text-sm text-white/90">
                Upload assets, manage your store and track earnings.
              </p>
            </div>

            <motion.div
              whileHover={{
                rotate: -8,
                x: 4,
                y: -4,
              }}
              transition={cardTransition}
            >
              <ArrowUpRight size={30} />
            </motion.div>
          </div>

          {/* Bottom shine */}
          <motion.div
            initial={{ x: '-120%' }}
            whileHover={{ x: '120%' }}
            transition={{ duration: 0.9 }}
            className="
              pointer-events-none
              absolute
              inset-y-0
              w-24
              -skew-x-12
              bg-white/20
            "
          />
        </Link>
      </motion.div>
    </motion.div>
  );
}
