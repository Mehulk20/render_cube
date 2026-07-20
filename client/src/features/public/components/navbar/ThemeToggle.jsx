import clsx from 'clsx';
import { Moon, Sun } from 'lucide-react';

import { toggleTheme } from '../../../theme';
import { useAppDispatch, useAppSelector } from '../../../../store';

export default function ThemeToggle({ className }) {
  const dispatch = useAppDispatch();
  const mode = useAppSelector((state) => state.theme.mode);

  const isDark = mode === 'dark';

  return (
    <button
      type="button"
      onClick={() => dispatch(toggleTheme())}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className={clsx(
        'relative inline-flex h-10 w-16 items-center rounded-full border border-border bg-surface p-1',
        'shadow-card transition-interactive hover:border-primary/40 hover:shadow-card-hover',
        'focus-ring active:scale-95',
        className
      )}
    >
      <span
        className={clsx(
          'flex h-8 w-8 items-center justify-center rounded-full bg-brand-500 text-white shadow-glow',
          'transition-transform duration-300',
          isDark ? 'translate-x-6' : 'translate-x-0'
        )}
      >
        {isDark ? (
          <Moon size={15} strokeWidth={2.2} />
        ) : (
          <Sun size={15} strokeWidth={2.2} className="text-yellow-50" />
        )}
      </span>
    </button>
  );
}
