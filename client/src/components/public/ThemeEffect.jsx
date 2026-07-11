import { useEffect } from 'react';
import { useAppSelector } from '../../store';

const ThemeEffect = () => {
  const theme = useAppSelector((state) => state.theme.mode);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('rc-theme', theme);
  }, [theme]);

  return null;
};

export default ThemeEffect;
