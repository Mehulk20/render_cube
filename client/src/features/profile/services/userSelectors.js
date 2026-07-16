// features/user/userSelectors.js

export const selectUserState = (state) => state.user;

export const selectActiveProfileTab = (state) => selectUserState(state).activeProfileTab;

export const selectIsEditingProfile = (state) => selectUserState(state).isEditingProfile;

export const selectIsProfileSidebarOpen = (state) => selectUserState(state).isProfileSidebarOpen;

export const selectProfileView = (state) => selectUserState(state).profileView;

export const selectSelectedCategory = (state) => selectUserState(state).selectedCategory;
