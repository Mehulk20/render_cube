import { baseApi } from '../../../api/base-api';

export const authApi = baseApi.injectEndpoints({
  overrideExisting: false,

  endpoints: (builder) => ({
    register: builder.mutation({
      query: (body) => ({
        url: '/auth/register',
        method: 'POST',
        body,
      }),

      invalidatesTags: ['CurrentUser'],
    }),

    login: builder.mutation({
      query: (body) => ({
        url: '/auth/login',
        method: 'POST',
        body,
      }),

      invalidatesTags: ['CurrentUser'],
    }),

    logout: builder.mutation({
      query: () => ({
        url: '/auth/logout',
        method: 'POST',
      }),

      invalidatesTags: ['CurrentUser'],
    }),

    refreshToken: builder.mutation({
      query: () => ({
        url: '/auth/refresh',
        method: 'POST',
      }),
    }),
  }),
});

export const { useRegisterMutation, useLoginMutation, useLogoutMutation, useRefreshTokenMutation } =
  authApi;
