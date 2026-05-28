/**
 * Button — reusable button component.
 * Variants: primary | outline | ghost | white | danger
 * Sizes: sm | md | lg
 * Dark-mode aware via Tailwind dark: classes.
 */
const Button = ({ children, variant = 'primary', size = 'md', className = '', onClick, disabled, type = 'button', ...props }) => {
  const base =
    'inline-flex items-center gap-2 font-semibold rounded-full transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed';

  const variants = {
    primary:
      'bg-primary hover:bg-primary-dark text-white hover:shadow-lg hover:shadow-purple-200 dark:hover:shadow-purple-900 active:scale-95',
    outline:
      'bg-transparent border-2 border-gray-900 dark:border-gray-200 text-gray-900 dark:text-gray-100 hover:bg-gray-900 dark:hover:bg-gray-100 hover:text-white dark:hover:text-gray-900',
    ghost:
      'bg-transparent text-primary hover:bg-purple-50 dark:hover:bg-purple-950',
    white:
      'bg-white dark:bg-gray-800 text-primary hover:bg-gray-50 dark:hover:bg-gray-700',
    danger:
      'bg-red-500 hover:bg-red-600 text-white active:scale-95',
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
