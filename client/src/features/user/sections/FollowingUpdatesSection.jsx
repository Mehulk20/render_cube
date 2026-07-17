import { motion } from 'framer-motion';

import { Card } from '../../../shared/ui';
import { followingUpdates } from '../../../context/data/mock';

export default function FollowingUpdatesSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.35,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <Card className="p-5">
        <h3 className="mb-3 font-display text-sm font-semibold text-ink">Following Updates</h3>

        <ul className="space-y-3">
          {followingUpdates.map((item) => (
            <motion.li key={item.id} whileHover={{ x: 4 }} className="flex items-center gap-3">
              <img src={item.avatar} alt={item.name} className="h-9 w-9 shrink-0 rounded-full" />

              <div className="min-w-0 flex-1">
                <p className="truncate text-sm text-ink">
                  <span className="font-medium">{item.name}</span> {item.action}
                </p>

                <p className="text-xs text-ink-faint">{item.time}</p>
              </div>

              <span className={`h-8 w-8 shrink-0 rounded-lg bg-gradient-to-br ${item.cover}`} />
            </motion.li>
          ))}
        </ul>
      </Card>
    </motion.section>
  );
}
