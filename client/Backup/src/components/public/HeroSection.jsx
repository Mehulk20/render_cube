import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from './Button';
import AuroraBackground from '../../UI/AuroraBackground';
import { Section, Container } from '../ui';
/**
 * HeroSection — landing page hero with animated floating cards.
 * FIX: h1 now uses fluid clamp-based sizing + tighter leading so it fills
 * the column on every screen width without wrapping awkwardly.
 * Dark mode aware.
 */
const HeroSection = () => {
  return (
    // <section className="relative min-h-screen bg-white dark:bg-gray-950 bg-grid overflow-hidden pt-4 transition-colors duration-300">
    //   {/* Background blobs */}
    //   <AuroraBackground />
    //   <div className="absolute top-20 right-0 w-150 h-150 bg-purple-100 dark:bg-purple-900/20 rounded-full blur-3xl opacity-40 translate-y-1/4 translate-x-1/4 pointer-events-none animate-float" />
    //   <div className="absolute bottom-0 left-0 w-100 h-100 bg-pink-100 dark:bg-pink-900/20 rounded-full blur-3xl opacity-30 translate-y-1/4 translate-x-1/4 pointer-events-none animate-float-delayed" />

    //   <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-16 flex items-center min-h-[calc(100vh-64px)]">
    //     <div className="grid lg:grid-cols-2 gap-10 xl:gap-16 items-center w-full">
    //       {/* ── Left Content ── */}
    //       <div className="space-y-6 animate-fade-up">
    //         {/* Badge */}
    //         <div className="inline-flex items-center gap-2 bg-purple-50 dark:bg-purple-950 border border-purple-100 dark:border-purple-800 text-primary text-xs font-semibold px-4 py-2 rounded-full uppercase tracking-wider">
    //           <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
    //           The Ultimate Digital Asset Marketplace
    //         </div>

    //         {/*
    //           FIX: fluid font size using clamp so it always fills the column.
    //           - min 2.6rem (mobile)
    //           - preferred: 6vw (scales with viewport)
    //           - max 5rem (large desktop, stays inside the half-col)
    //           line-height tight so the 3 lines feel like a single bold unit.
    //         */}
    //         <h1
    //           className="font-display font-extrabold text-gray-900 dark:text-white tracking-tight"
    //           style={{
    //             fontFamily: 'Syne, sans-serif',
    //             fontSize: 'clamp(2.4rem, 5.5vw, 4.75rem)',
    //             lineHeight: 1.08,
    //           }}
    //         >
    //           Create. Share.
    //           <br />
    //           Sell. <span className="text-gradient">Inspire.</span>
    //         </h1>

    //         <p className="text-gray-500 dark:text-gray-400 text-base sm:text-lg leading-relaxed max-w-md">
    //           Join thousands of creators and businesses sharing premium digital assets at fair
    //           prices. Buy what you need. Create what you love.
    //         </p>

    //         <div className="flex flex-wrap gap-4">
    //           <Link to="/marketplace">
    //             <Button variant="primary" size="lg">
    //               Explore Assets <ArrowRight size={16} />
    //             </Button>
    //           </Link>
    //           <Link to="/signup">
    //             <Button variant="outline" size="lg">
    //               Become a Creator
    //             </Button>
    //           </Link>
    //         </div>

    //         {/* Trust badges */}
    //         <div className="space-y-3 pt-1">
    //           <p className="text-gray-400 dark:text-gray-500 text-sm font-medium">
    //             Trusted by <strong className="text-gray-700 dark:text-gray-200">150K+</strong>{' '}
    //             creators and companies
    //           </p>
    //           <div className="flex items-center gap-5 flex-wrap opacity-60">
    //             <svg height="16" viewBox="0 0 80 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    //               <rect width="7" height="7" fill="#F25022" />
    //               <rect x="8" width="7" height="7" fill="#7FBA00" />
    //               <rect y="8" width="7" height="7" fill="#00A4EF" />
    //               <rect x="8" y="8" width="7" height="7" fill="#FFB900" />
    //               <text
    //                 x="20"
    //                 y="12"
    //                 fontFamily="Syne,sans-serif"
    //                 fontSize="11"
    //                 fontWeight="600"
    //                 fill="currentColor"
    //               >
    //                 Microsoft
    //               </text>
    //             </svg>
    //             <span
    //               className="text-gray-600 dark:text-gray-400 font-bold text-sm italic"
    //               style={{ fontFamily: 'serif' }}
    //             >
    //               Adobe
    //             </span>
    //             <span className="text-gray-600 dark:text-gray-400 font-bold text-sm">envato</span>
    //             <span
    //               className="text-gray-600 dark:text-gray-400 font-bold text-sm"
    //               style={{ fontFamily: 'Syne' }}
    //             >
    //               Canva
    //             </span>
    //             <span className="text-gray-600 dark:text-gray-400 font-semibold text-sm">
    //               webflow
    //             </span>
    //           </div>
    //         </div>
    //       </div>

    //       {/* ── Right: Hero Visual ── */}
    //       <div className="relative h-120 hidden lg:block">
    //         {/* Central card */}
    //         <div
    //           className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-68 rounded-3xl overflow-hidden shadow-2xl glow-purple animate-pulse-glow z-10"
    //           style={{ height: '272px' }}
    //         >
    //           <div className="w-full h-full bg-linear-to-br from-indigo-900 via-purple-800 to-violet-900 flex items-center justify-center relative">
    //             <div className="absolute inset-0 bg-linear-to-t from-purple-900/80 via-transparent to-transparent" />
    //             <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center border-2 border-white/20 z-10">
    //               <svg width="32" height="32" viewBox="0 0 36 36" fill="none">
    //                 <polygon points="14,11 27,18 14,25" fill="white" />
    //               </svg>
    //             </div>
    //             <div className="absolute bottom-4 left-3 right-3">
    //               <div className="bg-black/40 rounded-xl p-2.5 flex items-center gap-2">
    //                 <div className="flex items-end gap-0.5 h-5">
    //                   {[3, 5, 4, 7, 5, 6, 3, 8, 6, 5, 4, 7, 5].map((h, i) => (
    //                     <div
    //                       key={i}
    //                       className="w-1 bg-purple-400 rounded-sm"
    //                       style={{ height: `${h * 2}px`, opacity: 0.7 + (i % 3) * 0.1 }}
    //                     />
    //                   ))}
    //                 </div>
    //                 <span className="text-white text-xs ml-auto font-mono">00:45</span>
    //               </div>
    //             </div>
    //           </div>
    //         </div>

    //         {/* Floating tool icons */}
    //         {[
    //           { top: '10%', right: '8%', label: 'Ae', color: '#9999FF', delay: '0s' },
    //           { top: '30%', right: '2%', label: 'Xd', color: '#31A8FF', delay: '1s' },
    //           { top: '36%', left: '12%', label: 'Pr', color: '#EA77FF', delay: '2s' },
    //           { bottom: '25%', left: '5%', label: '4D', color: '#3DDC84', delay: '0.5s' },
    //         ].map(({ label, color, delay, ...pos }, i) => (
    //           <div
    //             key={i}
    //             className="absolute w-12 h-12 rounded-2xl shadow-xl flex items-center justify-center text-white font-bold text-sm animate-float"
    //             style={{ ...pos, background: color, animationDelay: delay, fontFamily: 'Syne' }}
    //           >
    //             {label}
    //           </div>
    //         ))}

    //         {/* Small decorative cards */}
    //         <div
    //           className="absolute top-8 left-20 w-24 h-18 rounded-xl shadow-lg animate-float"
    //           style={{ animationDelay: '1.5s', height: '72px' }}
    //         >
    //           <div className="w-full h-full rounded-xl bg-linear-to-br from-amber-300 to-orange-500 flex items-center justify-center">
    //             <div className="w-7 h-7 bg-white/30 rounded-lg" />
    //           </div>
    //         </div>
    //         <div
    //           className="absolute bottom-32 right-6 rounded-xl shadow-lg animate-float"
    //           style={{ animationDelay: '2.5s', width: '88px', height: '66px' }}
    //         >
    //           <div className="w-full h-full rounded-xl bg-linear-to-br from-slate-700 to-slate-900 flex items-center justify-center">
    //             <div className="w-7 h-4 border-2 border-white/30 rounded-sm" />
    //           </div>
    //         </div>
    //         <div
    //           className="absolute bottom-14 left-14 w-18 h-18 rounded-2xl shadow-lg animate-float-delayed flex items-center justify-center bg-linear-to-br from-purple-500 to-pink-500"
    //           style={{ width: '72px', height: '72px' }}
    //         >
    //           <svg width="26" height="26" viewBox="0 0 28 28" fill="none">
    //             <path
    //               d="M5 14C5 9 9 5 14 5C19 5 23 9 23 14"
    //               stroke="white"
    //               strokeWidth="2"
    //               strokeLinecap="round"
    //             />
    //             <circle cx="14" cy="14" r="4" fill="white" fillOpacity="0.5" />
    //             <circle cx="14" cy="14" r="2" fill="white" />
    //           </svg>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>

    <Section
      className="
    relative
    min-h-screen
    overflow-hidden
    bg-background
    bg-grid
    pt-4
  "
    >
      {/* Background */}

      <AuroraBackground />

      <div
        className="
      animate-float
      pointer-events-none
      absolute
      top-20
      right-0
      h-150
      w-150
      translate-x-1/4
      translate-y-1/4
      rounded-full
      bg-brand-300/30
      blur-3xl
    "
      />

      <div
        className="
      animate-float-delayed
      pointer-events-none
      absolute
      bottom-0
      left-0
      h-100
      w-100
      translate-x-1/4
      translate-y-1/4
      rounded-full
      bg-fuchsia/15
      blur-3xl
    "
      />

      <Container
        className="
      relative
      flex
      min-h-[calc(100vh-64px)]
      items-center
      py-16
    "
      >
        <div className="grid w-full items-center gap-10 lg:grid-cols-2 xl:gap-16">
          {/* Left */}

          <div className="animate-fade-up space-y-6">
            {/* Badge */}

            <div
              className="
            inline-flex
            items-center
            gap-2
            rounded-full
            border
            border-brand-200
            bg-brand-100
            px-4
            py-2
            text-xs
            font-semibold
            uppercase
            tracking-wider
            text-primary
          "
            >
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
              The Ultimate Digital Asset Marketplace
            </div>

            {/* Heading */}

            <h1
              className="
            font-display
            text-foreground
            font-extrabold
            tracking-tight
          "
              style={{
                fontSize: 'clamp(2.4rem,5.5vw,4.75rem)',
                lineHeight: 1.08,
              }}
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
                <Button variant="primary" size="lg">
                  Explore Assets
                  <ArrowRight size={16} />
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

                <span className="text-sm font-bold italic text-foreground-soft">Adobe</span>

                <span className="text-sm font-bold text-foreground-soft">Envato</span>

                <span className="font-display text-sm font-bold text-foreground-soft">Canva</span>

                <span className="text-sm font-semibold text-foreground-soft">Webflow</span>
              </div>
            </div>
          </div>
          {/* Right */}

          <div className="relative hidden h-[480px] lg:block">
            {/* Main Preview Card */}

            <div
              className="
      absolute
      top-1/2
      left-1/2
      z-10
      h-[272px]
      w-56
      -translate-x-1/2
      -translate-y-1/2
      overflow-hidden
      rounded-3xl
      shadow-floating
      shadow-glow
      animate-pulse-glow
    "
            >
              <div
                className="
        relative
        flex
        h-full
        w-full
        items-center
        justify-center
        bg-linear-to-br
        from-indigo-900
        via-brand-700
        to-brand-600
      "
              >
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />

                {/* Play */}

                <div
                  className="
          relative
          z-10
          flex
          h-20
          w-20
          items-center
          justify-center
          rounded-full
          border
          border-white/20
          bg-white/10
          backdrop-blur-md
        "
                >
                  <svg width="32" height="32" viewBox="0 0 36 36" fill="none">
                    <polygon points="14,11 27,18 14,25" fill="white" />
                  </svg>
                </div>

                {/* Audio Footer */}

                <div className="absolute right-3 bottom-4 left-3">
                  <div
                    className="
            glass
            flex
            items-center
            gap-2
            rounded-xl
            p-2.5
          "
                  >
                    <div className="flex h-5 items-end gap-0.5">
                      {[3, 5, 4, 7, 5, 6, 3, 8, 6, 5, 4, 7, 5].map((height, index) => (
                        <div
                          key={index}
                          className="w-1 rounded-sm bg-brand-300"
                          style={{
                            height: `${height * 2}px`,
                            opacity: 0.65 + (index % 3) * 0.12,
                          }}
                        />
                      ))}
                    </div>

                    <span className="ml-auto font-mono text-xs text-white">00:45</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Apps */}

            {[
              {
                top: '10%',
                right: '8%',
                label: 'Ae',
                color: '#9999FF',
                delay: '0s',
              },
              {
                top: '30%',
                right: '2%',
                label: 'Xd',
                color: '#31A8FF',
                delay: '1s',
              },
              {
                top: '36%',
                left: '12%',
                label: 'Pr',
                color: '#EA77FF',
                delay: '2s',
              },
              {
                bottom: '25%',
                left: '5%',
                label: '4D',
                color: '#3DDC84',
                delay: '.5s',
              },
            ].map(({ label, color, delay, ...position }, index) => (
              <div
                key={index}
                className="
        animate-float
        absolute
        flex
        h-12
        w-12
        items-center
        justify-center
        rounded-2xl
        text-sm
        font-bold
        text-white
        shadow-card
      "
                style={{
                  ...position,
                  background: color,
                  animationDelay: delay,
                }}
              >
                {label}
              </div>
            ))}

            {/* Floating Card 1 */}

            <div
              className="
      animate-float
      absolute
      top-8
      left-20
      flex
      h-[72px]
      w-24
      items-center
      justify-center
      rounded-xl
      bg-linear-to-br
      from-amber-300
      to-orange-500
      shadow-card
    "
              style={{
                animationDelay: '1.5s',
              }}
            >
              <div className="h-7 w-7 rounded-lg bg-white/30" />
            </div>

            {/* Floating Card 2 */}

            <div
              className="
      animate-float
      absolute
      right-6
      bottom-32
      flex
      h-[66px]
      w-[88px]
      items-center
      justify-center
      rounded-xl
      bg-linear-to-br
      from-slate-700
      to-slate-900
      shadow-card
    "
              style={{
                animationDelay: '2.5s',
              }}
            >
              <div className="h-4 w-7 rounded-sm border-2 border-white/30" />
            </div>

            {/* Floating Card 3 */}

            <div
              className="
      animate-float-delayed
      absolute
      bottom-14
      left-14
      flex
      h-[72px]
      w-[72px]
      items-center
      justify-center
      rounded-2xl
      bg-linear-to-br
      from-brand-500
      to-fuchsia
      shadow-card
    "
            >
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
