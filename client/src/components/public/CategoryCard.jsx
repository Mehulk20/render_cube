import { Link } from 'react-router-dom';

/**
 * CategoryCard — single category tile.
 * Links to marketplace filtered by category.
 * Dark mode aware via Tailwind dark: classes.
 */
const CategoryCard = ({ icon, name, count, bgColor = 'bg-purple-50', iconColor = 'text-primary', darkBgColor = 'dark:bg-purple-950' }) => {
  return (
    <Link
      to={`/marketplace?cat=${encodeURIComponent(name)}`}
      className="flex flex-col items-center gap-3 p-5 rounded-2xl border border-gray-100 dark:border-gray-800 hover:border-purple-200 dark:hover:border-purple-700 bg-white dark:bg-gray-900 cursor-pointer card-hover group transition-colors duration-300"
    >
      <div className={`w-14 h-14 ${bgColor} ${darkBgColor} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200`}>
        <span className={`text-2xl ${iconColor}`}>{icon}</span>
      </div>
      <div className="text-center">
        <p className="text-sm font-semibold text-gray-800 dark:text-gray-100">{name}</p>
        <p className="text-xs text-gray-400 dark:text-gray-500 mt-0.5">{count}</p>
      </div>
    </Link>
  );
};

export default CategoryCard;
