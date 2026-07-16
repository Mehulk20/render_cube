// features/auth/authSelectors.js

export const selectAuthState = (state) => state.auth;

export const selectAccessToken = (state) => selectAuthState(state).accessToken;

export const selectIsAuthenticated = (state) => selectAuthState(state).isAuthenticated;

export const selectAuthChecked = (state) => selectAuthState(state).authChecked;
