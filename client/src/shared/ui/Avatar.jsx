import clsx from 'clsx';
import { BadgeCheck } from 'lucide-react';

const sizes = {
  sm: 'h-8 w-8',
  md: 'h-11 w-11',
  lg: 'h-20 w-20',
  xl: 'h-28 w-28',
};

export default function Avatar({
  src,
  alt = '',
  size = 'md',
  verified = true,
  className,
  ring = true,
}) {
  return (
    <span className={clsx('relative inline-flex shrink-0', sizes[size], className)}>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className={clsx(
          `
            h-full
            w-full
            rounded-full
            object-cover

            bg-surface

            shadow-card

            transition-all
            duration-(--duration-normal)
            ease-(--ease-standard)
          `,
          ring && 'ring-2 ring-background'
        )}
      />

      {verified && (
        <BadgeCheck
          strokeWidth={2.2}
          className="
            absolute
            -right-0.5
            -bottom-0.5

            h-4
            w-4

            rounded-full

            bg-background

            fill-primary
            text-primary

            shadow-card
          "
        />
      )}
    </span>
  );
}
