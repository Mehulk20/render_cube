import clsx from 'clsx';
import { motion } from 'framer-motion';

export default function ProfileTabs({ tabs, activeTab, onChange }) {
  return (
    <div className="flex gap-1 overflow-x-auto border-b border-border-soft">
      {tabs.map((tab) => (
        <motion.button
          key={tab.id}
          onClick={() => onChange(tab.id)}
          className={clsx(
            'relative shrink-0 px-4 py-2.5 text-sm font-medium transition-colors',
            activeTab === tab.id ? 'text-violet' : 'text-ink-faint hover:text-ink'
          )}
        >
          {tab.label}

          {activeTab === tab.id && (
            <motion.div
              layoutId="profile-tab"
              className="absolute inset-x-0 bottom-0 h-0.5 rounded-full bg-violet"
            />
          )}
        </motion.button>
      ))}
    </div>
  );
}
