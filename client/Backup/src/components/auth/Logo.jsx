const sizes = {
  sm: { box: 'h-8 w-8', title: 'text-sm', subtitle: 'text-[11px]' },
  md: { box: 'h-10 w-10', title: 'text-lg', subtitle: 'text-xs' },
}

export default function Logo({ size = 'md', className = '' }) {
  const s = sizes[size]
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg
        viewBox="0 0 32 32"
        fill="none"
        className={`${s.box} shrink-0 animate-spin-slow motion-reduce:animate-none`}
      >
        <path
          d="M16 2 L28 9 V23 L16 30 L4 23 V9 Z"
          className="stroke-brand-500 dark:stroke-brand-400"
          strokeWidth="2"
        />
        <path
          d="M16 2 V16 M16 16 L28 9 M16 16 L4 9 M16 16 L28 23 M16 16 L4 23 M16 16 V30"
          className="stroke-brand-400 dark:stroke-brand-300"
          strokeWidth="1.4"
          opacity="0.6"
        />
      </svg>
      <div className="leading-tight">
        <p className={`${s.title} font-display font-bold tracking-tight text-ink-900 dark:text-white`}>
          RENDER CUBE
        </p>
        <p className={`${s.subtitle} text-ink-500 dark:text-ink-400`}>Digital Assets Marketplace</p>
      </div>
    </div>
  )
}
