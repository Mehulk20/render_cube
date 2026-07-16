import { motion } from 'framer-motion'
import { Box, Globe, Image as ImageIcon } from 'lucide-react'

export default function AssetStack() {
  return (
    <div className="relative mx-auto h-[220px] w-full max-w-[420px] select-none">
      {/* platform disc */}
      <div className="absolute bottom-0 left-1/2 h-8 w-[92%] -translate-x-1/2 rounded-[50%] bg-white/70 shadow-[0_20px_50px_-10px_rgba(115,69,236,0.35)] dark:bg-ink-800/70" />
      <div className="absolute bottom-2 left-1/2 h-4 w-[70%] -translate-x-1/2 rounded-[50%] bg-brand-300/30 blur-xl dark:bg-brand-500/30" />

      {/* Ae tile */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-10 left-2 flex h-20 w-20 rotate-[-8deg] items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 font-display text-2xl font-bold text-white shadow-lg"
      >
        Ae
      </motion.div>

      {/* cube */}
      <motion.div
        animate={{ y: [0, -12, 0], rotate: [0, 4, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
        className="absolute bottom-16 left-1/2 flex h-24 w-24 -translate-x-1/2 items-center justify-center rounded-3xl bg-gradient-to-br from-brand-300 to-brand-500 shadow-xl"
      >
        <Box className="h-11 w-11 text-white/90" strokeWidth={1.5} />
      </motion.div>

      {/* image tile */}
      <motion.div
        animate={{ y: [0, -9, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }}
        className="absolute bottom-10 right-16 flex h-16 w-16 rotate-[6deg] items-center justify-center rounded-2xl bg-white shadow-lg dark:bg-ink-700"
      >
        <ImageIcon className="h-7 w-7 text-brand-500 dark:text-brand-300" strokeWidth={1.6} />
      </motion.div>

      {/* globe */}
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
        className="absolute bottom-6 right-1 flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-lg dark:bg-ink-700"
      >
        <Globe className="h-7 w-7 animate-spin-slow text-blue-400" strokeWidth={1.4} />
      </motion.div>

      {/* ribbon accent */}
      <motion.div
        animate={{ rotate: [0, 3, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-20 right-6 h-16 w-10 rotate-12 rounded-md bg-gradient-to-b from-brand-400 to-brand-700 opacity-90 shadow-lg"
        style={{ clipPath: 'polygon(0 0, 100% 0, 100% 75%, 50% 100%, 0 75%)' }}
      />
    </div>
  )
}
