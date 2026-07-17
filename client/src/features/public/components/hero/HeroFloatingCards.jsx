export default function HeroFloatingCards() {
  return (
    <>
      <div
        className="animate-float absolute top-8 left-20 flex h-[72px] w-24 items-center justify-center rounded-xl bg-linear-to-br from-amber-300 to-orange-500 shadow-card"
        style={{ animationDelay: '1.5s' }}
      >
        <div className="h-7 w-7 rounded-lg bg-white/30" />
      </div>

      <div
        className="animate-float absolute right-6 bottom-32 flex h-[66px] w-[88px] items-center justify-center rounded-xl bg-linear-to-br from-slate-700 to-slate-900 shadow-card"
        style={{ animationDelay: '2.5s' }}
      >
        <div className="h-4 w-7 rounded-sm border-2 border-white/30" />
      </div>

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
    </>
  );
}
