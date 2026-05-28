import { Globe, Package, Users, Zap } from 'lucide-react';

const stats = [
  { icon: Package, value: '2M+', label: 'Premium Assets' },
  { icon: Users, value: '150K+', label: 'Happy Creators' },
  { icon: Zap, value: '500K+', label: 'Projects Powered' },
  { icon: Globe, value: '120+', label: 'Countries' },
];

/**
 * StatsBar — displays platform statistics in a horizontal grid.
 * Dark mode aware.
 */
const StatsBar = () => {
  return (
    <section className="py-6 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-950 transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl p-6 shadow-sm">
          {stats.map(({ icon: Icon, value, label }) => (
            <div key={label} className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-purple-50 dark:bg-purple-950 flex items-center justify-center flex-shrink-0">
                <Icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-xl font-display font-bold text-gray-900 dark:text-white" style={{ fontFamily: 'Syne' }}>
                  {value}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">{label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsBar;
