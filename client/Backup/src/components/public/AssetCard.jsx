import { Bookmark, ShoppingCart, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

import { useAppDispatch } from '../../store';
import { addItemToCart } from '../../features/cart';

export default function AssetCard({
  id,
  title,
  creator,
  price,
  gradient,
  badge,
  rating = 4.8,
  reviews = 124,
}) {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleAddToCart = (e) => {
    e.stopPropagation();

    dispatch(
      addItemToCart({
        id,
        title,
        creator,
        price: Number(price),
        gradient,
      })
    );
  };

  const navigateToAsset = () => {
    const path = `/asset/${id || 1}`;

    if (document.startViewTransition) {
      document.startViewTransition(() => navigate(path));
      return;
    }

    navigate(path);
  };

  return (
    <article
      onClick={navigateToAsset}
      className="
        group
        flex
        cursor-pointer
        flex-col
        overflow-hidden
        rounded-xl
        border
        border-border
        bg-card
        shadow-card
        hover-lift
        transition-surface
      "
    >
      {/* Thumbnail */}

      <div className={`relative h-52 overflow-hidden ${gradient}`}>
        {badge && (
          <span
            className="
              glass
              absolute
              left-3
              top-3
              rounded-full
              px-2.5
              py-1
              text-xs
              font-semibold
              text-white
            "
          >
            {badge}
          </span>
        )}

        {/* Bookmark */}

        <button
          aria-label="Bookmark"
          onClick={(e) => e.stopPropagation()}
          className="
            glass
            focus-ring
            transition-interactive
            absolute
            right-3
            top-3
            flex
            h-9
            w-9
            items-center
            justify-center
            rounded-full
            opacity-0
            group-hover:opacity-100
          "
        >
          <Bookmark size={16} className="text-foreground-muted" />
        </button>

        {/* Preview Overlay */}

        <div
          className="
            absolute
            inset-0
            flex
            items-center
            justify-center
            bg-black/25
            opacity-0
            transition-opacity
            duration-300
            group-hover:opacity-100
          "
        >
          <div
            className="
              glass
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-full
              shadow-floating
            "
          >
            <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
              <polygon points="6,4 12,8 6,12" fill="currentColor" className="text-primary" />
            </svg>
          </div>
        </div>

        {/* Cart */}

        <button
          onClick={handleAddToCart}
          aria-label="Add to cart"
          className="
            glass
            focus-ring
            transition-interactive
            absolute
            bottom-3
            right-3
            flex
            h-9
            w-9
            items-center
            justify-center
            rounded-full
            opacity-0
            group-hover:opacity-100
          "
        >
          <ShoppingCart size={16} className="text-foreground-muted" />
        </button>
      </div>
      <div className="flex flex-1 flex-col p-6">
        {/* Title */}

        <h3
          className="
            min-h-12
            text-sm
            font-semibold
            leading-6
            text-foreground
            line-clamp-2
            transition-text
            group-hover:text-primary
          "
        >
          {title}
        </h3>

        {/* Rating */}

        <div className="mt-2 flex items-center gap-1.5">
          <Star size={13} className="fill-warning text-warning" />

          <span className="text-xs text-foreground-soft">{rating}</span>

          <span className="text-xs text-foreground-faint">({reviews})</span>
        </div>

        {/* Footer */}

        <div className="mt-auto flex items-center justify-between pt-5">
          {/* Creator */}

          <div className="flex min-w-0 items-center gap-2">
            <div
              className="
                flex
                h-6
                w-6
                shrink-0
                items-center
                justify-center
                rounded-full
                bg-linear-to-br
                from-brand-500
                to-brand-400
                text-[10px]
                font-bold
                text-white
              "
            >
              {creator?.charAt(0).toUpperCase()}
            </div>

            <span
              className="
                truncate
                text-xs
                font-medium
                text-foreground-soft
              "
            >
              {creator}
            </span>
          </div>

          {/* Price */}

          <div className="flex flex-col items-end">
            <span className="text-[11px] text-foreground-faint">Price</span>

            <span
              className="
                font-display
                text-lg
                font-bold
                text-primary
              "
            >
              ${price}
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}
