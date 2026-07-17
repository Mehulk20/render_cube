import { HERO_AUDIO_WAVE } from './hero.constants';
export default function HeroPreviewCard() {
  return (
    <div className="animate-pulse-glow absolute top-1/2 left-1/2 z-10 h-[272px] w-56 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-3xl shadow-floating shadow-glow">
      <div className="relative flex h-full w-full items-center justify-center bg-linear-to-br from-indigo-900 via-brand-700 to-brand-600">
        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />

        <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-md">
          <svg width="32" height="32" viewBox="0 0 36 36" fill="none">
            <polygon points="14,11 27,18 14,25" fill="white" />
          </svg>
        </div>

        <div className="absolute right-3 bottom-4 left-3">
          <div className="glass flex items-center gap-2 rounded-xl p-2.5">
            <div className="flex h-5 items-end gap-0.5">
              {HERO_AUDIO_WAVE.map((height, index) => (
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
  );
}
