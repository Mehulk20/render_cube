import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

import CategoryCard from './CategoryCard';

const categories = [
  {
    icon: '⬛',
    name: 'Templates',
    count: '25,000+',
    variant: 'template',
  },
  {
    icon: '▶',
    name: 'Video Assets',
    count: '120,000+',
    variant: 'video',
  },
  {
    icon: '🎵',
    name: 'Music & SFX',
    count: '80,000+',
    variant: 'audio',
  },
  {
    icon: '◆',
    name: 'Graphics',
    count: '200,000+',
    variant: 'graphic',
  },
  {
    icon: '🎲',
    name: '3D Models',
    count: '45,000+',
    variant: 'model3d',
  },
  {
    icon: '📷',
    name: 'Photos',
    count: '150,000+',
    variant: 'photo',
  },
  {
    icon: 'A',
    name: 'Fonts',
    count: '35,000+',
    variant: 'font',
  },
  {
    icon: '⌨',
    name: 'Code & UI',
    count: '65,000+',
    variant: 'code',
  },
];

export default function CategoriesSection() {
  return (
    <section
      className="
        bg-category
        bg-category-noise
        py-20
        transition-surface
      "
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}

        <div className="mb-10 flex items-end justify-between">
          <div>
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">
              Categories
            </span>

            <h2
              className="
                mt-2
                font-display
                text-3xl
                font-bold
                text-foreground
                md:text-4xl
              "
            >
              Browse by Category
            </h2>

            <p className="mt-2 max-w-xl text-sm text-foreground-soft">
              Explore thousands of professionally crafted digital assets across every creative
              category.
            </p>
          </div>

          <Link
            to="/marketplace"
            aria-label="Browse all categories"
            className="
              group
              hidden
              items-center
              gap-2
              text-sm
              font-semibold
              text-link
              transition-text
              hover:text-link-hover
              md:flex
            "
          >
            View all
            <ArrowRight
              size={16}
              className="
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            />
          </Link>
        </div>

        {/* Categories */}

        <div
          className="
            grid
            grid-cols-2
            gap-5
            sm:grid-cols-4
            lg:grid-cols-8
          "
        >
          {categories.map((category) => (
            <CategoryCard key={category.name} {...category} />
          ))}
        </div>

        {/* Mobile CTA */}

        <div className="mt-8 flex justify-center md:hidden">
          <Link
            to="/marketplace"
            className="
              flex
              items-center
              gap-2
              text-sm
              font-semibold
              text-link
              transition-text
              hover:text-link-hover
            "
          >
            View all categories
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
