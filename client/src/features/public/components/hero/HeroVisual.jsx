import HeroFloatingBadges from './HeroFloatingBadges';
import HeroFloatingCards from './HeroFloatingCards';
import HeroPreviewCard from './HeroPreviewCard';

export default function HeroVisual() {
  return (
    <div className="relative hidden h-[480px] lg:block">
      <HeroPreviewCard />

      <HeroFloatingBadges />

      <HeroFloatingCards />
    </div>
  );
}
