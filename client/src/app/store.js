import { configureStore } from '@reduxjs/toolkit';

import { baseApi } from '../services/api';
import { authReducer } from '../features/auth';

export const store = configureStore({
  reducer: {
    auth: authReducer,

    [baseApi.reducerPath]: baseApi.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
});

export default store;
