import { configureStore } from '@reduxjs/toolkit';

import { baseApi } from '../api/base-api';

import { authReducer } from '../features/auth/services';
import { userReducer } from '../features/user/services';
import { cartReducer } from '../features/cart/services';
import { themeReducer } from '../features/theme';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    cart: cartReducer,
    theme: themeReducer,

    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(baseApi.middleware),
});

export default store;
