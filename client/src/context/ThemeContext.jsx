import { createContext, useContext, useEffect, useState } from 'react';

// Create the theme context
const ThemeContext = createContext();

/**
 * ThemeProvider — wraps the app and provides dark/light mode state.
 * Persists preference to localStorage and applies 'dark' class to <html>.
 */
export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(() => {
    // Check localStorage first, then system preference
    const saved = localStorage.getItem('assethub-theme');
    if (saved) return saved === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    // Apply or remove 'dark' class on the html element
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('assethub-theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('assethub-theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark((prev) => !prev);

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook for consuming theme context
export const useTheme = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used inside ThemeProvider');
  return ctx;
};
