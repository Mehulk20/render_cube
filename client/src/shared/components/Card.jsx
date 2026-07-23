import { motion } from 'framer-motion';
import { cx } from '../../utils/cn';

const Card = ({ children, delay = 0, className = '' }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.45,
        ease: [0.16, 1, 0.3, 1],
        delay,
      }}
      className={cx('rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-900/5 sm:p-7', className)}
    >
      {children}
    </motion.div>
  );
};

export default Card;
