import { motion } from 'framer-motion'

export default function SuccessCheck({ title, description }) {
  return (
    <div className="flex flex-col items-center py-2 text-center">
      <motion.div
        initial={{ scale: 0, rotate: -20 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: 'spring', stiffness: 260, damping: 15 }}
        className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 shadow-lg"
      >
        <motion.svg
          viewBox="0 0 24 24"
          fill="none"
          className="h-10 w-10 text-white"
          initial="hidden"
          animate="visible"
        >
          <motion.path
            d="M5 13l4.5 4.5L19 8"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            variants={{
              hidden: { pathLength: 0, opacity: 0 },
              visible: { pathLength: 1, opacity: 1 },
            }}
            transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
          />
        </motion.svg>
      </motion.div>
      <motion.h3
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35, duration: 0.4 }}
        className="font-display text-xl font-bold text-ink-900 dark:text-white"
      >
        {title}
      </motion.h3>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.4 }}
          className="mt-2 max-w-xs text-sm leading-relaxed text-ink-500 dark:text-ink-400"
        >
          {description}
        </motion.p>
      )}
    </div>
  )
}
