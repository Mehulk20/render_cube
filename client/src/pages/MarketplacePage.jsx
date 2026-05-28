import { ChevronDown, Grid, List, SlidersHorizontal } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import AssetCard from '../components/AssetCard';
import SearchBar from '../components/SearchBar';

// ── Mock asset data ─────────────────────────────────────────────
const ALL_ASSETS = [
  { id: 1,  title: 'Neon Lights Overlay Pack',    creator: 'Luminous Visuals', price: '29', gradient: 'bg-gradient-to-br from-violet-900 via-purple-800 to-indigo-900', badge: '▶ Preview', category: 'Video Assets', rating: 4.9, reviews: 312 },
  { id: 2,  title: 'Futuristic Car 3D Model',      creator: 'Polygon Flux',     price: '79', gradient: 'bg-gradient-to-br from-slate-800 to-slate-900',                  badge: null,       category: '3D Models',   rating: 4.7, reviews: 98  },
  { id: 3,  title: 'Dashboard UI Kit – Dark',      creator: 'UIHut',            price: '49', gradient: 'bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900',       badge: null,       category: 'Templates',   rating: 4.8, reviews: 245 },
  { id: 4,  title: 'Cinematic Landscape LUTs',     creator: 'Colorist Co.',     price: '19', gradient: 'bg-gradient-to-br from-sky-700 via-blue-600 to-indigo-800',       badge: null,       category: 'Video Assets', rating: 4.6, reviews: 187 },
  { id: 5,  title: 'Gradient Waves Backgrounds',   creator: 'Pixel Perfect',    price: '15', gradient: 'bg-gradient-to-br from-fuchsia-600 via-pink-500 to-violet-700',   badge: null,       category: 'Graphics',    rating: 4.5, reviews: 203 },
  { id: 6,  title: 'Abstract Motion Toolkit',      creator: 'Motion Lab',       price: '39', gradient: 'bg-gradient-to-br from-emerald-700 to-teal-900',                  badge: 'New',      category: 'Video Assets', rating: 4.9, reviews: 56  },
  { id: 7,  title: 'Retro Font Bundle',            creator: 'Type Foundry',     price: '22', gradient: 'bg-gradient-to-br from-amber-700 to-red-800',                     badge: null,       category: 'Fonts',       rating: 4.7, reviews: 134 },
  { id: 8,  title: 'Nature Sound Pack',            creator: 'Ambient Audio',    price: '12', gradient: 'bg-gradient-to-br from-green-700 to-emerald-900',                 badge: null,       category: 'Music & SFX', rating: 4.8, reviews: 89  },
  { id: 9,  title: 'React Component Library',      creator: 'DevKit Studio',    price: '59', gradient: 'bg-gradient-to-br from-blue-700 to-indigo-900',                   badge: 'Hot',      category: 'Code & UI',   rating: 4.9, reviews: 421 },
  { id: 10, title: 'Portrait Photography Pack',    creator: 'Lens Craft',       price: '35', gradient: 'bg-gradient-to-br from-rose-700 to-pink-900',                     badge: null,       category: 'Photos',      rating: 4.6, reviews: 167 },
  { id: 11, title: 'Synthwave Music Kit',          creator: 'BeatForge',        price: '45', gradient: 'bg-gradient-to-br from-purple-700 to-pink-800',                   badge: 'New',      category: 'Music & SFX', rating: 4.8, reviews: 78  },
  { id: 12, title: 'Isometric City 3D Pack',       creator: '3D World Studio',  price: '89', gradient: 'bg-gradient-to-br from-cyan-700 to-teal-900',                     badge: null,       category: '3D Models',   rating: 4.7, reviews: 112 },
];

const CATEGORIES = ['All', 'Templates', 'Video Assets', 'Music & SFX', 'Graphics', '3D Models', 'Photos', 'Fonts', 'Code & UI'];
const SORT_OPTIONS = ['Most Popular', 'Newest', 'Price: Low to High', 'Price: High to Low', 'Best Rated'];

/**
 * MarketplacePage — browsable asset grid with:
 * - Category filter pills
 * - Sort dropdown
 * - Grid / list view toggle
 * - URL param sync (q, cat)
 * Dark mode aware.
 */
const MarketplacePage = () => {
  const [searchParams] = useSearchParams();
  const [activeCategory, setActiveCategory] = useState('All');
  const [sortBy, setSortBy] = useState('Most Popular');
  const [viewMode, setViewMode] = useState('grid'); // 'grid' | 'list'
  const [showSortMenu, setShowSortMenu] = useState(false);

  // Sync URL params to local state on mount
  useEffect(() => {
    const cat = searchParams.get('cat');
    if (cat && CATEGORIES.includes(cat)) setActiveCategory(cat);
  }, [searchParams]);

  // Filter assets by active category
  const filtered = ALL_ASSETS.filter(
    (a) => activeCategory === 'All' || a.category === activeCategory
  );

  // Sort assets
  const sorted = [...filtered].sort((a, b) => {
    if (sortBy === 'Price: Low to High') return parseFloat(a.price) - parseFloat(b.price);
    if (sortBy === 'Price: High to Low') return parseFloat(b.price) - parseFloat(a.price);
    if (sortBy === 'Best Rated') return b.rating - a.rating;
    if (sortBy === 'Newest') return b.id - a.id;
    return b.reviews - a.reviews; // Most Popular
  });

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300 page-transition">
      {/* Page header */}
      <div className="pt-24 pb-8 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-display font-bold text-gray-900 dark:text-white mb-1" style={{ fontFamily: 'Syne' }}>
            Marketplace
          </h1>
          <p className="text-gray-500 dark:text-gray-400 text-sm">{ALL_ASSETS.length.toLocaleString()}+ premium assets</p>
        </div>
      </div>

      {/* Compact search bar */}
      <SearchBar compact />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">

        {/* Filter toolbar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">

          {/* Category pill filters */}
          <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide pb-1">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`flex-shrink-0 px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? 'bg-primary text-white shadow-md'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Controls: sort + view mode */}
          <div className="flex items-center gap-3 flex-shrink-0">
            {/* Sort dropdown */}
            <div className="relative">
              <button
                onClick={() => setShowSortMenu(!showSortMenu)}
                className="flex items-center gap-2 px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-xl text-sm font-medium text-gray-700 dark:text-gray-300 hover:border-primary transition-colors bg-white dark:bg-gray-900"
              >
                <SlidersHorizontal size={14} />
                {sortBy}
                <ChevronDown size={14} />
              </button>
              {showSortMenu && (
                <div className="absolute right-0 top-full mt-2 w-52 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-700 rounded-xl shadow-xl z-50 overflow-hidden animate-fade-in">
                  {SORT_OPTIONS.map((opt) => (
                    <button
                      key={opt}
                      onClick={() => { setSortBy(opt); setShowSortMenu(false); }}
                      className={`block w-full text-left px-4 py-2.5 text-sm transition-colors ${
                        sortBy === opt
                          ? 'bg-purple-50 dark:bg-purple-950 text-primary font-semibold'
                          : 'text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800'
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Grid / List view toggle */}
            <div className="flex items-center border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 transition-colors ${viewMode === 'grid' ? 'bg-primary text-white' : 'bg-white dark:bg-gray-900 text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800'}`}
                aria-label="Grid view"
              >
                <Grid size={16} />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 transition-colors ${viewMode === 'list' ? 'bg-primary text-white' : 'bg-white dark:bg-gray-900 text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800'}`}
                aria-label="List view"
              >
                <List size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Results count */}
        <p className="text-sm text-gray-400 dark:text-gray-500 mb-6">
          Showing <span className="font-semibold text-gray-700 dark:text-gray-300">{sorted.length}</span> assets
          {activeCategory !== 'All' && ` in ${activeCategory}`}
        </p>

        {/* Asset grid */}
        {sorted.length > 0 ? (
          <div className={
            viewMode === 'grid'
              ? 'grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-5'
              : 'flex flex-col gap-4'
          }>
            {sorted.map((asset) => (
              viewMode === 'grid'
                ? <AssetCard key={asset.id} {...asset} />
                : (
                  /* List view layout */
                  <div key={asset.id} className="flex items-center gap-4 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl p-4 card-hover cursor-pointer">
                    <div className={`w-20 h-16 rounded-xl flex-shrink-0 ${asset.gradient}`} />
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm font-semibold text-gray-900 dark:text-white truncate">{asset.title}</h3>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{asset.creator} · {asset.category}</p>
                    </div>
                    <span className="text-base font-bold text-gray-900 dark:text-white flex-shrink-0">${asset.price}</span>
                  </div>
                )
            ))}
          </div>
        ) : (
          <div className="text-center py-24">
            <p className="text-5xl mb-4">🔍</p>
            <p className="text-gray-500 dark:text-gray-400 text-lg font-medium">No assets found</p>
            <p className="text-gray-400 dark:text-gray-500 text-sm mt-1">Try a different category or search term</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MarketplacePage;
