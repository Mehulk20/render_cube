import React from 'react';
import clsx from 'clsx';

const variants = {
  default: `
    bg-background/70
    text-foreground
    border-border
  `,

  new: `
    bg-primary
    text-primary-foreground
    border-primary/20
  `,

  featured: `
    bg-warning
    text-black
    border-warning/30
  `,

  pro: `
    bg-violet-500
    text-white
    border-violet-400/30
  `,

  sale: `
    bg-destructive
    text-white
    border-destructive/30
  `,

  free: `
    bg-success
    text-white
    border-success/30
  `,

  hot: `
    bg-orange-500
    text-white
    border-orange-400/30
  `,
};

export default function AssetBadge({ children, variant = 'default', className = '' }) {
  return (
    <span
      className={clsx(
        `
          glass

          absolute
          top-3
          left-3
          z-20

          inline-flex
          items-center
          gap-1

          rounded-full

          border

          px-3
          py-1.5

          text-[11px]
          font-semibold
          uppercase
          tracking-[0.08em]

          backdrop-blur-xl

          shadow-sm

          transition-all
          duration-500
          ease-[cubic-bezier(.22,1,.36,1)]

          group-hover:-translate-y-0.5
          group-hover:scale-[1.03]
        `,
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
