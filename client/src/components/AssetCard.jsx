import { Bookmark, ShoppingCart, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

/**
 * AssetCard — displays a single digital asset with:
 * - Thumbnail gradient / image
 * - Hover actions: preview, bookmark, add to cart
 * - Click navigates to the asset detail page
 * - Dark mode aware
 */
const AssetCard = ({ id, title, creator, price, gradient, badge, rating = 4.8, reviews = 124 }) => {
  const navigate = useNavigate();
  const { addItem } = useCart();

  const handleAddToCart = (e) => {
    e.stopPropagation(); // Prevent card click navigation
    addItem({ id, title, creator, price, gradient });
  };

  return (
    <div
      onClick={() => navigate(`/asset/${id || 1}`)}
      className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-sm border border-gray-100 dark:border-gray-800 card-hover group cursor-pointer flex-shrink-0 transition-colors duration-300"
    >
      {/* Thumbnail */}
      <div className={`relative h-44 ${gradient} overflow-hidden`}>
        {badge && (
          <span className="absolute top-3 left-3 bg-black/60 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full font-medium">
            {badge}
          </span>
        )}

        {/* Bookmark button */}
        <button
          onClick={(e) => e.stopPropagation()}
          className="absolute top-3 right-3 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white"
          aria-label="Bookmark"
        >
          <Bookmark size={14} className="text-gray-600" />
        </button>

        {/* Preview overlay on hover */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <polygon points="6,4 12,8 6,12" fill="#7C3AED"/>
            </svg>
          </div>
        </div>

        {/* Add to cart button */}
        <button
          onClick={handleAddToCart}
          className="absolute bottom-3 right-3 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white"
          aria-label="Add to cart"
        >
          <ShoppingCart size={14} className="text-gray-600" />
        </button>
      </div>

      {/* Info section */}
      <div className="p-4">
        <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100 leading-tight line-clamp-2">{title}</h3>

        {/* Star rating */}
        <div className="flex items-center gap-1 mt-1.5">
          <Star size={11} className="text-amber-400 fill-amber-400" />
          <span className="text-xs text-gray-500 dark:text-gray-400">{rating} ({reviews})</span>
        </div>

        <div className="flex items-center justify-between mt-2">
          {/* Creator avatar + name */}
          <div className="flex items-center gap-1.5">
            <div className="w-4 h-4 rounded-full bg-gradient-to-br from-purple-400 to-pink-400"></div>
            <span className="text-xs text-gray-500 dark:text-gray-400 truncate max-w-[90px]">{creator}</span>
          </div>
          <span className="text-sm font-bold text-gray-900 dark:text-white">${price}</span>
        </div>
      </div>
    </div>
  );
};

export default AssetCard;
