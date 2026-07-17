import { motion } from 'framer-motion';
import { accountLinks, creatorLinks } from '../../../../lib/navLinks';

import SidebarHeader from './SidebarHeader';
import SidebarNav from './SidebarNav';
import SidebarFooter from './SidebarFooter';

import { sidebarVariants } from '../../animations';

export default function DashboardSidebar({ mode = 'account' }) {
  const links = mode === 'creator' ? creatorLinks : accountLinks;

  return (
    <motion.aside
      variants={sidebarVariants}
      initial="hidden"
      animate="visible"
      className="sticky top-16 hidden h-[calc(100vh-4rem)] w-64 shrink-0 flex-col border-r border-border-soft bg-void lg:flex"
    >
      {mode === 'creator' && <SidebarHeader />}

      <SidebarNav links={links} />

      {/* SidebarFooter will go here */}
      <SidebarFooter />
    </motion.aside>
  );
}
