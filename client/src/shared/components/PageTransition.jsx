import { motion } from 'framer-motion';

// Framer Motion needs JS numbers, so it can't read var(--duration-*) directly —
// these values are kept in sync with --duration-slow (400ms) and --ease-emphasized
// (cubic-bezier(.16,1,.3,1)) from theme.css by hand.
const variants = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -6 },
};

export default function PageTransition({ children, className }) {
  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
