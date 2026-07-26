import { createSlice } from '@reduxjs/toolkit';

import { PROFILE_TABS, PROFILE_VIEW } from '../constants';

const initialState = {
  activeProfileTab: PROFILE_TABS[0].id,
  isEditingProfile: false,
  isProfileSidebarOpen: false,
  profileView: PROFILE_VIEW.GRID,
  selectedCategory: 'all',
};

const userSlice = createSlice({
  name: 'user',
  initialState,

  reducers: {
    setActiveProfileTab: (state, action) => {
      state.activeProfileTab = action.payload;
    },

    setEditingProfile: (state, action) => {
      state.isEditingProfile = action.payload;
    },

    toggleProfileSidebar: (state) => {
      state.isProfileSidebarOpen = !state.isProfileSidebarOpen;
    },

    closeProfileSidebar: (state) => {
      state.isProfileSidebarOpen = false;
    },

    setProfileView: (state, action) => {
      state.profileView = action.payload;
    },

    setSelectedCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },

    resetUserState: () => initialState,
  },
});

export const {
  setActiveProfileTab,
  setEditingProfile,
  toggleProfileSidebar,
  closeProfileSidebar,
  setProfileView,
  setSelectedCategory,
  resetUserState,
} = userSlice.actions;

export default userSlice.reducer;
