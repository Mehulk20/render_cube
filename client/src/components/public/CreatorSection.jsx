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
    <section className="bg-background px-4 py-16 transition-colors duration-300 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="overflow-hidden rounded-3xl border border-border bg-linear-to-br from-surface-raised via-surface to-brand-50/30 shadow-card">
          <div className="grid gap-0 lg:grid-cols-2">
            {/* Left */}

            <div className="p-10 lg:p-14">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-brand-500">
                For Creators
              </p>

              <h2 className="mb-5 font-display text-4xl font-bold leading-tight text-foreground">
                Turn Your Ideas Into <span className="text-gradient">Income</span>
              </h2>

              <p className="mb-8 max-w-sm text-base leading-relaxed text-foreground-muted">
                Share your creativity with the world and earn from every sale. We handle the
                payments while you focus on creating.
              </p>

              <Link to="/signup">
                <Button variant="primary" size="lg" className="group mb-8">
                  Start Selling Now
                  <ArrowRight
                    size={16}
                    className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Button>
              </Link>

              <div className="space-y-4">
                {['Zero upfront fees', 'Fair marketplace fees', 'Global exposure'].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle size={18} className="shrink-0 text-brand-500" />

                    <span className="text-sm font-medium text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            {/* Right: Dashboard Preview */}

            <div className="relative flex items-center p-8 lg:p-10">
              <div className="w-full overflow-hidden rounded-2xl border border-border bg-surface shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
                {/* Header */}

                <div className="flex items-center justify-between border-b border-border px-5 py-4">
                  <span className="text-sm font-semibold text-foreground">Overview</span>

                  <span className="rounded-lg bg-surface-hover px-2 py-1 text-xs text-foreground-faint">
                    This Month ↓
                  </span>
                </div>

                {/* Body */}

                <div className="p-5">
                  {/* Revenue */}

                  <div className="mb-1 flex items-center justify-between">
                    <div>
                      <p className="mb-1 text-xs text-foreground-faint">Revenue</p>

                      <p className="font-display text-3xl font-bold text-foreground">$24,790</p>
                    </div>

                    <span className="flex items-center gap-1 rounded-full border border-green-500/20 bg-green-500/10 px-3 py-1 text-xs font-semibold text-green-500">
                      <TrendingUp size={11} />
                      +18.6%
                    </span>
                  </div>

                  {/* Chart */}

                  <div className="mt-4 mb-6 flex h-16 items-end gap-1">
                    {[30, 45, 35, 60, 50, 80, 65, 90, 75, 95, 80, 100].map((h, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-sm transition-opacity duration-300 hover:opacity-90"
                        style={{
                          height: `${h}%`,
                          background:
                            i === 11
                              ? 'linear-gradient(to top,var(--color-brand-600),var(--color-brand-400))'
                              : 'linear-gradient(to top,var(--color-brand-100),var(--color-brand-300))',
                        }}
                      />
                    ))}
                  </div>

                  {/* Assets */}

                  <p className="mb-3 text-xs font-semibold text-foreground">Top Assets</p>

                  <div className="space-y-2">
                    {topAssets.map((asset) => (
                      <div
                        key={asset.name}
                        className="flex items-center gap-3 rounded-xl p-2 transition-colors duration-200 hover:bg-surface-hover"
                      >
                        <div className="h-8 w-8 shrink-0 rounded-lg bg-linear-to-br from-brand-500 to-fuchsia" />

                        <div className="min-w-0 flex-1">
                          <p className="truncate text-xs font-semibold text-foreground">
                            {asset.name}
                          </p>

                          <p className="text-xs text-foreground-faint">{asset.sub}</p>
                        </div>

                        <span className="text-xs font-bold text-foreground">{asset.amount}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer */}

                <div className="mx-5 mb-5 flex items-center justify-between rounded-xl border border-green-500/20 bg-green-500/10 px-4 py-3">
                  <div>
                    <p className="text-xs text-foreground-muted">Payout</p>

                    <p className="font-display text-lg font-bold text-foreground">$850.00</p>
                  </div>

                  <span className="rounded-full bg-green-500 px-3 py-1.5 text-xs font-semibold text-white shadow-sm">
                    ✓ Completed
                  </span>
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
