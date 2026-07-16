import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useRef, useState } from 'react';

import AssetCard from './AssetCard';
import { Container, Section } from '../../../shared/ui';

export const FEATURED_ASSETS = [
  {
    id: 1,
    title: 'Neon Lights Overlay Pack',
    creator: 'Luminous Visuals',
    price: '29',
    gradient: 'bg-linear-to-br from-violet-900 via-purple-800 to-indigo-900',
    badge: '▶ Preview',
    rating: 4.9,
    reviews: 312,
  },
  {
    id: 2,
    title: 'Futuristic Car 3D Model',
    creator: 'Polygon Flux',
    price: '79',
    gradient: 'bg-linear-to-br from-slate-800 to-slate-900',
    rating: 4.7,
    reviews: 98,
  },
  {
    id: 3,
    title: 'Dashboard UI Kit – Dark',
    creator: 'UIHut',
    price: '49',
    gradient: 'bg-linear-to-br from-gray-900 via-slate-800 to-gray-900',
    rating: 4.8,
    reviews: 245,
  },
  {
    id: 4,
    title: 'Cinematic Landscape LUTs',
    creator: 'Colorist Co.',
    price: '19',
    gradient: 'bg-linear-to-br from-sky-700 via-blue-600 to-indigo-800',
    rating: 4.6,
    reviews: 187,
  },
  {
    id: 5,
    title: 'Gradient Waves Backgrounds',
    creator: 'Pixel Perfect',
    price: '15',
    gradient: 'bg-linear-to-br from-fuchsia-600 via-pink-500 to-violet-700',
    rating: 4.5,
    reviews: 203,
  },
  {
    id: 6,
    title: 'Abstract Motion Toolkit',
    creator: 'Motion Lab',
    price: '39',
    gradient: 'bg-linear-to-br from-emerald-700 to-teal-900',
    badge: 'New',
    rating: 4.9,
    reviews: 56,
  },
];

const CARD_W = 280;
const GAP = 24;
const STEP = CARD_W + GAP;

export default function FeaturedAssets() {
  const rowRef = useRef(null);

  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const onScroll = () => {
    const el = rowRef.current;

    if (!el) return;

    setAtStart(el.scrollLeft <= 4);
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 4);
  };

  const slide = (direction) => {
    rowRef.current?.scrollBy({
      left: direction * STEP * 2,
      behavior: 'smooth',
    });
  };

  return (
    <Section>
      <Container>
        <div
          className="
            rounded-2xl
            border
            border-border
            bg-featured
            bg-decor
            bg-noise
            px-10
            py-10
            shadow-card
          "
        >
          {/* Header */}

          <div className="mb-8 flex items-center justify-between">
            <div className="space-y-2">
              <span
                className="
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.25em]
                  text-primary
                "
              >
                Featured Collection
              </span>

              <h2 className="font-display text-4xl font-bold text-foreground">Featured Assets</h2>

              <p className="text-sm text-foreground-muted">
                Handpicked premium assets trending this week.
              </p>
            </div>

            <div className="flex items-center gap-4">
              {/* Previous */}

              <button
                onClick={() => slide(-1)}
                disabled={atStart}
                aria-label="Previous assets"
                className={`flex h-11 w-11 items-center justify-center rounded-full border transition-all duration-300 ${
                  atStart
                    ? 'cursor-not-allowed border-border bg-surface text-foreground-faint'
                    : 'border-border bg-surface text-foreground shadow-card hover:-translate-y-0.5 hover:border-primary hover:bg-primary hover:text-white hover:shadow-glow'
                }`}
              >
                <ChevronLeft size={18} />
              </button>

              {/* Next */}

              <button
                onClick={() => slide(1)}
                disabled={atEnd}
                aria-label="Next assets"
                className={`flex h-11 w-11 items-center justify-center rounded-full border transition-all duration-300 ${
                  atEnd
                    ? 'cursor-not-allowed border-border bg-surface text-foreground-faint'
                    : 'border-border bg-surface text-foreground shadow-card hover:-translate-y-0.5 hover:border-primary hover:bg-primary hover:text-white hover:shadow-glow'
                }`}
              >
                <ChevronRight size={18} />
              </button>

              <Link
                to="/marketplace"
                className="
                  group
                  flex
                  items-center
                  gap-2
                  text-sm
                  font-semibold
                  text-primary
                  transition-all
                  duration-300
                  hover:text-primary-hover
                "
              >
                View all
                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>

          {/* Carousel */}

          <div className="relative -mx-2">
            <div
              ref={rowRef}
              onScroll={onScroll}
              className="

                flex
                gap-6
                overflow-x-auto
                pr-1
                pt-2
                pb-3
                scrollbar-hide
                scroll-smooth
                bg-transparent
                rounded-2xl
              "
              style={{
                scrollSnapType: 'x mandatory',
                scrollPaddingLeft: '5px',
              }}
            >
              <div className="w-6 shrink-0" />
              {FEATURED_ASSETS.map((asset) => (
                <div
                  key={asset.id}
                  className="
                    w-60
                    shrink-0
                    transition-transform
                    duration-300
                    hover:-translate-y-2
                  "
                  style={{
                    scrollSnapAlign: 'start',
                  }}
                >
                  <AssetCard {...asset} />
                </div>
              ))}
            </div>

            {/* Left Fade */}

            {!atStart && (
              <div
                className="
                  pointer-events-none
                  absolute

                  left-0
                  hidden
                  w-16
                  bg-linear-to-r
                  from-panel
                  to-transparent
                  lg:block
                "
              />
            )}

            {/* Right Fade */}

            {!atEnd && (
              <div
                className="
                  pointer-events-none
                  absolute
                  right-0
                  hidden
                  w-20
                  bg-linear-to-l
                  from-panel
                  to-transparent
                  lg:block
                "
              />
            )}
          </div>
        </div>
      </Container>
    </Section>
  );
}
