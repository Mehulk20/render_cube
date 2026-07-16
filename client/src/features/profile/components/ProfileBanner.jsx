import { Camera } from 'lucide-react';
import clsx from 'clsx';

export default function ProfileBanner({ src, editable = false, onEdit, className }) {
  return (
    <div
      className={clsx(
        'group relative h-52 overflow-hidden rounded-3xl bg-gradient-to-r from-violet/20 via-fuchsia/10 to-cyan/20',
        className
      )}
    >
      {src ? <img src={src} alt="Profile Banner" className="h-full w-full object-cover" /> : null}

      {editable && (
        <button
          onClick={onEdit}
          className="
            absolute right-4 top-4
            flex h-10 w-10 items-center justify-center
            rounded-xl
            bg-black/50
            text-white
            opacity-0
            backdrop-blur
            transition-all
            group-hover:opacity-100
          "
        >
          <Camera size={18} />
        </button>
      )}
    </div>
  );
}
