import clsx from 'clsx';
import logoMark from '../../../../assets/logo.png';

const sizes = {
  sm: 'h-8 w-8',
  md: 'h-10 w-10',
  lg: 'h-12 w-12',
  xl: 'h-14 w-14',
};

export default function Logo({ size = 'md', className }) {
  return (
    <div
      className={clsx('relative flex items-center justify-center shrink-0', sizes[size], className)}
    >
      {/* Glow */}

      <div
        className="
          absolute
          inset-0
          rounded-2xl
          bg-brand-500/20
          blur-lg
          opacity-80
        "
      />

      {/* Logo */}

      <img
        src={logoMark}
        alt="Estadious logo"
        className="
    relative
    h-full
    w-full
    object-contain
    logo-glow
    transition-transform
    duration-300
    group-hover:scale-105
  "
      />
    </div>
  );
}
