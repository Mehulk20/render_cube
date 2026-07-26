// src/utils/media.js

const API_URL = import.meta.env.VITE_API_URL;

export const getMediaUrl = (filename) => (filename ? `${API_URL}${filename}` : null);
