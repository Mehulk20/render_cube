import { useState } from 'react';
import { motion } from 'framer-motion';

import { cx } from '../../../utils/cn';

const TABS = ['Overview', 'About', 'Social Links', 'Creator Info'];

const Tabs = () => {
  const [active, setActive] = useState('Overview');

  return (
    <div className="mb-6 flex gap-6 border-b border-slate-200">
      {TABS.map((tab) => {
        const isActive = active === tab;

        return (
          <button
            key={tab}
            type="button"
            onClick={() => setActive(tab)}
            className={cx(
              'relative pb-3 text-sm font-medium transition-colors',
              isActive ? 'text-violet-600' : 'text-slate-400 hover:text-slate-600'
            )}
          >
            {tab}

            {isActive && (
              <motion.div
                layoutId="tab-underline"
                className="absolute -bottom-px left-0 right-0 h-0.5 rounded-full bg-violet-600"
              />
            )}
          </button>
        );
      })}
    </div>
  );
};

export default Tabs;
