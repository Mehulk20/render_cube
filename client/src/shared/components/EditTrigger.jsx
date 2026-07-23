import { motion } from 'framer-motion';
import { Pencil } from 'lucide-react';
import { cx } from '../../utils/cn';

const EditTrigger = ({ onClick, size = 15, className = '' }) => {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.9 }}
      aria-label="Edit"
      className={cx(
        'flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-slate-400 transition-colors hover:bg-violet-50 hover:text-violet-600',
        className
      )}
    >
      <Pencil size={size} />
    </motion.button>
  );
};

export default EditTrigger;
