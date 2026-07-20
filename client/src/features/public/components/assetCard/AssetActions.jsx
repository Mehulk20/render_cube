import React from 'react';
import { Bookmark, ShoppingCart, Play } from 'lucide-react';

export default function AssetActions({ onBookmark, onPreview, onCart }) {
  return (
    <>
      {/* Bookmark */}

      <button
        type="button"
        aria-label="Bookmark Asset"
        onClick={onBookmark}
        className="
          glass
          focus-ring
          transition-interactive

          absolute
          top-3
          right-3
          z-20

          flex
          h-10
          w-10
          items-center
          justify-center

          rounded-full

          opacity-0
          translate-y-3
          scale-90

          delay-75

          group-hover:translate-y-0
          group-hover:scale-100
          group-hover:opacity-100

          hover:bg-primary/10
          hover:text-primary
        "
      >
        <Bookmark
          size={16}
          strokeWidth={2}
          className="
            transition-transform
            duration-300
            group-hover:rotate-6
          "
        />
      </button>

      {/* Preview */}

      <button
        type="button"
        aria-label="Preview Asset"
        onClick={onPreview}
        className="
          glass
          focus-ring
          transition-interactive

          absolute
          inset-0
          z-10

          m-auto

          flex
          h-16
          w-16
          items-center
          justify-center

          rounded-full

          border
          border-white/15

          opacity-0
          scale-90
          translate-y-4

          delay-150

          group-hover:translate-y-0
          group-hover:scale-100
          group-hover:opacity-100

          hover:scale-105
        "
      >
        <Play size={20} strokeWidth={2} className="ml-1 fill-current" />
      </button>

      {/* Cart */}

      <button
        type="button"
        aria-label="Add To Cart"
        onClick={onCart}
        className="
          glass
          focus-ring
          transition-interactive

          absolute
          bottom-3
          right-3
          z-20

          flex
          h-10
          w-10
          items-center
          justify-center

          rounded-full

          opacity-0
          translate-y-3
          scale-90

          delay-200

          group-hover:translate-y-0
          group-hover:scale-100
          group-hover:opacity-100

          hover:bg-primary
          hover:text-primary-foreground
        "
      >
        <ShoppingCart
          size={16}
          strokeWidth={2}
          className="
            transition-transform
            duration-300
            group-hover:scale-110
          "
        />
      </button>
    </>
  );
}
