import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart(state, action) {
      const item = action.payload;
      const exists = state.items.find((i) => i.id === item.id);
      if (!exists) state.items.push(item);
    },

    removeItemFromCart(state, action) {
      const id = action.payload;

      state.items = state.items.filter((item) => item.id !== id);
    },

    clearCart(state) {
      state.items = [];
    },
  },
});

export const { addItemToCart, removeItemFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
