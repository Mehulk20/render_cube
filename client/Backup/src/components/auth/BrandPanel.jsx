import { motion } from 'framer-motion'
import { Box, ShieldCheck, Zap, Globe2 } from 'lucide-react'
import Logo from './Logo'
import FeatureItem from './FeatureItem'
import AssetStack from './AssetStack'

const features = [
  {
    icon: Box,
    title: 'Premium Quality Assets',
    description: 'Handpicked, high quality resources',
    color: 'violet',
  },
  {
    icon: ShieldCheck,
    title: 'Secure & Reliable',
    description: 'Safe downloads and secure payments',
    color: 'blue',
  },
  {
    icon: Zap,
    title: 'For Creators, By Creators',
    description: 'Built to empower the creative community',
    color: 'pink',
  },
  {
    icon: Globe2,
    title: 'Global Marketplace',
    description: 'Reach creators and buyers worldwide',
    color: 'green',
  },
]

export default function BrandPanel() {
  return (
    <div className="relative hidden w-full max-w-xl flex-col justify-center overflow-hidden px-6 lg:flex lg:px-14 xl:px-20">
      {/* ambient dotted texture */}
      <div
        className="pointer-events-none absolute -right-10 top-10 h-72 w-72 opacity-40 dark:opacity-20"
        style={{
          backgroundImage: 'radial-gradient(currentColor 1.4px, transparent 1.4px)',
          backgroundSize: '18px 18px',
          color: 'rgb(115 69 236 / 0.35)',
        }}
      />

      <div className="mb-10">
        <Logo />
      </div>

      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="font-display text-5xl font-extrabold leading-[1.08] tracking-tight text-ink-900 dark:text-white xl:text-6xl"
      >
        Create.
        <br />
        Share.
        <br />
        <span className="bg-gradient-to-r from-brand-500 to-brand-700 bg-clip-text text-transparent dark:from-brand-300 dark:to-brand-500">
          Inspire.
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
        className="mt-5 max-w-md text-[15px] leading-relaxed text-ink-500 dark:text-ink-400"
      >
        The ultimate marketplace for 3D models, vectors, templates and creative assets for designers, developers
        and creators.
      </motion.p>

      <div className="mt-10 flex flex-col gap-6">
        {features.map((f, i) => (
          <FeatureItem key={f.title} {...f} index={i} />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.5, ease: 'easeOut' }}
        className="mt-10"
      >
        <AssetStack />
      </motion.div>
    </div>
  )
}
