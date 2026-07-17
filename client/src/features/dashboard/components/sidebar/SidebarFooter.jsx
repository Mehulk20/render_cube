import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

import SidebarCTA from './SidebarCTA';

export default function SidebarFooter({ mode = 'account' }) {
  return (
    <motion.div
      animate={{ y: [0, -3, 0] }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      className="m-3"
    >
      {mode === 'account' ? (
        <SidebarCTA
          title="Become a Creator"
          description="Share your creativity and earn from your work."
          buttonText="Get Started"
          className="rounded-2xl border border-violet/25 bg-gradient-to-br from-violet/10 to-fuchsia/10 p-4"
          buttonProps={{
            as: NavLink,
            to: '/creator/become',
            variant: 'gradient',
          }}
        />
      ) : (
        <SidebarCTA
          title="Grow Your Store"
          description="Add a banner and profile video to increase engagement by 40%."
          buttonText="Customize Store"
          className="rounded-2xl border border-amber/25 bg-gradient-to-br from-amber/10 to-transparent p-4"
          buttonProps={{
            variant: 'secondary',
          }}
        />
      )}
    </motion.div>
  );
}
