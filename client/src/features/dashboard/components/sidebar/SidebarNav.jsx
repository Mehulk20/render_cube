import { motion } from 'framer-motion';

import SidebarNavItem from './SidebarNavItem';
import { sidebarVariants } from '../../animations';

export default function SidebarNav({ links }) {
  return (
    <motion.nav
      variants={sidebarVariants}
      className="min-h-0 flex-1 space-y-1 overflow-y-auto px-3 py-4 scrollbar-hide"
    >
      {links.map((link) => (
        <SidebarNavItem key={link.label} link={link} />
      ))}
    </motion.nav>
  );
}
