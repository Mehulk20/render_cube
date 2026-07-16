import { ChevronDown, Search } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CATEGORIES = [
  'All Categories',
  'Templates',
  'Video',
  'Music & SFX',
  'Graphics',
  '3D Models',
  'Photos',
  'Fonts',
  'Code & UI',
];

/**
 * SearchBar — global search with category filter.
 * On submit navigates to /marketplace with query params.
 * Dark mode aware.
 */
const SearchBar = ({ compact = false }) => {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All Categories');
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleOutSideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleOutSideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutSideClick);
    };
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/marketplace?q=${encodeURIComponent(query)}&cat=${encodeURIComponent(category)}`);
  };

  return (
    //
    <section
      className={`
      ${compact ? 'py-4' : 'py-8'}
      bg-background
      px-4
      sm:px-6
      lg:px-8
      transition-surface
    `}
    >
      <div className="mx-auto max-w-4xl">
        <form onSubmit={handleSearch}>
          <div
            className="
            group
            flex
            items-center
            gap-4

            rounded-2xl

            border-2
            border-border

            bg-surface

            px-5
            py-4

            shadow-card

            transition-all
            duration-300

            hover:border-primary
            hover:shadow-card-hover
          "
          >
            {/* Search Icon */}

            <Search
              size={18}
              className="
              shrink-0

              text-foreground-faint

              transition-colors
              duration-300

              group-hover:text-primary
            "
            />

            {/* Search Input */}

            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search templates, 3D models, music, photos and more..."
              className="
              flex-1

              bg-transparent

              text-sm

              text-foreground

              placeholder:text-foreground-faint

              outline-none
            "
            />

            {/* Category */}

            <div ref={dropdownRef} className="relative shrink-0">
              <button
                type="button"
                onClick={() => setShowDropdown(!showDropdown)}
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
                {category}

                <ChevronDown size={14} className="transition-transform duration-300" />
              </button>
              {showDropdown && (
                <div
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

                  bg-floating

                  shadow-card-hover

                  animate-fade-in
                "
                >
                  {CATEGORIES.map((cat) => (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => {
                        setCategory(cat);
                        setShowDropdown(false);
                      }}
                      className={`
                      block
                      w-full

                      px-4
                      py-2.5

                      text-left
                      text-sm

                      transition-colors
                      duration-200

                      ${
                        category === cat
                          ? `
                            bg-brand-100
                            text-primary
                            font-semibold
                          `
                          : `
                            text-foreground
                            hover:bg-surface-hover
                          `
                      }
                    `}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Submit */}

            <button
              type="submit"
              className="
              hidden
              sm:flex

              items-center
              gap-2

              rounded-xl

              bg-primary

              px-5
              py-2

              text-sm
              font-semibold
              text-white

              shadow-card

              transition-all
              duration-300

              hover:bg-primary-hover
              hover:shadow-glow
              hover:-translate-y-0.5

              active:translate-y-0
              active:scale-[0.98]
            "
            >
              Search
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default SearchBar;
