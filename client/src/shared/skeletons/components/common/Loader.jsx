import { useEffect, useState } from 'react'

const CIRC = 2 * Math.PI * 44 // r=44

function ProgressRing({ percent }) {
  const offset = CIRC - (percent / 100) * CIRC
  return (
    <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full -rotate-90">
      <circle
        cx="50" cy="50" r="44"
        fill="none" stroke="var(--color-border-strong)" strokeWidth="1.5"
      />
      <circle
        cx="50" cy="50" r="44"
        fill="none" strokeWidth="2" strokeLinecap="round"
        stroke="url(#loaderGradient)"
        strokeDasharray={CIRC}
        strokeDashoffset={offset}
        style={{ transition: 'stroke-dashoffset 220ms var(--ease-out)' }}
      />
      <defs>
        <linearGradient id="loaderGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="var(--color-brand-400)" />
          <stop offset="100%" stopColor="var(--color-brand-600)" />
        </linearGradient>
      </defs>
    </svg>
  )
}

/** A quiet, restrained mark — a single facet catching light, not a spinning cube. */
function Mark() {
  return (
    <div className="relative flex h-14 w-14 items-center justify-center">
      <div className="animate-halo-pulse absolute inset-[-40%] rounded-full bg-brand-500/20 blur-xl" />
      <div className="animate-mark-breathe relative h-full w-full rounded-2xl bg-gradient-to-br from-brand-400 to-brand-700 shadow-glow">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/25 to-transparent" />
        <div className="absolute inset-2.5 rounded-lg border border-white/25" />
      </div>
    </div>
  )
}

function Dots() {
  return (
    <span className="inline-flex items-center gap-0.5 pl-0.5 align-middle">
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className="animate-dot-fade h-1 w-1 rounded-full bg-ink-faint"
          style={{ animationDelay: `${i * 0.2}s` }}
        />
      ))}
    </span>
  )
}

export default function Loader({ label = 'Loading your workspace' }) {
  const [percent, setPercent] = useState(4)

  useEffect(() => {
    const id = setInterval(() => {
      setPercent((p) => (p >= 100 ? 4 : p + Math.max(1, Math.round((100 - p) * 0.06))))
    }, 160)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center gap-7 bg-background px-6 text-center">
      <div className="relative flex h-28 w-28 items-center justify-center">
        <ProgressRing percent={percent} />
        <Mark />
      </div>

      <div className="animate-fade-in space-y-2">
        <p className="font-display text-base font-semibold tracking-[0.14em] text-ink">
          ESTADIOUS
        </p>
        <p className="flex items-center justify-center text-sm text-ink-soft">
          {label}
          <Dots />
        </p>
        <p className="font-mono text-xs tabular-nums tracking-widest text-violet">
          {String(Math.min(100, percent)).padStart(2, '0')}%
        </p>
      </div>
    </div>
  )
}
