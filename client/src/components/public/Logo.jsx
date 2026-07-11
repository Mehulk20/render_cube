import logoMark from '../../assets/logo.png';

const sizes = {
  sm: 'h-7 w-7',
  md: 'h-9 w-9',
  lg: 'h-12 w-12',
};

export default function Logo({ size = 'md', withWordmark = true, className = '' }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <div className={`relative ${sizes[size]} shrink-0`}>
        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-violet-500/30 to-pink-400/20 blur-md" />
        <img
          src={logoMark}
          alt="render cube logo"
          className="relative h-full w-full object-contain drop-shadow-[0_2px_8px_rgba(124,92,255,0.35)]"
        />
      </div>
    </div>
  );
}
