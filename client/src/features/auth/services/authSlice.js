import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  accessToken: localStorage.getItem('accessToken'),
  isAuthenticated: Boolean(localStorage.getItem('accessToken')),
  authChecked: false,
};

const authSlice = createSlice({
  name: 'auth',

  initialState,

  reducers: {
    setCredentials(state, action) {
      state.accessToken = action.payload.accessToken;
      state.isAuthenticated = true;
    },

    setAuthChecked(state, action) {
      state.authChecked = action.payload;
    },

    userLogout(state) {
      localStorage.removeItem('accessToken');
      state.accessToken = null;
      state.isAuthenticated = false;
      state.authChecked = true;
    },

    resetAuth() {
      return initialState;
    },
  },
});

export const { setCredentials, setAuthChecked, userLogout, resetAuth } = authSlice.actions;

export default authSlice.reducer;
