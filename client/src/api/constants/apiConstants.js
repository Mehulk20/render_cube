// =========================
// API TAGS (RTK Query)
// =========================

export const API_TAGS = {
  AUTH: 'Auth',
  USER: 'User',
  CREATOR: 'Creator',
  PROFILE: 'Profile',

  ASSET: 'Asset',
  CATEGORY: 'Category',
  COLLECTION: 'Collection',

  DOWNLOAD: 'Download',
  FAVORITE: 'Favorite',
  WISHLIST: 'Wishlist',

  CART: 'Cart',
  ORDER: 'Order',
  PAYMENT: 'Payment',

  REVIEW: 'Review',
  COMMENT: 'Comment',
  RATING: 'Rating',

  FOLLOW: 'Follow',

  NOTIFICATION: 'Notification',

  ANALYTICS: 'Analytics',
  EARNINGS: 'Earnings',
  DASHBOARD: 'Dashboard',

  SEARCH: 'Search',

  SETTINGS: 'Settings',

  REPORT: 'Report',

  ADMIN: 'Admin',
};

export const API_ENDPOINTS = {
  AUTH: '/auth',
  USERS: '/users',
  CREATORS: '/creators',

  ASSETS: '/assets',
  CATEGORIES: '/categories',
  COLLECTIONS: '/collections',

  DOWNLOADS: '/downloads',
  FAVORITES: '/favorites',
  WISHLISTS: '/wishlists',

  CART: '/cart',
  ORDERS: '/orders',
  PAYMENTS: '/payments',

  REVIEWS: '/reviews',
  COMMENTS: '/comments',

  FOLLOWS: '/follows',

  NOTIFICATIONS: '/notifications',

  ANALYTICS: '/analytics',
  EARNINGS: '/earnings',

  SEARCH: '/search',

  SETTINGS: '/settings',

  REPORTS: '/reports',

  ADMIN: '/admin',
};

export const CACHE = {
  SHORT: 60,
  MEDIUM: 300,
  LONG: 1800,
  VERY_LONG: 3600,
};

export const PAGINATION = {
  DEFAULT_PAGE: 1,
  DEFAULT_LIMIT: 12,
  MAX_LIMIT: 100,
};
