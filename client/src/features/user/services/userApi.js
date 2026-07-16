import { baseApi } from '../../../api/base-api';

export const userApi = baseApi.injectEndpoints({
  overrideExisting: false,

  endpoints: (builder) => ({
    getCurrentUser: builder.query({
      query: () => '/users/me',
      transformResponse: (response) => response.data,
      providesTags: ['CurrentUser'],
    }),

    updateCurrentUser: builder.mutation({
      query: (body) => ({
        url: '/users/me',
        method: 'PATCH',
        body,
      }),
      transformResponse: (response) => response.data,
      invalidatesTags: ['CurrentUser'],
    }),

    uploadAvatar: builder.mutation({
      query: (formData) => ({
        url: '/users/avatar',
        method: 'PATCH',
        body: formData,
      }),
      invalidatesTags: ['CurrentUser'],
    }),

    uploadBanner: builder.mutation({
      query: (formData) => ({
        url: '/users/banner',
        method: 'PATCH',
        body: formData,
      }),
      invalidatesTags: ['CurrentUser'],
    }),
  }),
});

export const {
  useGetCurrentUserQuery,
  useUpdateCurrentUserMutation,
  useUploadAvatarMutation,
  useUploadBannerMutation,
} = userApi;
