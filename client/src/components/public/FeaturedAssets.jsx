import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useRef, useState } from 'react';
import AssetCard from './AssetCard';

export const FEATURED_ASSETS = [
  { id: 1, title: 'Neon Lights Overlay Pack',  creator: 'Luminous Visuals', price: '29', gradient: 'bg-gradient-to-br from-violet-900 via-purple-800 to-indigo-900', badge: '▶ Preview', rating: 4.9, reviews: 312 },
  { id: 2, title: 'Futuristic Car 3D Model',    creator: 'Polygon Flux',     price: '79', gradient: 'bg-gradient-to-br from-slate-800 to-slate-900',                  badge: null,       rating: 4.7, reviews: 98  },
  { id: 3, title: 'Dashboard UI Kit – Dark',    creator: 'UIHut',            price: '49', gradient: 'bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900',       badge: null,       rating: 4.8, reviews: 245 },
  { id: 4, title: 'Cinematic Landscape LUTs',   creator: 'Colorist Co.',     price: '19', gradient: 'bg-gradient-to-br from-sky-700 via-blue-600 to-indigo-800',       badge: null,       rating: 4.6, reviews: 187 },
  { id: 5, title: 'Gradient Waves Backgrounds', creator: 'Pixel Perfect',    price: '15', gradient: 'bg-gradient-to-br from-fuchsia-600 via-pink-500 to-violet-700',   badge: null,       rating: 4.5, reviews: 203 },
  { id: 6, title: 'Abstract Motion Toolkit',    creator: 'Motion Lab',       price: '39', gradient: 'bg-gradient-to-br from-emerald-700 to-teal-900',                  badge: 'New',      rating: 4.9, reviews: 56  },
];

// Width of one card + gap in px — must match the CSS below
const CARD_W = 220;
const GAP    = 20;
const STEP   = CARD_W + GAP;

/**
 * FeaturedAssets — true horizontal carousel with working prev/next buttons.
 *
 * FIX: The container is now `flex overflow-x-auto` (not a CSS grid) so
 * scrollBy() actually moves it. Cards have a fixed min-width so they don't
 * stretch, and the scroll target is the flex row wrapper not a grid.
 *
 * Dark mode aware.
 */
const FeaturedAssets = () => {
  const rowRef  = useRef(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd,   setAtEnd]   = useState(false);

  /* Update edge-detection after every scroll */
  const onScroll = () => {
    const el = rowRef.current;
    if (!el) return;
    setAtStart(el.scrollLeft <= 4);
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 4);
  };

  const slide = (dir) => {
    rowRef.current?.scrollBy({ left: dir * STEP * 2, behavior: 'smooth' });
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50/50 dark:bg-gray-900/50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">

        {/* Header row */}
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-3xl font-display font-bold text-gray-900 dark:text-white" style={{ fontFamily: 'Syne' }}>
              Featured Assets
            </h2>
            <p className="text-gray-400 dark:text-gray-500 text-sm mt-1">Handpicked premium assets trending this week</p>
          </div>

          <div className="flex items-center gap-3">
            {/* ← prev */}
            <button
              onClick={() => slide(-1)}
              disabled={atStart}
              aria-label="Previous assets"
              className={`w-9 h-9 rounded-full border flex items-center justify-center transition-all
                ${atStart
                  ? 'border-gray-100 dark:border-gray-800 text-gray-300 dark:text-gray-600 cursor-not-allowed'
                  : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-primary text-gray-600 dark:text-gray-300'
                }`}
            >
              <ChevronLeft size={16} />
            </button>

            {/* → next */}
            <button
              onClick={() => slide(1)}
              disabled={atEnd}
              aria-label="Next assets"
              className={`w-9 h-9 rounded-full border flex items-center justify-center transition-all
                ${atEnd
                  ? 'border-gray-100 dark:border-gray-800 text-gray-300 dark:text-gray-600 cursor-not-allowed'
                  : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-primary text-gray-600 dark:text-gray-300'
                }`}
            >
              <ChevronRight size={16} />
            </button>

            <Link
              to="/marketplace"
              className="flex items-center gap-1.5 text-primary font-semibold text-sm hover:gap-2.5 transition-all"
            >
              View all <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        {/*
          FIX: flex row (not grid) so scrollBy() works correctly.
          Each card has a fixed min-w so it doesn't collapse.
          overflow-x-auto + scrollbar-hide keeps it tidy.
        */}
        <div
          ref={rowRef}
          onScroll={onScroll}
          className="flex gap-5 overflow-x-auto scrollbar-hide pb-2"
          style={{ scrollSnapType: 'x mandatory' }}
        >
          {FEATURED_ASSETS.map((asset) => (
            <div
              key={asset.id}
              style={{ minWidth: `${CARD_W}px`, scrollSnapAlign: 'start' }}
            >
              <AssetCard {...asset} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedAssets;
