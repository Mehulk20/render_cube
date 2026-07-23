import { baseApi } from '../../../api/base-api';

export const userApi = baseApi.injectEndpoints({
  overrideExisting: false,

  endpoints: (builder) => ({
    getCurrentUser: builder.query({
      query: () => '/users/me',

      // transformResponse: (response) => response.data,
      transformResponse: (response) => {
        console.log('=== GET /users/me ===');
        console.log('Full response:', response);
        console.log('Response data:', response.data);
        console.log('bannerUrl:', response.data.bannerUrl);
        return response.data;
      },

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
  useUpdateCurrentUserMutation,
  useUploadAvatarMutation,
  useUploadBannerMutation,
} = userApi;
