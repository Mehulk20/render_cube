import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

import { itemVariants } from '../../animations';

export default function SidebarHeader() {
  return (
    <motion.div variants={itemVariants} className="px-5 pt-5">
      <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-fuchsia">
        <Sparkles size={13} />
        Creator Studio
      </span>
    </motion.div>
  );
}
