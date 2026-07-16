import { THEME } from './themeSlice';

export const selectTheme = (state) => state.theme.mode;

export const selectIsDarkMode = (state) => state.theme.mode === THEME.DARK;
