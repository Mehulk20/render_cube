import clsx from 'clsx';

export default function Section({ children, className, as = 'section', ...props }) {
  const Tag = as;

  return (
    <Tag className={clsx('bg-background py-16 lg:py-20 transition-surface', className)} {...props}>
      {children}
    </Tag>
  );
}
