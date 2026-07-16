import { motion } from 'framer-motion'
import { Mail, MailCheck } from 'lucide-react'

const dots = Array.from({ length: 10 })

export default function EmailSentAnimation({ email }) {
  return (
    <div className="flex flex-col items-center py-2 text-center">
      <div className="relative mb-6 flex h-32 w-32 items-center justify-center">
        {/* pulsing rings */}
        {[0, 1, 2].map((i) => (
          <motion.span
            key={i}
            initial={{ scale: 0.6, opacity: 0.5 }}
            animate={{ scale: 1.8, opacity: 0 }}
            transition={{ duration: 1.8, repeat: Infinity, delay: i * 0.5, ease: 'easeOut' }}
            className="absolute h-20 w-20 rounded-full bg-brand-400/40 dark:bg-brand-500/30"
          />
        ))}

        {/* confetti dots */}
        {dots.map((_, i) => {
          const angle = (i / dots.length) * Math.PI * 2
          const distance = 58
          const palette = ['bg-brand-400', 'bg-pink-400', 'bg-emerald-400', 'bg-amber-400', 'bg-blue-400']
          return (
            <motion.span
              key={i}
              initial={{ x: 0, y: 0, opacity: 0, scale: 0 }}
              animate={{
                x: Math.cos(angle) * distance,
                y: Math.sin(angle) * distance,
                opacity: [0, 1, 0],
                scale: [0, 1, 0.6],
              }}
              transition={{ duration: 1.1, delay: 0.25 + i * 0.03, ease: 'easeOut' }}
              className={`absolute h-1.5 w-1.5 rounded-full ${palette[i % palette.length]}`}
            />
          )
        })}

        {/* envelope */}
        <motion.div
          initial={{ scale: 0, rotate: -12, opacity: 0 }}
          animate={{ scale: 1, rotate: 0, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 260, damping: 16, delay: 0.05 }}
          className="relative flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 shadow-glow"
        >
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ duration: 0.3, delay: 0.6 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <Mail className="h-9 w-9 text-white" strokeWidth={1.7} />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: 'spring', stiffness: 300, damping: 14, delay: 0.65 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <MailCheck className="h-9 w-9 text-white" strokeWidth={1.7} />
          </motion.div>
        </motion.div>

        {/* check badge */}
        <motion.span
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 350, damping: 12, delay: 0.85 }}
          className="absolute -bottom-1 -right-1 flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500 shadow-lg ring-4 ring-white dark:ring-ink-900"
        >
          <svg viewBox="0 0 16 16" fill="none" className="h-4 w-4 text-white">
            <path d="M3 8.5L6.2 11.5L13 4.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.span>
      </div>

      <motion.h3
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.4 }}
        className="font-display text-xl font-bold text-ink-900 dark:text-white"
      >
        Check your inbox
      </motion.h3>
      <motion.p
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.4 }}
        className="mt-2 max-w-xs text-sm leading-relaxed text-ink-500 dark:text-ink-400"
      >
        We've sent a password reset link to{' '}
        <span className="font-semibold text-ink-800 dark:text-ink-100">{email || 'your email'}</span>. The link
        expires in 15 minutes.
      </motion.p>
    </div>
  )
}
