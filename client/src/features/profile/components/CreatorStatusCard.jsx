import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

import { Card } from '../../../shared/components';

const CREATOR_STATUS_ITEMS = ['Email Verified', 'Identity Verified', 'Active Creator'];

const CreatorStatusCard = () => {
  return (
    <Card delay={0.15} className="max-h-fit">
      <h3 className="mb-3 text-lg font-semibold text-slate-900">Creator Status</h3>

      <div className="mb-3 flex items-center gap-2 text-[15px] text-slate-700">
        <CheckCircle2 size={18} className="text-violet-600" />

        <span>You are a verified creator.</span>
      </div>

      <ul className="space-y-2.5 border-t border-slate-100 pt-3">
        {CREATOR_STATUS_ITEMS.map((label, index) => (
          <motion.li
            key={label}
            initial={{
              opacity: 0,
              x: -8,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              delay: 0.1 * index + 0.2,
            }}
            className="flex items-center gap-2.5 text-sm text-slate-600"
          >
            <CheckCircle2 size={15} className="text-emerald-500" />

            {label}
          </motion.li>
        ))}
      </ul>
    </Card>
  );
};

export default CreatorStatusCard;
