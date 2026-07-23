// src/utils/media.js

const API_URL = import.meta.env.VITE_API_URL;

export const getAvatarUrl = (filename) => (filename ? `${API_URL}${filename}` : null);

export const getBannerUrl = (filename) =>
  filename ? `${API_URL}/api/v1/users/uploads/banners/${filename}` : null;
