/**
 * Button — reusable button component.
 * Variants: primary | outline | ghost | white | danger
 * Sizes: sm | md | lg
 * Dark-mode aware via Tailwind dark: classes.
 */
const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  disabled,
  type = 'button',
  ...props
}) => {
  const base =
    'inline-flex items-center gap-2 font-semibold rounded-full transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed';

  const variants = {
    primary:
      'bg-gradient-to-r from-brand-500 to-brand-600 text-white hover:from-brand-600 hover:to-brand-700 hover:shadow-glow hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] transition-all duration-300',
    outline:
      'border border-brand-500/40 bg-gradient-to-r from-brand-500/10 to-fuchsia/10 text-brand-500 backdrop-blur-md hover:from-brand-500 hover:to-fuchsia hover:text-white hover:shadow-glow transition-all duration-300',

    ghost: 'bg-transparent text-primary hover:bg-purple-50 dark:hover:bg-purple-950',
    white: 'bg-white dark:bg-gray-800 text-primary hover:bg-gray-50 dark:hover:bg-gray-700',
    danger: 'bg-red-500 hover:bg-red-600 text-white active:scale-95',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
  };

  return (
    <button
      type={type}
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
