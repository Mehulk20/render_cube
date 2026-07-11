import { Moon, Sun } from 'lucide-react';
import { useAppDispatch, useAppSelector } from '../../store';
import { toggleTheme } from '../../features/theme/themeSlice';

export default function ThemeToggle({ className = '' }) {
  const dispatch = useAppDispatch();
  const mode = useAppSelector((state) => state.theme.mode);

  const isDark = mode === 'dark';

  return (
    <button
      type="button"
      onClick={() => dispatch(toggleTheme())}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className={`relative inline-flex h-9 w-16 items-center rounded-full border border-border-c bg-surface-2 px-1 transition-colors duration-300 hover:border-violet-500/50 ${className}`}
    >
      <span
        className={`flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-violet-600 text-white shadow-glow transition-transform duration-300 ${
          isDark ? 'translate-x-7' : 'translate-x-0'
        }`}
      >
        {isDark ? <Moon size={14} strokeWidth={2.5} /> : <Sun size={14} strokeWidth={2.5} />}
      </span>
    </button>
  );
}
