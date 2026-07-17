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
  );
}
