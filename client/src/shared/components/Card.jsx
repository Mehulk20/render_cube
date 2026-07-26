import { AnimatePresence, motion } from 'framer-motion';
import { cx } from '../../utils/cn';

const Card = ({ children, delay = 0, className = 'min-h-48', isLoading }) => {
  return (
    <motion.main className={cx('relative', className)}>
      <AnimatePresence>
        {isLoading && (
          <motion.svg
            key="cover-travel-border"
            className="pointer-events-none absolute inset-0 z-40 h-full w-full overflow-visible"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.25 } }}
            style={{ filter: 'drop-shadow(0 0 5px var(--color-brand-500, #6366f1))' }}
          >
            <defs>
              <linearGradient id="coverTravelGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="var(--color-brand-300)" />
                <stop offset="20%" stopColor="var(--color-brand-500)" />
                <stop offset="40%" stopColor="var(--color-category-graphics)" />
                <stop offset="60%" stopColor="var(--color-category-video)" />
                <stop offset="80%" stopColor="var(--color-category-photo)" />
                <stop offset="100%" stopColor="var(--color-category-code)" />
              </linearGradient>
            </defs>
            <rect
              x="1.5"
              y="1.5"
              width="calc(100% - 3px)"
              height="calc(100% - 3px)"
              rx="22"
              fill="none"
              stroke="url(#coverTravelGradient)"
              strokeWidth="3"
              strokeLinecap="round"
              pathLength="100"
              strokeDasharray="20 80"
            >
              <animate
                attributeName="stroke-dashoffset"
                values="0;-100"
                dur="2.6s"
                repeatCount="indefinite"
              />
            </rect>
          </motion.svg>
        )}
      </AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.45,
          ease: [0.16, 1, 0.3, 1],
          delay,
        }}
        className={cx(
          'rounded-card bg-card p-6 shadow-card ring-1 ring-ink-900/5 sm:p-7',
          className
        )}
      >
        {children}
      </motion.div>
    </motion.main>
  );
};

export default Card;
