import { useEffect, useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import clsx from 'clsx';

import { useGetCurrentUserQuery } from '../../features/user/services';
import UserMenu from './UserMenu';

export default function ProfileMenu() {
  const { data: user, isLoading } = useGetCurrentUserQuery();

  const [open, setOpen] = useState(false);

  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!menuRef.current?.contains(e.target)) {
        setOpen(false);
      }
    };

    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  if (isLoading) {
    return <div className="h-10 w-10 animate-pulse rounded-full bg-surface" />;
  }

  return (
    <div ref={menuRef} className="relative">
      {/* Trigger */}
      <button
        ref={buttonRef}
        type="button"
        aria-label="Open profile menu"
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen((prev) => !prev)}
        className="
          flex items-center gap-2 rounded-xl p-1
          transition-colors duration-200
          hover:bg-surface-hover
          focus-ring
        "
      >
        <img
          src={user?.avatar || '/images/default-avatar.png'}
          alt={user?.name || 'User'}
          className="h-10 w-10 rounded-full object-cover ring-2 ring-background"
        />

        <ChevronDown
          size={18}
          className={clsx(
            'text-foreground-faint transition-transform duration-200',
            open && 'rotate-180'
          )}
        />
      </button>

      {/* Dropdown */}
      {open && (
        <div
          className="
            absolute right-0 top-full z-[var(--z-dropdown)]
            mt-3 origin-top-right animate-scale-in
          "
        >
          <UserMenu user={user} onClose={() => setOpen(false)} />
        </div>
      )}
    </div>
  );
}
