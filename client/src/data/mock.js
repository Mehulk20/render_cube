// Central mock data — stands in for API responses.

export const currentUser = {
  id: 'u_jarvis',
  name: 'Jarvis Studio',
  username: 'jarvisstudio',
  email: 'jarvis@studio.com',
  avatar: 'https://i.pravatar.cc/160?img=13',
  role: 'creator', // 'user' | 'creator'
  verified: true,
  bio: 'Motion graphics designer and content creator. Passionate about creating high-quality visuals and helping creators bring ideas to life.',
  location: 'Bhagalpur, India',
  website: 'jarvisstudio.com',
  joined: 'May 2021',
  followers: 1200,
  following: 320,
  assetsCount: 28,
  storeName: 'Jarvis Studio',
  storeDescription: 'High-quality motion graphics, templates, and creative assets to bring your ideas to life.',
  storeCategory: 'Motion Graphics',
  social: [
    { platform: 'YouTube', handle: 'youtube.com/@jarvisstudio', icon: 'youtube' },
    { platform: 'Instagram', handle: 'instagram.com/jarvis.studio', icon: 'instagram' },
    { platform: 'Behance', handle: 'behance.net/jarvisstudio', icon: 'behance' },
    { platform: 'Dribbble', handle: 'dribbble.com/jarvisstudio', icon: 'dribbble' },
  ],
  creatorStatus: {
    emailVerified: true,
    identityVerified: true,
    activeCreator: true,
  },
};

export const categories = [
  'Templates', 'Sound Effects', 'UI Kits', 'Motion Graphics', 'Icons', 'Fonts', '3D Assets', 'Presets',
];

export const assets = [
  { id: 'a1', title: 'Premium Logo Reveal', author: 'Jarvis Studio', price: 0, free: true, downloads: 12580, favorites: 3240, category: 'Motion Graphics', color: 'from-violet-600 to-fuchsia-600', rating: 4.9 },
  { id: 'a2', title: 'YouTube Creator Pack', author: 'MotionDuck', price: 0, free: true, downloads: 8930, favorites: 1980, category: 'Templates', color: 'from-rose-500 to-orange-500', rating: 4.8 },
  { id: 'a3', title: 'Instagram Reels Pack', author: 'Visual Factory', price: 0, free: true, downloads: 6210, favorites: 1420, category: 'Templates', color: 'from-blue-600 to-violet-600', rating: 4.7 },
  { id: 'a4', title: 'Modern UI Kit', author: 'Alex Motion', price: 0, free: true, downloads: 5330, favorites: 1190, category: 'UI Kits', color: 'from-slate-700 to-slate-900', rating: 4.9 },
  { id: 'a5', title: 'Neon Text Effects', author: 'Jarvis Studio', price: 0, free: true, downloads: 1920, favorites: 612, category: 'Motion Graphics', color: 'from-cyan-500 to-blue-600', rating: 4.9 },
  { id: 'a6', title: 'Glassmorphism UI Kit', author: 'Jarvis Studio', price: 0, free: true, downloads: 1250, favorites: 320, category: 'UI Kits', color: 'from-indigo-500 to-purple-600', rating: 4.8 },
  { id: 'a7', title: 'Particles Overlay Pack', author: 'Jarvis Studio', price: 0, free: true, downloads: 980, favorites: 210, category: 'Motion Graphics', color: 'from-orange-600 to-rose-700', rating: 4.6 },
  { id: 'a8', title: 'Minimal Logo Pack', author: 'MotionDuck', price: 0, free: true, downloads: 987, favorites: 361, category: 'Motion Graphics', color: 'from-zinc-700 to-zinc-900', rating: 4.7 },
  { id: 'a9', title: '3D Icon Pack', author: 'Visual Factory', price: 0, free: true, downloads: 4210, favorites: 890, category: '3D Assets', color: 'from-fuchsia-600 to-pink-600', rating: 4.8 },
  { id: 'a10', title: 'Corporate Slideshow', author: 'Alex Motion', price: 0, free: true, downloads: 3120, favorites: 540, category: 'Templates', color: 'from-sky-600 to-cyan-700', rating: 4.5 },
  { id: 'a11', title: 'Lower Thirds Bundle', author: 'Jarvis Studio', price: 0, free: true, downloads: 870, favorites: 185, category: 'Templates', color: 'from-emerald-600 to-teal-700', rating: 4.7 },
  { id: 'a12', title: 'Animated Icons Set', author: 'Jarvis Studio', price: 0, free: true, downloads: 0, favorites: 0, category: 'Icons', color: 'from-neutral-700 to-neutral-900', rating: 0 },
];

export const myAssets = [
  { id: 'a5', title: 'Glassmorphism UI Kit', status: 'Published', downloads: 1250, favorites: 320, updated: '2 days ago', color: 'from-indigo-500 to-purple-600' },
  { id: 'a7', title: 'Particles Overlay Pack', status: 'Pending Review', downloads: 980, favorites: 210, updated: '3 days ago', color: 'from-orange-600 to-rose-700' },
  { id: 'a12', title: 'Animated Icons Set', status: 'Draft', downloads: 0, favorites: 0, updated: '5 days ago', color: 'from-neutral-700 to-neutral-900' },
  { id: 'a5b', title: 'Neon Text Effects Pack', status: 'Published', downloads: 2150, favorites: 612, updated: '1 week ago', color: 'from-cyan-500 to-blue-600' },
  { id: 'a11', title: 'Lower Thirds Bundle', status: 'Published', downloads: 870, favorites: 185, updated: '1 week ago', color: 'from-emerald-600 to-teal-700' },
];

export const topPerforming = [
  { id: 't1', title: 'Neon Text Effects Pack', downloads: 1920, favorites: 612, color: 'from-cyan-500 to-blue-600' },
  { id: 't2', title: 'YouTube Creator Pack', downloads: 1456, favorites: 512, color: 'from-rose-500 to-orange-500' },
  { id: 't3', title: 'Modern Titles Pack', downloads: 1254, favorites: 425, color: 'from-slate-700 to-slate-900' },
  { id: 't4', title: 'Minimal Logo Pack', downloads: 987, favorites: 361, color: 'from-zinc-700 to-zinc-900' },
  { id: 't5', title: 'UI Animation Pack', downloads: 875, favorites: 330, color: 'from-indigo-600 to-violet-700' },
];

export const downloadsSeries = [
  { date: 'Apr 20', downloads: 620 }, { date: 'Apr 23', downloads: 780 }, { date: 'Apr 26', downloads: 540 },
  { date: 'Apr 29', downloads: 910 }, { date: 'May 2', downloads: 860 }, { date: 'May 5', downloads: 1040 },
  { date: 'May 8', downloads: 780 }, { date: 'May 11', downloads: 990 }, { date: 'May 15', downloads: 1620 },
  { date: 'May 18', downloads: 1180 }, { date: 'May 20', downloads: 1340 },
];

export const recentReviews = [
  { id: 'r1', name: 'Alex M.', rating: 5, time: '2 days ago', text: 'Excellent work! Very high quality assets. Exactly what I needed.', avatar: 'https://i.pravatar.cc/80?img=12' },
  { id: 'r2', name: 'Sarah K.', rating: 5, time: '5 days ago', text: 'Super useful and easy to customize. Thanks for sharing!', avatar: 'https://i.pravatar.cc/80?img=32' },
  { id: 'r3', name: 'David R.', rating: 4, time: '1 week ago', text: 'Great pack! More color variations would be awesome.', avatar: 'https://i.pravatar.cc/80?img=51' },
];

export const followingUpdates = [
  { id: 'f1', name: 'Alex Motion', action: 'Released Neon Transition Pack', time: '2 hours ago', avatar: 'https://i.pravatar.cc/80?img=15', cover: 'from-violet-600 to-fuchsia-600' },
  { id: 'f2', name: 'MotionDuck', action: 'Released Minimal Logo Pack', time: '5 hours ago', avatar: 'https://i.pravatar.cc/80?img=17', cover: 'from-zinc-700 to-zinc-900' },
  { id: 'f3', name: 'Visual Factory', action: 'Released UI Animation Pack', time: '1 day ago', avatar: 'https://i.pravatar.cc/80?img=19', cover: 'from-indigo-600 to-violet-700' },
];

export const recentPurchases = [
  { id: 'p1', title: 'Premium Logo Reveal', price: 24, color: 'from-violet-600 to-fuchsia-600' },
  { id: 'p2', title: 'YouTube Creator Pack', price: 39, color: 'from-rose-600 to-red-700' },
  { id: 'p3', title: 'Instagram Reels Pack', price: 39, color: 'from-blue-600 to-violet-700' },
  { id: 'p4', title: 'Modern UI Kit', price: 49, color: 'from-slate-700 to-slate-900' },
];

export const userStats = {
  purchases: 12,
  downloads: 24,
  wishlist: 8,
  following: 6,
};

export const recentDownloads = [
  { id: 'd1', title: 'Modern Titles Pack', time: 'Downloaded 2 days ago', color: 'from-slate-700 to-slate-900' },
  { id: 'd2', title: 'Podcast Intro Pack', time: 'Downloaded 5 days ago', color: 'from-fuchsia-700 to-purple-800' },
  { id: 'd3', title: 'UI Animation Pack', time: 'Downloaded 1 week ago', color: 'from-indigo-600 to-violet-700' },
  { id: 'd4', title: 'Gaming Overlay Pack', time: 'Downloaded 1 week ago', color: 'from-rose-600 to-orange-600' },
];

export const tipsToGrow = [
  { id: 'tip1', title: 'Upload regular assets', text: 'Creators who upload 2+ assets per week get 3x more downloads.' },
  { id: 'tip2', title: 'Use high quality previews', text: 'Good previews can increase downloads by up to 60%.' },
  { id: 'tip3', title: 'Create collections', text: 'Organized collections help users find your assets easily.' },
];
