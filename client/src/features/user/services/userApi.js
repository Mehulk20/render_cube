import { baseApi } from '../../../api/base-api';

export const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getCurrentUser: builder.query({
      query: () => '/users/me',
      transformResponse: (response) => response.data,
      providesTags: ['CurrentUser'],
    }),

    updateProfile: builder.mutation({
      query: (body) => ({
        url: '/users/me',
        method: 'PATCH',
        body,
      }),
      transformResponse: (response) => response.data,
      invalidatesTags: ['CurrentUser'],
    }),

    updateAbout: builder.mutation({
      query: (body) => ({
        url: '/users/me/about',
        method: 'PATCH',
        body,
      }),
      transformResponse: (response) => response.data,
      invalidatesTags: ['CurrentUser'],
    }),

    updateSocial: builder.mutation({
      query: (body) => ({
        url: '/users/me/socials',
        method: 'PATCH',
        body,
      }),
      transformResponse: (response) => response.data,
      invalidatesTags: ['CurrentUser'],
    }),

    updateStore: builder.mutation({
      query: (body) => ({
        url: '/users/me/store',
        method: 'PATCH',
        body,
      }),
      transformResponse: (response) => response.data,
      invalidatesTags: ['CurrentUser'],
    }),

    uploadAvatar: builder.mutation({
      query: (formData) => ({
        url: '/users/me/avatar',
        method: 'PATCH',
        body: formData,
      }),
      invalidatesTags: ['CurrentUser'],
    }),

    uploadBanner: builder.mutation({
      query: (formData) => ({
        url: '/users/me/banner',
        method: 'PATCH',
        body: formData,
      }),
      invalidatesTags: ['CurrentUser'],
    }),
  }),
});

export const {
  useGetCurrentUserQuery,
  useUpdateProfileMutation,
  useUpdateAboutMutation,
  useUpdateSocialMutation,
  useUpdateStoreMutation,
  useUploadAvatarMutation,
  useUploadBannerMutation,
} = userApi;
