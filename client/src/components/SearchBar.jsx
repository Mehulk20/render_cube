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
    const handleOutSideClick = event => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleOutSideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutSideClick);
    };
  }, []);

  const handleSearch = e => {
    e.preventDefault();
    navigate(`/marketplace?q=${encodeURIComponent(query)}&cat=${encodeURIComponent(category)}`);
  };

  return (
    <section
      className={`${compact ? 'py-4' : 'py-8'} px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-950 transition-colors duration-300`}
    >
      <div className="max-w-4xl mx-auto">
        <form onSubmit={handleSearch}>
          <div className="flex items-center border-2 border-gray-200 dark:border-gray-700 hover:border-primary dark:hover:border-primary rounded-2xl px-5 py-4 gap-4 transition-colors group shadow-sm hover:shadow-md dark:bg-gray-900 bg-white">
            <Search
              size={18}
              className="text-gray-400 group-hover:text-primary transition-colors shrink-0"
            />
            <input
              type="text"
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder="Search templates, 3D models, music, photos and more..."
              className="flex-1 bg-transparent text-gray-700 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500 text-sm outline-none"
            />

            {/* Category dropdown */}
            <div ref={dropdownRef} className="relative shrink-0">
              <button
                type="button"
                onClick={() => setShowDropdown(!showDropdown)}
                className="flex items-center gap-2 border-l border-gray-200 dark:border-gray-700 pl-4 text-gray-600 dark:text-gray-300 text-sm font-medium cursor-pointer hover:text-primary transition-colors"
              >
                {category} <ChevronDown size={14} />
              </button>
              {showDropdown && (
                <div className="absolute top-full right-0 mt-2 w-44 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-700 rounded-xl shadow-xl z-50 overflow-hidden animate-fade-in">
                  {CATEGORIES.map(cat => (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => {
                        setCategory(cat);
                        setShowDropdown(false);
                      }}
                      className={`block w-full text-left px-4 py-2.5 text-sm transition-colors ${
                        category === cat
                          ? 'bg-purple-50 dark:bg-purple-950 text-primary font-semibold'
                          : 'text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Submit button visible on larger screens */}
            <button
              type="submit"
              className="hidden sm:flex items-center gap-2 bg-primary text-white text-sm font-semibold px-5 py-2 rounded-xl hover:bg-primary-dark transition-colors"
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
