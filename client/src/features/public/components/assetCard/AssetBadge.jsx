import React from 'react';
import clsx from 'clsx';

const variants = {
  default: `
    bg-background/70
    text-foreground
    border-border
  `,

  new: `
    bg-brand-500
    text-white
    border-brand-500/20
  `,

  featured: `
    bg-warning
    text-black
    border-warning/30
  `,

  pro: `
    bg-brand-500
    text-white
    border-brand-500/30
  `,

  sale: `
    bg-danger
    text-white
    border-danger/30
  `,

  free: `
    bg-success
    text-white
    border-success/30
  `,

  hot: `
    bg-security
    text-white
    border-security/30
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
