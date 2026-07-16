import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',

  initialState,

  reducers: {
    addItemToCart(state, action) {
      const asset = action.payload;

      const exists = state.items.some((item) => item.assetId === asset.assetId);

      if (!exists) {
        state.items.push({
          assetId: asset.assetId,
          addedAt: Date.now(),
        });
      }
    },

    removeItemFromCart(state, action) {
      const index = state.items.findIndex((item) => item.assetId === action.payload);

      if (index !== -1) {
        state.items.splice(index, 1);
      }
    },

    clearCart(state) {
      state.items = [];
    },
  },
});

export const { addItemToCart, removeItemFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
