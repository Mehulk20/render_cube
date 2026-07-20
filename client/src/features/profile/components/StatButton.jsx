import { motion } from 'framer-motion';

const item = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } },
};

export default function StatButton({ value, label, onClick }) {
  return (
    <motion.button
      variants={item}
      whileHover={{ y: -1 }}
      whileTap={{ scale: 0.96 }}
      onClick={onClick}
      className="group flex flex-col items-center px-1"
    >
      <span className="text-2xl font-bold text-ink sm:text-3xl">{value}</span>
      <span className="text-sm text-ink-faint transition-colors group-hover:text-violet">
        {label}
      </span>
    </motion.button>
  );
}
