import { Outlet, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

const variants = {
  initial: {
    opacity: 0,
    y: 16,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
  exit: {
    opacity: 0,
    y: -12,
  },
};

const transition = {
  duration: 0.3,
  ease: [0.22, 1, 0.36, 1],
};

export default function AnimatedOutlet() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        className="w-full will-change-transform "
        variants={variants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={transition}
        layout
      >
        <Outlet />
      </motion.div>
    </AnimatePresence>
  );
}
