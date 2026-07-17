import { HERO_FLOATING_BADGES } from './hero.constants';

export default function HeroFloatingBadges() {
  return HERO_FLOATING_BADGES.map(({ label, color, delay, ...position }) => (
    <div
      key={label}
      className="animate-float absolute flex h-12 w-12 items-center justify-center rounded-2xl text-sm font-bold text-white shadow-card"
      style={{
        ...position,
        background: color,
        animationDelay: delay,
      }}
    >
      {label}
    </div>
  ));
}
