// import { Bookmark, ShoppingCart, Star } from 'lucide-react';
// import { useNavigate } from 'react-router-dom';

// import { useAppDispatch } from '../../../store';
// import { addItemToCart } from '../../cart/services';

// export default function AssetCard({
//   id,
//   title,
//   creator,
//   price,
//   gradient,
//   badge,
//   rating = 4.8,
//   reviews = 124,
// }) {
//   const navigate = useNavigate();
//   const dispatch = useAppDispatch();

//   const handleAddToCart = (e) => {
//     e.stopPropagation();

//     dispatch(
//       addItemToCart({
//         id,
//         title,
//         creator,
//         price: Number(price),
//         gradient,
//       })
//     );
//   };

//   const navigateToAsset = () => {
//     const path = `/asset/${id || 1}`;

//     if (document.startViewTransition) {
//       document.startViewTransition(() => navigate(path));
//       return;
//     }

//     navigate(path);
//   };

//   return (
//     <article
//       onClick={navigateToAsset}
//       className="
//     asset-card
//     card
//     motion-card
//     group
//     relative
//     flex
//     h-full
//     w-full
//     cursor-pointer
//     flex-col
//     overflow-hidden
//     rounded-(--radius-card)
//   "
//     >
//       {/* Thumbnail */}

//       <div className={`relative h-52 overflow-hidden ${gradient}`}>
//         {badge && (
//           <span
//             className="
//               glass
//               absolute
//               left-3
//               top-3
//               rounded-full
//               px-2.5
//               py-1
//               text-xs
//               font-semibold
//               text-white
//             "
//           >
//             {badge}
//           </span>
//         )}

//         {/* Bookmark */}

//         <button
//           aria-label="Bookmark"
//           onClick={(e) => e.stopPropagation()}
//           className="
//             glass
//             focus-ring
//             transition-interactive
//             absolute
//             right-3
//             top-3
//             flex
//             h-9
//             w-9
//             items-center
//             justify-center
//             rounded-full
//             opacity-0
//             group-hover:opacity-100
//           "
//         >
//           <Bookmark size={16} className="text-foreground-muted" />
//         </button>

//         {/* Preview Overlay */}

//         <div
//           className="
//             absolute
//             inset-0
//             flex
//             items-center
//             justify-center
//             bg-black/25
//             opacity-0
//             transition-opacity
//             duration-300
//             group-hover:opacity-100
//           "
//         >
//           <div
//             className="
//               glass
//               flex
//               h-12
//               w-12
//               items-center
//               justify-center
//               rounded-full
//               shadow-floating
//             "
//           >
//             <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
//               <polygon points="6,4 12,8 6,12" fill="currentColor" className="text-primary" />
//             </svg>
//           </div>
//         </div>

//         {/* Cart */}

//         <button
//           onClick={handleAddToCart}
//           aria-label="Add to cart"
//           className="
//             glass
//             focus-ring
//             transition-interactive
//             absolute
//             bottom-3
//             right-3
//             flex
//             h-9
//             w-9
//             items-center
//             justify-center
//             rounded-full
//             opacity-0
//             group-hover:opacity-100
//           "
//         >
//           <ShoppingCart size={16} className="text-foreground-muted" />
//         </button>
//       </div>
//       <div className="flex flex-1 flex-col p-6">
//         {/* Title */}

//         <h3
//           className="
//             min-h-12
//             text-sm
//             font-semibold
//             leading-6
//             text-foreground
//             line-clamp-2
//             transition-text
//             group-hover:text-primary
//           "
//         >
//           {title}
//         </h3>

//         {/* Rating */}

//         <div className="mt-2 flex items-center gap-1.5">
//           <Star size={13} className="fill-warning text-warning" />

//           <span className="text-xs text-foreground-soft">{rating}</span>

//           <span className="text-xs text-foreground-faint">({reviews})</span>
//         </div>

//         {/* Footer */}

//         <div className="mt-auto flex items-center justify-between pt-5">
//           {/* Creator */}

//           <div className="flex min-w-0 items-center gap-2">
//             <div
//               className="
//                 flex
//                 h-6
//                 w-6
//                 shrink-0
//                 items-center
//                 justify-center
//                 rounded-full
//                 bg-linear-to-br
//                 from-brand-500
//                 to-brand-400
//                 text-[10px]
//                 font-bold
//                 text-white
//               "
//             >
//               {creator?.charAt(0).toUpperCase()}
//             </div>

//             <span
//               className="
//                 truncate
//                 text-xs
//                 font-medium
//                 text-foreground-soft
//               "
//             >
//               {creator}
//             </span>
//           </div>

//           {/* Price */}

//           <div className="flex flex-col items-end">
//             <span className="text-[11px] text-foreground-faint">Price</span>

//             <span
//               className="
//                 font-display
//                 text-lg
//                 font-bold
//                 text-primary
//               "
//             >
//               ${price}
//             </span>
//           </div>
//         </div>
//       </div>
//     </article>
//   );
// }

import { Bookmark, ShoppingCart, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

import { useAppDispatch } from '../../../store';
import { addItemToCart } from '../../cart/services';

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
        asset-card
        card
        motion-card

        group
        relative

        flex
        h-full
        w-full
        cursor-pointer
        flex-col

        overflow-hidden

        rounded-[var(--radius-card)]

        animate-card
      "
    >
      {/* Ambient Glow */}

      <div
        className="
          pointer-events-none

          absolute
          inset-0

          opacity-0

          transition-opacity
          duration-500

          group-hover:opacity-100
        "
      >
        <div
          className="
            absolute
            left-1/2
            top-0

            h-72
            w-72

            -translate-x-1/2

            rounded-full

            bg-primary/8

            blur-3xl
          "
        />
      </div>

      {/* ========================================= */}
      {/* Thumbnail */}
      {/* ========================================= */}

      <div
        className={`
          relative
          h-56
          overflow-hidden

          ${gradient}
        `}
      >
        {/* Hover Zoom Layer */}

        <div
          className="
            absolute
            inset-0

            transition-transform
            duration-700
            ease-[cubic-bezier(.22,1,.36,1)]

            group-hover:scale-105
          "
        />

        {/* Gradient Overlay */}

        <div
          className="
            absolute
            inset-0

            bg-gradient-to-t

            from-black/45
            via-black/10
            to-transparent

            opacity-70

            transition-opacity
            duration-500

            group-hover:opacity-90
          "
        />

        {/* Badge */}

        {badge && (
          <span
            className="
              glass

              absolute
              left-3
              top-3

              rounded-full

              px-3
              py-1

              text-xs
              font-semibold

              text-white
            "
          >
            {badge}
          </span>
        )}
        {/* ========================================= */}
        {/* Bookmark */}
        {/* ========================================= */}

        <button
          aria-label="Bookmark"
          onClick={(e) => e.stopPropagation()}
          className="
            glass
            focus-ring
            transition-interactive

            absolute
            top-3
            right-3

            flex
            h-10
            w-10
            items-center
            justify-center

            rounded-full

            opacity-0
            translate-y-2
            scale-95

            group-hover:translate-y-0
            group-hover:scale-100
            group-hover:opacity-100
          "
        >
          <Bookmark
            size={16}
            className="
              text-foreground-muted
              transition-text
              group-hover:text-primary
            "
          />
        </button>

        {/* ========================================= */}
        {/* Preview Overlay */}
        {/* ========================================= */}

        <div
          className="
            absolute
            inset-0

            flex
            items-center
            justify-center

            bg-gradient-to-t
            from-black/45
            via-black/10
            to-transparent

            opacity-0

            transition-opacity
            duration-500

            group-hover:opacity-100
          "
        >
          <div
            className="
              glass
              transition-interactive

              flex
              h-14
              w-14
              items-center
              justify-center

              rounded-full

              border
              border-white/15

              shadow-floating

              group-hover:scale-105
            "
          >
            <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
              <polygon points="6,4 12,8 6,12" fill="currentColor" className="text-primary" />
            </svg>
          </div>
        </div>

        {/* ========================================= */}
        {/* Add To Cart */}
        {/* ========================================= */}

        <button
          onClick={handleAddToCart}
          aria-label="Add to cart"
          className="
            glass
            focus-ring
            transition-interactive

            absolute
            right-3
            bottom-3

            flex
            h-10
            w-10
            items-center
            justify-center

            rounded-full

            opacity-0
            translate-y-2
            scale-95

            group-hover:translate-y-0
            group-hover:scale-100
            group-hover:opacity-100
          "
        >
          <ShoppingCart
            size={16}
            className="
              text-foreground-muted
              transition-text
              group-hover:text-primary
            "
          />
        </button>
      </div>

      {/* ========================================= */}
      {/* Content */}
      {/* ========================================= */}

      <div
        className="
          flex
          flex-1
          flex-col
          gap-3
          p-6
        "
      >
        {/* ========================================= */}
        {/* Title */}
        {/* ========================================= */}

        <h3
          className="
            min-h-12

            line-clamp-2

            font-display
            text-[15px]
            font-semibold
            leading-6
            tracking-[-0.015em]

            text-foreground

            transition-text

            group-hover:text-primary
          "
        >
          {title}
        </h3>

        {/* ========================================= */}
        {/* Rating */}
        {/* ========================================= */}

        <div className="flex items-center gap-1.5">
          <Star
            size={13}
            className="
              fill-warning
              text-warning

              transition-transform

              group-hover:rotate-6
            "
          />

          <span
            className="
              text-xs
              font-medium
              text-foreground-soft
            "
          >
            {rating}
          </span>

          <span
            className="
              text-xs
              text-foreground-faint
            "
          >
            ({reviews})
          </span>
        </div>

        {/* Spacer */}

        <div className="flex-1" />

        {/* ========================================= */}
        {/* Footer */}
        {/* ========================================= */}

        <div className="flex items-center justify-between">
          {/* Creator */}

          <div className="flex min-w-0 items-center gap-2.5">
            <div
              className="
                flex
                h-8
                w-8
                shrink-0
                items-center
                justify-center

                rounded-full

                text-[11px]
                font-bold
                text-white

                shadow-sm
              "
              style={{
                background: 'linear-gradient(135deg,var(--color-primary),var(--color-brand-400))',
              }}
            >
              {creator?.charAt(0).toUpperCase()}
            </div>

            <div className="min-w-0">
              <p
                className="
                  truncate

                  text-xs

                  font-medium

                  text-foreground-soft

                  transition-text

                  group-hover:text-foreground
                "
              >
                {creator}
              </p>
            </div>
          </div>

          {/* Price */}

          <div className="flex flex-col items-end">
            <span
              className="
                text-[11px]
                uppercase
                tracking-wide

                text-foreground-faint
              "
            >
              Price
            </span>

            <span
              className="
                font-display

                text-xl
                font-bold

                tracking-tight

                text-primary

                transition-text
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
