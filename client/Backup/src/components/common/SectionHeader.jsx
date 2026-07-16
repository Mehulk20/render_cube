import { Link } from 'react-router-dom';

export default function SectionHeader({ title, viewAllTo, action }) {
  return (
    <div className="mb-4 flex items-center justify-between">
      <h2 className="font-display text-base font-semibold text-ink sm:text-lg">{title}</h2>
      {viewAllTo && (
        <Link to={viewAllTo} className="text-sm font-medium text-violet hover:text-fuchsia transition-colors">
          View all
        </Link>
      )}
      {action}
    </div>
  );
}
