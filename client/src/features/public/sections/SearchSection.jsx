import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { CategoryDropdown, SearchInput } from '../components/searchBar';

export default function SearchSection({ compact = false }) {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All Categories');

  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();

    navigate(`/marketplace?q=${encodeURIComponent(query)}&cat=${encodeURIComponent(category)}`);
  };

  const sectionPadding = compact ? 'py-4' : 'py-6';

  return (
    <section className={`${sectionPadding} bg-background px-4 transition-surface sm:px-6 lg:px-8`}>
      <div className="mx-auto max-w-4xl">
        <form onSubmit={handleSearch}>
          <div
            className="
    group
    flex
    items-center
    gap-4

    rounded-2xl
    border border-border/50

    bg-background/80
    backdrop-blur-2xl

    px-6
    py-4

    transition-all
    duration-500
    ease-[cubic-bezier(.22,1,.36,1)]

    shadow-card

    hover:-translate-y-0.5
    hover:border-primary/20
    hover:shadow-card-hover

    focus-within:-translate-y-1
    focus-within:border-primary/25
    focus-within:shadow-card-hover
  "
          >
            <SearchInput value={query} onChange={setQuery} />

            <CategoryDropdown value={category} onChange={setCategory} />

            <button
              type="submit"
              className="
                hidden
                shrink-0
                items-center
                justify-center
                rounded-xl
                bg-primary
                px-5
                py-2.5
                text-sm
                font-semibold
                text-white
                shadow-card
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:bg-primary-hover
                hover:shadow-glow
                active:translate-y-0
                active:scale-[0.98]
                sm:flex
              "
            >
              Search
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
