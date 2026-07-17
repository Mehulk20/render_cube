import clsx from 'clsx';

const sizes = {
  content: 'max-w-3xl',
  page: 'max-w-7xl',
  dashboard: 'max-w-350',
  full: 'max-w-none',
};

export default function Container({ children, size = 'xl', className, as = 'div', ...props }) {
  const Component = as;

  return (
    <Component
      className={clsx('mx-auto w-full px-4 sm:px-6 lg:px-8', sizes[size], className)}
      {...props}
    >
      {children}
    </Component>
  );
}
