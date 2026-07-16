import { forwardRef } from 'react';
import clsx from 'clsx';

const variants = {
  primary: 'bg-violet text-white hover:bg-violet-dim shadow-[0_0_0_1px_rgba(124,92,252,0.4)] hover:shadow-glow',
  secondary: 'bg-surface-raised text-ink border border-border hover:bg-surface-hover',
  ghost: 'bg-transparent text-ink-soft hover:text-ink hover:bg-surface-raised',
  danger: 'bg-rose/10 text-rose border border-rose/30 hover:bg-rose/20',
  gradient: 'bg-gradient-to-r from-violet to-fuchsia text-white hover:brightness-110 shadow-glow',
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
        'inline-flex items-center justify-center rounded-xl font-medium transition-all duration-200 active:scale-[0.97] disabled:opacity-50 disabled:pointer-events-none focus-ring whitespace-nowrap',
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
