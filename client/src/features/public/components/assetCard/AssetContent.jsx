import React from 'react';
import { Star } from 'lucide-react';

export default function AssetContent({ title, creator, price, rating = 4.8, reviews = 124 }) {
  return (
    <div
      className="
        flex
        flex-1
        flex-col

        gap-4

        p-6
      "
    >
      {/* Title */}

      <div className="space-y-2">
        <h3
          className="
            line-clamp-2

            font-display

            text-[16px]
            font-semibold
            leading-6
            tracking-[-0.02em]

            text-foreground

            transition-colors
            duration-500
            ease-[cubic-bezier(.22,1,.36,1)]

            group-hover:text-primary
          "
        >
          {title}
        </h3>

        <div className="flex items-center gap-2">
          <Star
            size={13}
            className="
              fill-warning
              text-warning

              transition-transform
              duration-500

              group-hover:rotate-6
            "
          />

          <span
            className="
              text-xs
              font-medium
              text-foreground
            "
          >
            {rating}
          </span>

          <span
            className="
              text-xs
              text-foreground-muted
            "
          >
            ({reviews})
          </span>
        </div>
      </div>

      {/* Push footer */}

      <div className="flex-1" />

      {/* Footer */}

      <div
        className="
          flex
          items-center
          justify-between
          gap-4

          border-t
          border-border/40

          pt-4

          transition-colors
          duration-500

          group-hover:border-primary/20
        "
      >
        {/* Creator */}

        <div
          className="
            flex
            min-w-0
            items-center
            gap-3
          "
        >
          <div
            className="
              flex
              h-9
              w-9
              shrink-0
              items-center
              justify-center

              rounded-full

              bg-gradient-to-br
              from-primary
              to-brand-400

              text-xs
              font-bold
              text-primary-foreground

              shadow-floating

              transition-transform
              duration-500

              group-hover:scale-105
            "
          >
            {creator?.trim()?.[0]?.toUpperCase() ?? 'A'}
          </div>

          <div className="min-w-0">
            <p
              className="
                truncate

                text-sm
                font-medium

                text-foreground

                transition-colors
                duration-500

                group-hover:text-primary
              "
            >
              {creator}
            </p>

            <p
              className="
                text-xs

                text-foreground-muted
              "
            >
              Creator
            </p>
          </div>
        </div>

        {/* Price */}

        <div className="text-right">
          <p
            className="
              text-[11px]
              uppercase
              tracking-[0.12em]

              text-foreground-muted
            "
          >
            Price
          </p>

          <p
            className="
              font-display

              text-2xl
              font-bold

              tracking-[-0.03em]

              text-primary

              transition-all
              duration-500
              ease-[cubic-bezier(.22,1,.36,1)]

              group-hover:translate-x-0.5
            "
          >
            {new Intl.NumberFormat('en-US', {
              style: 'currency',
              currency: 'USD',
            }).format(Number(price))}
          </p>
        </div>
      </div>
    </div>
  );
}
