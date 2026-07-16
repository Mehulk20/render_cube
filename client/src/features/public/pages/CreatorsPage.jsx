import { ArrowRight, Package, Star, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../../public/components';

// Mock creator data
const CREATORS = [
  {
    id: 1,
    name: 'Luminous Visuals',
    avatar: '🎨',
    specialty: 'Video & Motion',
    assets: 124,
    sales: '12.4K',
    rating: 4.9,
    badge: 'Top Creator',
    color: 'from-violet-500 to-purple-600',
  },
  {
    id: 2,
    name: 'Polygon Flux',
    avatar: '🎲',
    specialty: '3D Models',
    assets: 87,
    sales: '8.2K',
    rating: 4.8,
    badge: 'Verified',
    color: 'from-blue-500 to-indigo-600',
  },
  {
    id: 3,
    name: 'UIHut',
    avatar: '💻',
    specialty: 'UI & Templates',
    assets: 210,
    sales: '22.1K',
    rating: 4.9,
    badge: 'Top Creator',
    color: 'from-emerald-500 to-teal-600',
  },
  {
    id: 4,
    name: 'Colorist Co.',
    avatar: '🎬',
    specialty: 'LUTs & Color',
    assets: 56,
    sales: '5.6K',
    rating: 4.7,
    badge: 'Rising',
    color: 'from-amber-500 to-orange-600',
  },
  {
    id: 5,
    name: 'Pixel Perfect',
    avatar: '🖼️',
    specialty: 'Graphics & Bg',
    assets: 189,
    sales: '18.3K',
    rating: 4.8,
    badge: 'Verified',
    color: 'from-pink-500 to-rose-600',
  },
  {
    id: 6,
    name: 'BeatForge',
    avatar: '🎵',
    specialty: 'Music & Audio',
    assets: 73,
    sales: '6.9K',
    rating: 4.6,
    badge: 'Rising',
    color: 'from-cyan-500 to-sky-600',
  },
  {
    id: 7,
    name: 'Type Foundry',
    avatar: '✍️',
    specialty: 'Fonts & Type',
    assets: 44,
    sales: '4.1K',
    rating: 4.7,
    badge: 'Verified',
    color: 'from-red-500 to-pink-600',
  },
  {
    id: 8,
    name: 'DevKit Studio',
    avatar: '⚙️',
    specialty: 'Code & UI Kits',
    assets: 32,
    sales: '9.8K',
    rating: 4.9,
    badge: 'Top Creator',
    color: 'from-purple-500 to-indigo-600',
  },
];

// Badge colors reuse the app's semantic status tokens instead of a
// separate raw-color + dark: map, so they stay correct in dark mode.
const BADGE_COLORS = {
  'Top Creator': 'bg-amber-soft text-amber',
  Verified: 'bg-info-soft text-info',
  Rising: 'bg-success-soft text-success',
};

/**
 * CreatorsPage — browse featured creators grid.
 * Also includes creator CTA to join and start selling.
 */
const CreatorsPage = () => {
  return (
    <div className="min-h-screen bg-background transition-surface page-transition">
      {/* Page hero */}
      <div className="pt-28 pb-16 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-violet/10 to-background border-b border-border-soft text-center">
        <div className="max-w-2xl mx-auto">
          <span className="inline-block bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-4">
            Our Creators
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Meet the <span className="text-gradient">Talent</span> Behind
            <br />
            Our Best Assets
          </h1>
          <p className="text-foreground-faint text-lg">
            Thousands of independent creators bringing you the best digital assets from around the
            world.
          </p>
        </div>
      </div>

      {/* Creators grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CREATORS.map((creator) => (
            <div
              key={creator.id}
              className="bg-card border border-border-soft rounded-3xl overflow-hidden hover-lift transition-surface cursor-pointer group"
            >
              {/* Banner */}
              <div className={`h-20 bg-linear-to-br ${creator.color} relative`}>
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-14 h-14 rounded-2xl bg-card border-4 border-card flex items-center justify-center text-2xl shadow-card">
                  {creator.avatar}
                </div>
              </div>

              <div className="pt-9 pb-5 px-5 text-center">
                {/* Badge */}
                <span
                  className={`inline-block text-xs font-semibold px-2.5 py-0.5 rounded-full mb-2 ${BADGE_COLORS[creator.badge]}`}
                >
                  {creator.badge}
                </span>

                <h3 className="font-display text-base font-bold text-foreground">{creator.name}</h3>
                <p className="text-xs text-foreground-faint mt-0.5">{creator.specialty}</p>

                {/* Stats row */}
                <div className="flex items-center justify-center gap-4 mt-4 pt-4 border-t border-border-soft">
                  <div className="text-center">
                    <p className="text-sm font-bold text-foreground">{creator.assets}</p>
                    <p className="text-xs text-foreground-faint">Assets</p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm font-bold text-foreground">{creator.sales}</p>
                    <p className="text-xs text-foreground-faint">Sales</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star size={11} className="text-amber fill-amber" />
                    <p className="text-sm font-bold text-foreground">{creator.rating}</p>
                  </div>
                </div>

                {/* View profile button */}
                <button className="mt-4 w-full py-2 rounded-xl bg-surface-raised text-primary text-sm font-semibold hover:bg-violet/10 transition-colors">
                  View Profile
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Creator CTA */}
      <div className="bg-surface-raised border-t border-border-soft py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <TrendingUp size={40} className="text-primary mx-auto mb-4" />
          <h2 className="font-display text-3xl font-bold text-foreground mb-3">
            Start Selling Your Assets Today
          </h2>
          <p className="text-foreground-faint mb-8 text-base">
            Join our growing community of creators. Set your own prices, keep up to 80% revenue, and
            reach customers globally.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link to="/signup">
              <Button variant="primary" size="lg">
                Become a Creator <ArrowRight size={16} />
              </Button>
            </Link>
            <Link
              to="/marketplace"
              className="text-foreground-muted font-semibold hover:text-primary transition-colors"
            >
              Browse Assets
            </Link>
          </div>

          {/* Quick stats */}
          <div className="mt-12 grid grid-cols-3 gap-8 max-w-xl mx-auto">
            {[
              { icon: Package, value: '2M+', label: 'Assets Listed' },
              { icon: TrendingUp, value: '$4.2M', label: 'Paid to Creators' },
              { icon: Star, value: '150K+', label: 'Happy Customers' },
            ].map(({ icon: Icon, value, label }) => (
              <div key={label} className="text-center">
                <Icon className="w-5 h-5 text-primary mx-auto mb-1" />
                <p className="font-display text-xl font-bold text-foreground">{value}</p>
                <p className="text-xs text-foreground-faint">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatorsPage;
