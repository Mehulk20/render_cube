import clsx from 'clsx';

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className,
  type = 'button',
  disabled = false,
  ...props
}) {
  const base = `
    inline-flex
    items-center
    justify-center
    gap-2
    rounded-full
    font-semibold
    whitespace-nowrap
    transition-all
    duration-300
    cursor-pointer
    select-none
    focus:outline-none
    focus-visible:ring-2
    focus-visible:ring-brand-500/40
    disabled:pointer-events-none
    disabled:opacity-50
  `;

  const variants = {
    primary: `
      bg-gradient-to-r
      from-brand-500
      to-brand-600
      text-white
      shadow-card
      hover:from-brand-600
      hover:to-brand-700
      hover:-translate-y-0.5
      hover:shadow-glow
      active:translate-y-0
      active:scale-[0.98]
    `,

    secondary: `
      border
      border-border
      bg-surface-raised
      text-foreground
      shadow-card
      hover:bg-surface-hover
      hover:border-brand-500/30
      hover:shadow-card-hover
      hover:-translate-y-0.5
      active:scale-[0.98]
    `,

    outline: `
      border
      border-brand-500/40
      bg-gradient-to-r
      from-brand-500/10
      to-fuchsia/10
      text-brand-500
      backdrop-blur-md
      hover:border-brand-500
      hover:from-brand-500
      hover:to-fuchsia
      hover:text-white
      hover:shadow-glow
      active:scale-[0.98]
    `,

    ghost: `
      bg-transparent
      text-foreground
      hover:bg-surface-hover
      hover:text-brand-500
    `,

    white: `
      bg-surface
      text-brand-500
      border
      border-border
      shadow-card
      hover:bg-surface-hover
      hover:shadow-card-hover
    `,

    success: `
      bg-green-500
      text-white
      hover:bg-green-600
      hover:shadow-md
      active:scale-[0.98]
    `,

    danger: `
      bg-red-500
      text-white
      hover:bg-red-600
      hover:shadow-md
      active:scale-[0.98]
    `,
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
    xl: 'px-10 py-5 text-lg',
  };

  return (
    <button
      type={type}
      disabled={disabled}
      className={clsx(base, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
}
