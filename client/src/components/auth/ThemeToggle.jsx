import { motion } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

export default function ThemeToggle({ className = '' }) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isDark}
      aria-label="Toggle day and night mode"
      onClick={toggleTheme}
      className={`relative inline-flex h-9 w-16 items-center rounded-full border border-ink-200 bg-white/70 px-1 shadow-sm transition-colors duration-300 dark:border-ink-700 dark:bg-ink-800/70 ${className}`}
    >
      <Sun className="absolute left-1.5 h-4 w-4 text-amber-500" strokeWidth={2.2} />
      <Moon className="absolute right-1.5 h-4 w-4 text-brand-300" strokeWidth={2.2} />
      <motion.span
        layout
        transition={{ type: 'spring', stiffness: 500, damping: 32 }}
        className="z-10 flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-glow"
        style={{ marginLeft: isDark ? '28px' : '0px' }}
      >
        {isDark ? <Moon className="h-3.5 w-3.5" /> : <Sun className="h-3.5 w-3.5" />}
      </motion.span>
    </button>
  );
}
