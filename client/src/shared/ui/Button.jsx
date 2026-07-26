import { forwardRef } from 'react';
import clsx from 'clsx';

const variants = {
  primary:
    'bg-brand-500 text-white ring-1 ring-brand-500/40 hover:bg-brand-600 hover:ring-0 hover:shadow-glow',
  secondary: 'bg-surface-raised text-foreground border border-border hover:bg-surface-hover',
  ghost: 'bg-transparent text-foreground-soft hover:text-foreground hover:bg-surface-raised',
  danger: 'bg-danger/10 text-danger border border-danger/30 hover:bg-danger/20',
  gradient:
    'bg-gradient-to-r from-brand-500 to-brand-400 text-white hover:brightness-110 shadow-glow',
};

const sizes = {
  sm: 'btn-size-sm',
  md: 'btn-size-md',
  lg: 'btn-size-lg',
};

const Button = forwardRef(function Button(
  { className, variant = 'primary', size = 'md', as: Comp = 'button', children, ...props },
  ref
) {
  return (
    <Comp
      ref={ref}
      className={clsx('btn-base focus-ring', variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </Comp>
  );
});

export default Button;
