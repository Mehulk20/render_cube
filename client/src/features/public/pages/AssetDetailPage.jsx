import { ArrowLeft, CheckCircle, Download, Heart, Share2, ShoppingCart, Star } from 'lucide-react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '../../public/components';
import { useAppDispatch, useAppSelector } from '../../../store';
import { addItemToCart, selectCartItems } from '../../cart/services';

// Mock asset data — in a real app this would come from an API
const ASSET_DETAILS = {
  1: {
    id: 1,
    title: 'Neon Lights Overlay Pack',
    creator: 'Luminous Visuals',
    creatorAvatar: '🎨',
    price: 29,
    originalPrice: 49,
    rating: 4.9,
    reviews: 312,
    downloads: 5420,
    gradient: 'bg-linear-to-br from-violet-900 via-purple-800 to-indigo-900',
    category: 'Video Assets',
    badge: '▶ Preview',
    description:
      'A stunning collection of 50+ neon light overlays perfect for adding atmospheric glow effects to any video or photo project. Compatible with all major editing software.',
    tags: ['Overlay', 'Neon', 'Video', 'Motion', 'Glow'],
    includes: ['50 PNG Overlays (4K)', 'Blending mode guide', 'Tutorial video', 'Free updates'],
    license: 'Standard Commercial License',
  },
};

// Fallback asset for IDs not in the mock data
const DEFAULT_ASSET = {
  id: 99,
  title: 'Premium Digital Asset',
  creator: 'Creative Studio',
  creatorAvatar: '🎨',
  price: 49,
  originalPrice: 79,
  rating: 4.7,
  reviews: 156,
  downloads: 2340,
  gradient: 'bg-linear-to-br from-purple-700 to-pink-800',
  category: 'Graphics',
  badge: null,
  description:
    'A high-quality digital asset crafted with care for professional creatives. Optimised for modern workflows.',
  tags: ['Design', 'Creative', 'Professional'],
  includes: ['Source files', 'Documentation', 'Commercial License'],
  license: 'Standard Commercial License',
};

/**
 * AssetDetailPage — full product page for a single asset.
 * Shows hero thumbnail, metadata, description, and purchase CTA.
 */
const AssetDetailPage = () => {
  const { id } = useParams();

  const dispatch = useAppDispatch();
  const cartItems = useAppSelector(selectCartItems);

  const asset = ASSET_DETAILS[id] || { ...DEFAULT_ASSET, id: parseInt(id) };
  const inCart = cartItems.some((i) => i.id === asset.id);

  const handleAddToCart = () => {
    dispatch(addItemToCart(asset));
  };

  const discount = Math.round(
    (1 - parseFloat(asset.price) / parseFloat(asset.originalPrice)) * 100
  );

  return (
    <div className="min-h-screen bg-background transition-surface page-transition">
      <div className="pt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Back link */}
        <Link
          to="/marketplace"
          className="inline-flex items-center gap-2 text-foreground-faint hover:text-primary transition-colors text-sm mb-8"
        >
          <ArrowLeft size={16} /> Back to Marketplace
        </Link>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Left: Thumbnail */}
          <div className="lg:col-span-3 space-y-4">
            <div
              className={`w-full h-80 rounded-3xl ${asset.gradient} relative overflow-hidden shadow-floating`}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white/20">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <polygon points="12,9 24,16 12,23" fill="white" />
                  </svg>
                </div>
              </div>
              {asset.badge && (
                <span className="glass absolute top-4 left-4 text-white text-xs px-3 py-1.5 rounded-full font-medium">
                  {asset.badge}
                </span>
              )}
              {discount > 0 && (
                <span className="absolute top-4 right-4 bg-success text-white text-xs px-3 py-1.5 rounded-full font-bold">
                  -{discount}% OFF
                </span>
              )}
            </div>

            {/* Description */}
            <div className="bg-surface-raised rounded-2xl p-6 border border-border-soft">
              <h2 className="text-lg font-semibold text-foreground mb-3">About this asset</h2>
              <p className="text-foreground-muted text-sm leading-relaxed">{asset.description}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {asset.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-violet/10 text-primary text-xs font-medium rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Includes */}
            <div className="bg-surface-raised rounded-2xl p-6 border border-border-soft">
              <h2 className="text-lg font-semibold text-foreground mb-3">What's included</h2>
              <ul className="space-y-2">
                {asset.includes.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2.5 text-sm text-foreground-muted"
                  >
                    <CheckCircle size={16} className="text-primary flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right: Purchase panel */}
          <div className="lg:col-span-2 space-y-4">
            <div className="bg-card rounded-3xl border border-border-soft p-6 shadow-sm sticky top-24">
              {/* Creator */}
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-full bg-linear-to-br from-violet to-fuchsia flex items-center justify-center text-lg">
                  {asset.creatorAvatar}
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{asset.creator}</p>
                  <p className="text-xs text-foreground-faint">Verified Creator</p>
                </div>
              </div>

              {/* Title */}
              <h1 className="font-display text-xl font-bold text-foreground leading-tight mb-3">
                {asset.title}
              </h1>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-5">
                <div className="flex items-center gap-0.5">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star
                      size={14}
                      key={s}
                      className={
                        s <= Math.round(asset.rating)
                          ? 'text-amber fill-amber'
                          : 'text-foreground-faint'
                      }
                    />
                  ))}
                </div>
                <span className="text-sm font-semibold text-foreground-muted">{asset.rating}</span>
                <span className="text-sm text-foreground-faint">({asset.reviews} reviews)</span>
              </div>

              {/* Price */}
              <div className="flex items-end gap-3 mb-6">
                <span className="font-display text-4xl font-bold text-foreground">
                  ${asset.price}
                </span>
                {asset.originalPrice && (
                  <span className="text-lg text-foreground-faint line-through mb-1">
                    ${asset.originalPrice}
                  </span>
                )}
              </div>

              {/* CTA buttons */}
              <div className="space-y-3">
                <Button
                  variant="primary"
                  size="lg"
                  className="w-full justify-center"
                  onClick={handleAddToCart}
                  disabled={inCart}
                >
                  {inCart ? (
                    <>
                      <CheckCircle size={16} /> Added to Cart
                    </>
                  ) : (
                    <>
                      <ShoppingCart size={16} /> Add to Cart
                    </>
                  )}
                </Button>
                <Button variant="outline" size="lg" className="w-full justify-center">
                  <Download size={16} /> Free Preview
                </Button>
              </div>

              {/* Social actions */}
              <div className="flex items-center justify-center gap-4 mt-4">
                <button className="flex items-center gap-1.5 text-foreground-faint hover:text-danger transition-colors text-sm">
                  <Heart size={14} /> Save
                </button>
                <button className="flex items-center gap-1.5 text-foreground-faint hover:text-primary transition-colors text-sm">
                  <Share2 size={14} /> Share
                </button>
              </div>

              {/* License info */}
              <div className="mt-5 pt-5 border-t border-border-soft">
                <div className="flex items-center gap-2 text-xs text-foreground-faint">
                  <CheckCircle size={14} className="text-success" />
                  {asset.license}
                </div>
                <div className="flex items-center gap-2 text-xs text-foreground-faint mt-1.5">
                  <Download size={14} className="text-primary" />
                  {asset.downloads.toLocaleString()} downloads
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssetDetailPage;
