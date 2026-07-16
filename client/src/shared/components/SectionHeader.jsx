import { Link } from 'react-router-dom';

export default function SectionHeader({ title, viewAllTo, action }) {
  return (
    <div className="mb-4 flex items-center justify-between">
      <h2 className="font-display text-base font-semibold text-foreground sm:text-lg">{title}</h2>
      {viewAllTo && (
        <Link
          to={viewAllTo}
          className="text-sm font-medium text-primary transition-colors duration-[var(--duration-fast)] ease-[var(--ease-standard)] hover:text-primary-hover"
        >
          View all
        </Link>
      )}
      {action}
    </div>
  );
}
