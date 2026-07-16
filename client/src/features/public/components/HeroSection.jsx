import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from './Button';
import AuroraBackground from '../../../UI/AuroraBackground';
import { Section, Container } from '../../../shared/ui';

/**
 * HeroSection — landing page hero with animated floating cards.
 * The h1 uses fluid clamp-based sizing + tight leading so it fills the
 * column at every viewport width without wrapping awkwardly.
 */
const HeroSection = () => {
  return (
    <Section className="relative min-h-screen overflow-hidden bg-background bg-grid pt-4">
      {/* Background */}
      <AuroraBackground />

      <div className="animate-float pointer-events-none absolute top-20 right-0 h-150 w-150 translate-x-1/4 translate-y-1/4 rounded-full bg-brand-300/30 blur-3xl" />

      <div className="animate-float-delayed pointer-events-none absolute bottom-0 left-0 h-100 w-100 translate-x-1/4 translate-y-1/4 rounded-full bg-fuchsia/15 blur-3xl" />

      <Container className="relative flex min-h-[calc(100vh-64px)] items-center py-16">
        <div className="grid w-full items-center gap-10 lg:grid-cols-2 xl:gap-16">
          {/* Left */}
          <div className="animate-fade-up space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-100 px-4 py-2 text-xs font-semibold tracking-wider text-primary uppercase">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
              The Ultimate Digital Asset Marketplace
            </div>

            {/* Heading */}
            <h1
              className="font-display font-extrabold tracking-tight text-foreground"
              style={{ fontSize: 'clamp(2.4rem,5.5vw,4.75rem)', lineHeight: 1.08 }}
            >
              Create. Share.
              <br />
              Sell.
              <span className="text-gradient"> Inspire.</span>
            </h1>

            {/* Description */}
            <p className="max-w-md text-base leading-relaxed text-foreground-muted sm:text-lg">
              Join thousands of creators and businesses sharing premium digital assets at fair
              prices. Buy what you need. Create what you love.
            </p>

            {/* CTA */}
            <div className="flex flex-wrap gap-4">
              <Link to="/marketplace">
                <Button variant="primary" size="lg" className="group">
                  Explore Assets
                  <ArrowRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Button>
              </Link>

              <Link to="/signup">
                <Button variant="outline" size="lg">
                  Become a Creator
                </Button>
              </Link>
            </div>

            {/* Trust */}
            <div className="space-y-3 pt-2">
              <p className="text-sm font-medium text-foreground-faint">
                Trusted by <strong className="text-foreground">150K+</strong> creators and companies
              </p>

              <div className="flex flex-wrap items-center gap-5 opacity-70">
                <svg height="16" viewBox="0 0 80 16" fill="none">
                  <rect width="7" height="7" fill="#F25022" />
                  <rect x="8" width="7" height="7" fill="#7FBA00" />
                  <rect y="8" width="7" height="7" fill="#00A4EF" />
                  <rect x="8" y="8" width="7" height="7" fill="#FFB900" />
                  <text
                    x="20"
                    y="12"
                    fontFamily="Syne"
                    fontSize="11"
                    fontWeight="600"
                    fill="currentColor"
                  >
                    Microsoft
                  </text>
                </svg>

                <span className="text-sm font-bold text-foreground-soft italic">Adobe</span>
                <span className="text-sm font-bold text-foreground-soft">Envato</span>
                <span className="font-display text-sm font-bold text-foreground-soft">Canva</span>
                <span className="text-sm font-semibold text-foreground-soft">Webflow</span>
              </div>
            </div>
          </div>

          {/* Right: hero visual */}
          <div className="relative hidden h-[480px] lg:block">
            {/* Main preview card */}
            <div className="animate-pulse-glow absolute top-1/2 left-1/2 z-10 h-[272px] w-56 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-3xl shadow-floating shadow-glow">
              <div className="relative flex h-full w-full items-center justify-center bg-linear-to-br from-indigo-900 via-brand-700 to-brand-600">
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />

                {/* Play */}
                <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-md">
                  <svg width="32" height="32" viewBox="0 0 36 36" fill="none">
                    <polygon points="14,11 27,18 14,25" fill="white" />
                  </svg>
                </div>

                {/* Audio footer */}
                <div className="absolute right-3 bottom-4 left-3">
                  <div className="glass flex items-center gap-2 rounded-xl p-2.5">
                    <div className="flex h-5 items-end gap-0.5">
                      {[3, 5, 4, 7, 5, 6, 3, 8, 6, 5, 4, 7, 5].map((height, index) => (
                        <div
                          key={index}
                          className="w-1 rounded-sm bg-brand-300"
                          style={{ height: `${height * 2}px`, opacity: 0.65 + (index % 3) * 0.12 }}
                        />
                      ))}
                    </div>

                    <span className="ml-auto font-mono text-xs text-white">00:45</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating app badges */}
            {[
              { top: '10%', right: '8%', label: 'Ae', color: '#9999FF', delay: '0s' },
              { top: '30%', right: '2%', label: 'Xd', color: '#31A8FF', delay: '1s' },
              { top: '36%', left: '12%', label: 'Pr', color: '#EA77FF', delay: '2s' },
              { bottom: '25%', left: '5%', label: '4D', color: '#3DDC84', delay: '.5s' },
            ].map(({ label, color, delay, ...position }, index) => (
              <div
                key={index}
                className="animate-float absolute flex h-12 w-12 items-center justify-center rounded-2xl text-sm font-bold text-white shadow-card"
                style={{ ...position, background: color, animationDelay: delay }}
              >
                {label}
              </div>
            ))}

            {/* Floating card 1 */}
            <div
              className="animate-float absolute top-8 left-20 flex h-[72px] w-24 items-center justify-center rounded-xl bg-linear-to-br from-amber-300 to-orange-500 shadow-card"
              style={{ animationDelay: '1.5s' }}
            >
              <div className="h-7 w-7 rounded-lg bg-white/30" />
            </div>

            {/* Floating card 2 */}
            <div
              className="animate-float absolute right-6 bottom-32 flex h-[66px] w-[88px] items-center justify-center rounded-xl bg-linear-to-br from-slate-700 to-slate-900 shadow-card"
              style={{ animationDelay: '2.5s' }}
            >
              <div className="h-4 w-7 rounded-sm border-2 border-white/30" />
            </div>

            {/* Floating card 3 */}
            <div className="animate-float-delayed absolute bottom-14 left-14 flex h-[72px] w-[72px] items-center justify-center rounded-2xl bg-linear-to-br from-brand-500 to-fuchsia shadow-card">
              <svg width="26" height="26" viewBox="0 0 28 28" fill="none">
                <path
                  d="M5 14C5 9 9 5 14 5C19 5 23 9 23 14"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <circle cx="14" cy="14" r="4" fill="white" fillOpacity=".5" />
                <circle cx="14" cy="14" r="2" fill="white" />
              </svg>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default HeroSection;
