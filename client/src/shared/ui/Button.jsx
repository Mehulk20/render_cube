import { forwardRef } from 'react';
import clsx from 'clsx';

const variants = {
  primary:
    'bg-primary text-white ring-1 ring-primary/40 hover:bg-primary-hover hover:ring-0 hover:shadow-glow',
  secondary: 'bg-surface-raised text-foreground border border-border hover:bg-surface-hover',
  ghost: 'bg-transparent text-foreground-soft hover:text-foreground hover:bg-surface-raised',
  danger: 'bg-danger/10 text-danger border border-danger/30 hover:bg-danger/20',
  gradient: 'bg-gradient-to-r from-primary to-brand-400 text-white hover:brightness-110 shadow-glow',
};

const sizes = {
  sm: 'h-8 px-3 text-xs gap-1.5',
  md: 'h-10 px-4 text-sm gap-2',
  lg: 'h-12 px-6 text-base gap-2.5',
};

const Button = forwardRef(function Button(
  { className, variant = 'primary', size = 'md', as: Comp = 'button', children, ...props },
  ref
) {
  return (
    <Comp
      ref={ref}
      className={clsx(
        'inline-flex items-center justify-center rounded-xl font-medium whitespace-nowrap',
        'transition-all duration-[var(--duration-normal)] ease-[var(--ease-standard)]',
        'active:scale-[0.97] disabled:opacity-50 disabled:pointer-events-none focus-ring',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </Comp>
  );
});

export default Button;
