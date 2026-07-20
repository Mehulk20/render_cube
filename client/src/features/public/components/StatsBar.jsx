import { Globe, Package, Users, Zap } from 'lucide-react';

import { Section, Container } from '../../../shared/ui';

const stats = [
  { icon: Package, value: '2M+', label: 'Premium Assets' },
  { icon: Users, value: '150K+', label: 'Happy Creators' },
  { icon: Zap, value: '500K+', label: 'Projects Powered' },
  { icon: Globe, value: '120+', label: 'Countries' },
];

/**
 * StatsBar — compact platform stats strip, typically used just under
 * the hero. Colors come entirely from the design system tokens, so it
 * re-themes automatically in dark mode without any `dark:` classes.
 */
export default function StatsBar() {
  return (
    <Section className="py-8">
      <Container size="md">
        <div className="max-w-7xl mx-auto grid grid-cols-2 gap-4 rounded-2xl border border-border bg-card p-6 shadow-card sm:grid-cols-4">
          {stats.map(({ icon: Icon, value, label }) => (
            <div key={label} className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-violet/10">
                <Icon size={20} className="text-violet" />
              </div>

              <div className="min-w-0">
                <p className="font-display text-xl font-bold text-foreground">{value}</p>
                <p className="truncate text-xs text-foreground-faint">{label}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
