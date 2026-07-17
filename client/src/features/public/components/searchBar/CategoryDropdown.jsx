import { ChevronDown } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

import { CATEGORIES } from './search.constants';

export default function CategoryDropdown({ value, onChange }) {
  const [showDropdown, setShowDropdown] = useState(false);

  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);

  return (
    <div ref={dropdownRef} className="relative shrink-0">
      <button
        type="button"
        onClick={() => setShowDropdown((prev) => !prev)}
        aria-haspopup="listbox"
        aria-expanded={showDropdown}
        className="
          flex
          items-center
          gap-2
          border-l
          border-border
          pl-4
          text-sm
          font-medium
          text-foreground-muted
          transition-colors
          duration-300
          hover:text-primary
        "
      >
        {value}

        <ChevronDown
          size={14}
          className={`transition-transform duration-300 ${showDropdown ? 'rotate-180' : ''}`}
        />
      </button>

      {showDropdown && (
        <div
          role="listbox"
          className="
            absolute
            top-full
            right-0
            z-50
            mt-2
            w-44
            overflow-hidden
            rounded-xl
            border
            border-border
            bg-modal
            shadow-card-hover
            animate-fade-in
          "
        >
          {CATEGORIES.map((category) => (
            <button
              key={category}
              type="button"
              role="option"
              aria-selected={value === category}
              onClick={() => {
                onChange(category);
                setShowDropdown(false);
              }}
              className={`block w-full px-4 py-2.5 text-left text-sm transition-colors duration-200 ${
                value === category
                  ? 'bg-violet/10 font-semibold text-primary'
                  : 'text-foreground hover:bg-surface-hover'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
