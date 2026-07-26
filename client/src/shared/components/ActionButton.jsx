import { motion } from 'framer-motion';
import { cx } from '../../utils/cn';

const ActionButton = ({ children, onClick, variant = 'solid', disabled }) => {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.95 }}
      className={cx(
        'flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors',
        variant === 'solid'
          ? 'bg-violet-600 text-white hover:bg-violet-700'
          : 'border border-slate-200 text-slate-600 hover:bg-slate-50'
      )}
    >
      {children}
    </motion.button>
  );
};

export default ActionButton;
