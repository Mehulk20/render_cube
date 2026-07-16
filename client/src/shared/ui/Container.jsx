import clsx from 'clsx';

const sizes = {
  sm: 'max-w-3xl',
  md: 'max-w-5xl',
  lg: 'max-w-6xl',
  xl: 'max-w-7xl',
  full: 'max-w-none',
};

export default function Container({ children, size = 'xl', className, as = 'div', ...props }) {
  const Tag = as;

  return (
    <Tag className={clsx('mx-auto w-full px-4 sm:px-6 lg:px-8', sizes[size], className)} {...props}>
      {children}
    </Tag>
  );
}
