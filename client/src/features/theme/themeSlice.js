import { createSlice } from '@reduxjs/toolkit';

export const THEME = {
  LIGHT: 'light',
  DARK: 'dark',
};

const getInitialTheme = () => {
  if (typeof window === 'undefined') {
    return THEME.LIGHT;
  }

  const stored = localStorage.getItem('rc-theme');

  if (stored === THEME.DARK || stored === THEME.LIGHT) {
    return stored;
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? THEME.DARK : THEME.LIGHT;
};

const initialState = {
  mode: getInitialTheme(),
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,

  reducers: {
    toggleTheme(state) {
      state.mode = state.mode === THEME.DARK ? THEME.LIGHT : THEME.DARK;
    },

    setTheme(state, action) {
      if (action.payload === THEME.DARK || action.payload === THEME.LIGHT) {
        state.mode = action.payload;
      }
    },
  },
});

export const { toggleTheme, setTheme } = themeSlice.actions;

export default themeSlice.reducer;
