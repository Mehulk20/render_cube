import { motion } from 'framer-motion'

const palettes = {
  violet: 'bg-brand-100 text-brand-600 dark:bg-brand-500/15 dark:text-brand-300',
  blue: 'bg-blue-100 text-blue-600 dark:bg-blue-500/15 dark:text-blue-300',
  pink: 'bg-pink-100 text-pink-600 dark:bg-pink-500/15 dark:text-pink-300',
  green: 'bg-emerald-100 text-emerald-600 dark:bg-emerald-500/15 dark:text-emerald-300',
}

export default function FeatureItem({ icon: Icon, title, description, color = 'violet', index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -14 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.15 + index * 0.08, duration: 0.5, ease: 'easeOut' }}
      className="flex items-start gap-4"
    >
      <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${palettes[color]}`}>
        <Icon className="h-5 w-5" strokeWidth={1.9} />
      </span>
      <div>
        <p className="font-semibold text-ink-900 dark:text-white">{title}</p>
        <p className="text-sm text-ink-500 dark:text-ink-400">{description}</p>
      </div>
    </motion.div>
  )
}
