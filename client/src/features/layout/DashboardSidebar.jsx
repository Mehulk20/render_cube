import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import { Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '../../shared/ui';
import { accountLinks, creatorLinks } from '../../lib/navLinks';

const sidebarVariants = {
  hidden: {
    opacity: 0,
    x: -24,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.35,
      ease: [0.22, 1, 0.36, 1],
      when: 'beforeChildren',
      staggerChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    x: -12,
  },
  visible: {
    opacity: 1,
    x: 0,
  },
};

export default function DashboardSidebar({ mode = 'account' }) {
  const links = mode === 'creator' ? creatorLinks : accountLinks;

  return (
    <motion.aside
      variants={sidebarVariants}
      initial="hidden"
      animate="visible"
      className="sticky top-16 hidden h-[calc(100vh-4rem)] w-64 shrink-0 flex-col border-r border-border-soft bg-void lg:flex"
    >
      {mode === 'creator' && (
        <motion.div variants={itemVariants} className="px-5 pt-5">
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-fuchsia">
            <Sparkles size={13} />
            Creator Studio
          </span>
        </motion.div>
      )}

      <motion.nav
        variants={sidebarVariants}
        className="min-h-0 flex-1 space-y-1 overflow-y-auto px-3 py-4 scrollbar-hide"
      >
        {links.map((link) => (
          <motion.div
            key={link.label}
            variants={itemVariants}
            whileHover={{ x: 4 }}
            whileTap={{ scale: 0.98 }}
          >
            <NavLink to={link.to} end={link.end}>
              {({ isActive }) => (
                <div
                  className={clsx(
                    'group relative flex items-center justify-between overflow-hidden rounded-xl px-3 py-2.5 text-sm font-medium',
                    isActive
                      ? 'text-violet'
                      : 'text-ink-soft transition-colors hover:bg-surface-raised hover:text-ink'
                  )}
                >
                  {isActive && (
                    <motion.div
                      layoutId="sidebar-active-pill"
                      className="absolute inset-0 rounded-xl bg-gradient-to-r from-violet/15 to-fuchsia/15"
                      transition={{
                        type: 'spring',
                        stiffness: 350,
                        damping: 30,
                      }}
                    />
                  )}

                  <span className="relative z-10 flex items-center gap-2.5">
                    <motion.div
                      whileHover={{
                        rotate: -8,
                        scale: 1.08,
                      }}
                    >
                      <link.icon size={17} />
                    </motion.div>

                    {link.label}
                  </span>

                  {link.count !== undefined && (
                    <motion.span
                      whileHover={{ scale: 1.08 }}
                      className="relative z-10 rounded-full bg-surface-raised px-1.5 py-0.5 text-[11px] text-ink-faint"
                    >
                      {link.count}
                    </motion.span>
                  )}
                </div>
              )}
            </NavLink>
          </motion.div>
        ))}
      </motion.nav>

      <motion.div
        animate={{
          y: [0, -3, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="m-3"
      >
        {mode === 'account' ? (
          <div className="rounded-2xl border border-violet/25 bg-gradient-to-br from-violet/10 to-fuchsia/10 p-4">
            <p className="font-display text-sm font-semibold text-ink">Become a Creator</p>

            <p className="mt-1 text-xs text-ink-faint">
              Share your creativity and earn from your work.
            </p>

            <Button
              as={NavLink}
              to="/creator/become"
              variant="gradient"
              size="sm"
              className="mt-4 w-full"
            >
              Get Started
            </Button>
          </div>
        ) : (
          <div className="rounded-2xl border border-amber/25 bg-gradient-to-br from-amber/10 to-transparent p-4">
            <p className="font-display text-sm font-semibold text-ink">Grow Your Store</p>

            <p className="mt-1 text-xs text-ink-faint">
              Add a banner and profile video to increase engagement by 40%.
            </p>

            <Button variant="secondary" size="sm" className="mt-3 w-full">
              Customize Store
            </Button>
          </div>
        )}
      </motion.div>
    </motion.aside>
  );
}
