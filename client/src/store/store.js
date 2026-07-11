import { configureStore } from '@reduxjs/toolkit';

import { baseApi } from '../services/api';
import { authReducer } from '../features/auth';
import { cartReducer } from '../features/cart';
import { themeReducer } from '../features/theme';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    cart: cartReducer,
    theme: themeReducer,

    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware(baseApi.middleware).concat(baseApi.middleware),
});

export default store;
