import clsx from 'clsx';
import { BadgeCheck } from 'lucide-react';

const sizes = { sm: 'w-8 h-8', md: 'w-11 h-11', lg: 'w-20 h-20', xl: 'w-28 h-28' };

export default function Avatar({
  src,
  alt = '',
  size = 'md',
  verified = true,
  className,
  ring = true,
}) {
  return (
    <span className={clsx('relative inline-block shrink-0', sizes[size], className)}>
      <img
        src={src}
        alt={alt}
        className={clsx(
          'w-full h-full rounded-full object-cover bg-surface-raised',
          ring && 'ring-4 ring-void'
        )}
      />
      {verified && (
        <BadgeCheck
          className="absolute -bottom-0.5 -right-0.5 w-4 h-4 text-violet fill-violet stroke-void bg-void rounded-full"
          strokeWidth={2.5}
        />
      )}
    </span>
  );
}
