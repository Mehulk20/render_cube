import { baseApi } from '../../services/api';

export const authApi = baseApi.injectEndpoints({
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

    getCurrentUser: builder.query({
      query: () => ({
        url: '/users/me',
      }),

      providesTags: ['CurrentUser'],
    }),
  }),
});

export const { useRegisterMutation, useLoginMutation, useLogoutMutation, useGetCurrentUserQuery } =
  authApi;
