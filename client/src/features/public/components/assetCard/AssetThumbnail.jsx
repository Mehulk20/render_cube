import React from 'react';

import AssetActions from './AssetActions';
import AssetBadge from './AssetBadge';

export default function AssetThumbnail({ gradient, badge, onBookmark, onPreview, onCart }) {
  return (
    <div
      className={`
        relative
        h-56
        overflow-hidden

        ${gradient}
      `}
    >
      {/* Background Zoom Layer */}

      <div
        className="
          absolute
          inset-0

          transition-transform
          duration-700
          ease-[cubic-bezier(.22,1,.36,1)]

          will-change-transform

          group-hover:scale-[1.08]
        "
      />

      {/* Ambient Gradient */}

      <div
        className="
          absolute
          inset-0

          bg-gradient-to-t

          from-black/55
          via-black/10
          to-transparent

          opacity-60

          transition-all
          duration-700
          ease-[cubic-bezier(.22,1,.36,1)]

          group-hover:opacity-85
        "
      />

      {/* Top Glow */}

      <div
        className="
          pointer-events-none

          absolute
          inset-0

          opacity-0

          transition-opacity
          duration-700
          ease-[cubic-bezier(.22,1,.36,1)]

          group-hover:opacity-100
        "
      >
        <div
          className="
            absolute
            left-1/2
            top-0

            h-40
            w-40

            -translate-x-1/2

            rounded-full

            bg-brand-500/15

            blur-3xl
          "
        />
      </div>

      {/* Noise */}

      <div
        className="
          surface-noise

          absolute
          inset-0

          opacity-30

          transition-opacity
          duration-700

          group-hover:opacity-50
        "
      />

      {/* Badge */}

      {badge && <AssetBadge>{badge}</AssetBadge>}

      {/* Floating Actions */}

      <AssetActions onBookmark={onBookmark} onPreview={onPreview} onCart={onCart} />

      {/* Bottom Fade */}

      <div
        className="
          pointer-events-none

          absolute
          inset-x-0
          bottom-0

          h-24

          bg-gradient-to-t
          from-background/35
          to-transparent
        "
      />
    </div>
  );
}
