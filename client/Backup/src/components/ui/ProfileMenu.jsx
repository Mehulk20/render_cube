import { useEffect, useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import UserMenu from './UserMenu';

const user = {
  name: 'John Doe',
  avatar: 'https://i.pravatar.cc/150?img=8',
};

export default function ProfileMenu({ role, isCreatorDashboard, setIsCreatorDashboard }) {
  const [open, setOpen] = useState(false);

  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!menuRef.current?.contains(e.target)) {
        setOpen(false);
      }
    };

    const handleEscape = (e) => {
      if (e.key === 'Escape') setOpen(false);
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  return (
    <div ref={menuRef} className="relative">
      {/* Trigger */}

      <button
        onClick={() => setOpen((prev) => !prev)}
        className="
          flex
          items-center
          gap-2
          rounded-xl
          p-1
          transition
          hover:bg-zinc-100
          dark:hover:bg-zinc-800
        "
      >
        <img src={user.avatar} alt={user.name} className="h-10 w-10 rounded-full object-cover" />

        <ChevronDown
          size={18}
          className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>

      {/* Dropdown */}

      {open && (
        <div
          className="
            absolute
            right-0
            top-full
            mt-3
            z-999
            origin-top-right
            animate-in
            fade-in
            zoom-in-95
            duration-200
          "
        >
          <UserMenu
            role={role}
            setIsCreatorDashboard={setIsCreatorDashboard}
            isCreatorDashboard={isCreatorDashboard}
          />
        </div>
      )}
    </div>
  );
}
