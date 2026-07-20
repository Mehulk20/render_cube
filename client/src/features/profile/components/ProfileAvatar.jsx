import { motion } from 'framer-motion';
import { Camera } from 'lucide-react';
import clsx from 'clsx';

export default function ProfileAvatar({
  src,
  alt,
  size = 'xl',
  editable = false,
  online = false,
  onEdit,
}) {
  const sizes = {
    sm: 'h-12 w-12',
    md: 'h-16 w-16',
    lg: 'h-24 w-24',
    xl: 'h-28 w-28 sm:h-32 sm:w-32',
    '2xl': 'h-40 w-40',
  };

  return (
    <motion.div
      className="group relative inline-block shrink-0"
      initial={{ scale: 0.4, opacity: 0, rotate: -8 }}
      animate={{ scale: 1, opacity: 1, rotate: 0 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 0.25 }}
    >
      <img
        src={src || '/images/default-avatar.png'}
        alt={alt}
        className={clsx(sizes[size], 'rounded-full object-cover ring-4 ring-white shadow-lg')}
      />

      {online && (
        <span className="absolute bottom-2 right-2 flex h-4 w-4">
          <motion.span
            className="absolute inline-flex h-full w-full rounded-full bg-emerald-400"
            animate={{ scale: [1, 1.8], opacity: [0.6, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeOut' }}
          />
          <span className="relative inline-flex h-4 w-4 rounded-full bg-emerald-500 ring-2 ring-white" />
        </span>
      )}

      {editable && (
        <motion.button
          onClick={onEdit}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.92 }}
          className="
            absolute bottom-1 right-1
            flex h-9 w-9 items-center justify-center
            rounded-full bg-primary text-white shadow-lg
            opacity-0 transition-opacity duration-200
            group-hover:opacity-100
          "
        >
          <Camera size={15} />
        </motion.button>
      )}
    </motion.div>
  );
}
