import { Camera } from 'lucide-react';
import clsx from 'clsx';

export default function ProfileAvatar({ src, alt, size = 'xl', editable = false, onEdit }) {
  const sizes = {
    sm: 'h-12 w-12',
    md: 'h-16 w-16',
    lg: 'h-24 w-24',
    xl: 'h-32 w-32',
    '2xl': 'h-40 w-40',
  };

  return (
    <div className="group relative inline-block">
      <img
        src={src || '/images/default-avatar.png'}
        alt={alt}
        className={clsx(sizes[size], 'rounded-full object-cover ring-4 ring-background shadow-lg')}
      />

      {editable && (
        <button
          onClick={onEdit}
          className="
            absolute bottom-2 right-2
            flex h-9 w-9 items-center justify-center
            rounded-full
            bg-primary
            text-white
            shadow-lg
            opacity-0
            transition
            group-hover:opacity-100
          "
        >
          <Camera size={15} />
        </button>
      )}
    </div>
  );
}
