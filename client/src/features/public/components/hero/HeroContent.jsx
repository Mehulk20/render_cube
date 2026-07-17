import HeroBadge from './HeroBadge';
import HeroButtons from './HeroButtons';
import HeroTrust from './HeroTrust';

export default function HeroContent() {
  return (
    <div className="animate-fade-up space-y-6">
      <HeroBadge />

      <h1
        className="font-display font-extrabold tracking-tight text-foreground"
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

      <p className="max-w-md text-base leading-relaxed text-foreground-muted sm:text-lg">
        Join thousands of creators and businesses sharing premium digital assets at fair prices. Buy
        what you need. Create what you love.
      </p>

      <HeroButtons />

      <HeroTrust />
    </div>
  );
}
