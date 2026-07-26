import { motion } from 'framer-motion';

// Maps the four marketing "accent" colors onto real theme tokens instead of
// raw Tailwind palettes — violet/blue/green line up with brand/info/success;
// pink reuses the existing category-video accent since the theme has no
// standalone pink/magenta token.
const palettes = {
  violet: 'bg-brand-500/15 text-brand-500',
  blue: 'bg-info/15 text-info',
  pink: 'bg-category-video-soft text-category-video',
  green: 'bg-success/15 text-success',
};

export default function FeatureItem({
  icon: Icon,
  title,
  description,
  color = 'violet',
  index = 0,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -14 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.15 + index * 0.08, duration: 0.5, ease: 'easeOut' }}
      className="flex items-start gap-4"
    >
      <span
        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${palettes[color]}`}
      >
        <Icon className="h-5 w-5" strokeWidth={1.9} />
      </span>
      <div>
        <p className="font-semibold text-foreground">{title}</p>
        <p className="text-sm text-foreground-soft">{description}</p>
      </div>
    </motion.div>
  );
}
