import { ArrowRight, CheckCircle, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from './Button';

const topAssets = [
  { name: 'Neon Lights Overlay Pack', sub: 'Motion', amount: '$5,620' },
  { name: 'Futuristic HDR Elements', sub: 'Lighting', amount: '$4,220' },
  { name: 'Cinematic LUTs Pack', sub: 'Color', amount: '$3,190' },
  { name: 'Glitch Transition Pack', sub: 'Video', amount: '$2,940' },
];

/**
 * CreatorSection — split layout promoting creator accounts.
 * Shows a mock revenue dashboard preview.
 * Dark mode aware.
 */
const CreatorSection = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="bg-gradient-to-br from-gray-50 dark:from-gray-900 to-purple-50/30 dark:to-purple-950/30 border border-gray-100 dark:border-gray-800 rounded-3xl overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-0">

            {/* Left: Pitch content */}
            <div className="p-10 lg:p-14">
              <p className="text-primary text-xs font-bold uppercase tracking-widest mb-4">For Creators</p>
              <h2 className="text-4xl font-display font-bold leading-tight mb-5 text-gray-900 dark:text-white" style={{ fontFamily: 'Syne' }}>
                Turn Your Ideas Into{' '}
                <span className="text-gradient">Income</span>
              </h2>
              <p className="text-gray-500 dark:text-gray-400 text-base leading-relaxed mb-8 max-w-sm">
                Share your creativity with the world and earn from every sale. We handle the payments, you focus on creating.
              </p>

              <Link to="/signup">
                <Button variant="primary" size="lg" className="mb-8">
                  Start Selling Now <ArrowRight size={16} />
                </Button>
              </Link>

              <div className="space-y-3">
                {['Zero upfront fees', 'Fair marketplace fees', 'Global exposure'].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle size={18} className="text-primary flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300 text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Dashboard preview */}
            <div className="relative p-8 lg:p-10 flex items-center">
              <div className="w-full bg-white dark:bg-gray-900 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800 overflow-hidden">
                <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100 dark:border-gray-800">
                  <span className="text-sm font-semibold text-gray-900 dark:text-white">Overview</span>
                  <span className="text-xs text-gray-400 bg-gray-50 dark:bg-gray-800 px-2 py-1 rounded-lg">This month ↓</span>
                </div>

                <div className="p-5">
                  <div className="flex items-center justify-between mb-1">
                    <div>
                      <p className="text-xs text-gray-400 mb-1">Revenue</p>
                      <p className="text-3xl font-display font-bold text-gray-900 dark:text-white" style={{ fontFamily: 'Syne' }}>$24,790</p>
                    </div>
                    <span className="bg-green-50 dark:bg-green-950 text-green-600 text-xs font-semibold px-2.5 py-1 rounded-full flex items-center gap-1">
                      <TrendingUp size={11} /> +18.6%
                    </span>
                  </div>

                  {/* Mini bar chart */}
                  <div className="mt-4 mb-5 h-16 flex items-end gap-1">
                    {[30, 45, 35, 60, 50, 80, 65, 90, 75, 95, 80, 100].map((h, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-sm"
                        style={{
                          height: `${h}%`,
                          background: i === 11
                            ? 'linear-gradient(to top, #7C3AED, #A855F7)'
                            : 'linear-gradient(to top, #EDE9FE, #C4B5FD)',
                        }}
                      />
                    ))}
                  </div>

                  <p className="text-xs font-semibold text-gray-700 dark:text-gray-300 mb-3">Top Assets</p>
                  <div className="space-y-3">
                    {topAssets.map((asset) => (
                      <div key={asset.name} className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-indigo-500 flex-shrink-0"></div>
                        <div className="flex-1 min-w-0">
                          <p className="text-xs font-semibold text-gray-800 dark:text-gray-200 truncate">{asset.name}</p>
                          <p className="text-xs text-gray-400">{asset.sub}</p>
                        </div>
                        <span className="text-xs font-bold text-gray-700 dark:text-gray-300">{asset.amount}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mx-5 mb-5 bg-green-50 dark:bg-green-950 border border-green-100 dark:border-green-900 rounded-xl px-4 py-3 flex items-center justify-between">
                  <div>
                    <p className="text-xs text-gray-500">Payout</p>
                    <p className="text-lg font-bold text-gray-900 dark:text-white" style={{ fontFamily: 'Syne' }}>$850.00</p>
                  </div>
                  <span className="bg-green-500 text-white text-xs font-semibold px-3 py-1.5 rounded-full">✓ Completed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreatorSection;
