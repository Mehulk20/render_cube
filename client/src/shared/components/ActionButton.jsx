import { motion } from 'framer-motion';
import { cx } from '../../utils/cn';

const ActionButton = ({ children, onClick, variant = 'solid', disabled }) => {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.95 }}
      className={cx(
        'flex items-center gap-sm rounded-full px-md py-sm text-sm font-medium transition-colors motion-fast',
        variant === 'solid'
          ? 'bg-brand-600 text-white hover:bg-brand-700'
          : 'border border-border text-foreground-soft hover:bg-surface-raised'
      )}
    >
      {children}
    </motion.button>
  );
};

export default ActionButton;
