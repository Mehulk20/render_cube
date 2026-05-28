import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import CategoryCard from './CategoryCard';

const categories = [
  { icon: '⬛', name: 'Templates', count: '25,000+', bgColor: 'bg-indigo-50', darkBgColor: 'dark:bg-indigo-950', iconColor: 'text-indigo-500' },
  { icon: '▶', name: 'Video Assets', count: '120,000+', bgColor: 'bg-pink-50', darkBgColor: 'dark:bg-pink-950', iconColor: 'text-pink-500' },
  { icon: '🎵', name: 'Music & SFX', count: '80,000+', bgColor: 'bg-blue-50', darkBgColor: 'dark:bg-blue-950', iconColor: 'text-blue-500' },
  { icon: '◆', name: 'Graphics', count: '200,000+', bgColor: 'bg-purple-50', darkBgColor: 'dark:bg-purple-950', iconColor: 'text-purple-500' },
  { icon: '🎲', name: '3D Models', count: '45,000+', bgColor: 'bg-orange-50', darkBgColor: 'dark:bg-orange-950', iconColor: 'text-orange-500' },
  { icon: '📷', name: 'Photos', count: '150,000+', bgColor: 'bg-cyan-50', darkBgColor: 'dark:bg-cyan-950', iconColor: 'text-cyan-500' },
  { icon: 'A', name: 'Fonts', count: '35,000+', bgColor: 'bg-red-50', darkBgColor: 'dark:bg-red-950', iconColor: 'text-red-500' },
  { icon: '⌨', name: 'Code & UI', count: '65,000+', bgColor: 'bg-violet-50', darkBgColor: 'dark:bg-violet-950', iconColor: 'text-violet-500' },
];

/**
 * CategoriesSection — grid of browsable category tiles.
 * Dark mode aware.
 */
const CategoriesSection = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-display font-bold text-gray-900 dark:text-white" style={{ fontFamily: 'Syne' }}>
            Browse by Category
          </h2>
          <Link
            to="/marketplace"
            className="flex items-center gap-1.5 text-primary font-semibold text-sm hover:gap-2.5 transition-all"
          >
            View all <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-8 gap-4">
          {categories.map((cat) => (
            <CategoryCard key={cat.name} {...cat} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
