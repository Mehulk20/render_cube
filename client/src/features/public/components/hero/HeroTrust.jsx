export default function HeroTrust() {
  return (
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

          <text x="20" y="12" fontFamily="Syne" fontSize="11" fontWeight="600" fill="currentColor">
            Microsoft
          </text>
        </svg>

        <span className="text-sm font-bold italic text-foreground-soft">Adobe</span>

        <span className="text-sm font-bold text-foreground-soft">Envato</span>

        <span className="font-display text-sm font-bold text-foreground-soft">Canva</span>

        <span className="text-sm font-semibold text-foreground-soft">Webflow</span>
      </div>
    </div>
  );
}
