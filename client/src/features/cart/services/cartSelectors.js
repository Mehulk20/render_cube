export const selectCartState = (state) => state.cart;

export const selectCartItems = (state) => selectCartState(state).items;

export const selectCartCount = (state) => selectCartItems(state).length;

export const selectCartTotal = (state) =>
  selectCartItems(state).reduce(
    (total, item) => total + (item.price || 0) * (item.quantity || 1),
    0
  );

export const selectIsInCart = (assetId) => (state) =>
  selectCartItems(state).some((item) => item.assetId === assetId);
