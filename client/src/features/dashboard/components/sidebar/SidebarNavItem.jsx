import clsx from 'clsx';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

import { itemVariants } from '../../animations';

export default function SidebarNavItem({ link }) {
  return (
    <motion.div variants={itemVariants} whileHover={{ x: 4 }} whileTap={{ scale: 0.98 }}>
      <NavLink to={link.to} end={link.end}>
        {({ isActive }) => (
          <div
            className={clsx(
              'group relative flex items-center justify-between overflow-hidden rounded-sm px-3 py-2.5 text-sm font-medium',
              isActive
                ? 'text-brand-500'
                : 'text-ink-soft transition-colors hover:bg-surface-floating hover:text-ink'
            )}
          >
            {isActive && (
              <motion.div
                layoutId="sidebar-active-pill"
                className="absolute inset-0 rounded-sm bg-linear-to-r from-brand-500/15 to-fuchsia/15"
                transition={{
                  type: 'spring',
                  stiffness: 350,
                  damping: 30,
                }}
              />
            )}

            <span className="relative z-10 flex items-center gap-md">
              <motion.div
                whileHover={{
                  rotate: -8,
                  scale: 1.08,
                }}
              >
                <link.icon size={20} />
              </motion.div>

              {link.label}
            </span>

            {link.count !== undefined && (
              <motion.span
                whileHover={{ scale: 1.08 }}
                className="relative z-10 rounded-full bg-surface-raised px-2 py-1 text-xs text-ink-faint"
              >
                {link.count}
              </motion.span>
            )}
          </div>
        )}
      </NavLink>
    </motion.div>
  );
}
