import { memo } from 'react';
import { Menu } from 'lucide-react';

const DashboardNavbarBrand = ({ mode, title, onMenuClick }) => {
  return (
    <div className="flex items-center gap-3">
      <button
        type="button"
        aria-label="Open navigation menu"
        onClick={onMenuClick}
        className="rounded-lg p-2 transition-colors hover:bg-muted focus:outline-none focus:ring-2 focus:ring-primary lg:hidden"
      >
        <Menu size={20} />
      </button>

      <div>
        <h1 className="text-base font-semibold sm:text-lg">
          {title ?? (mode === 'creator' ? 'Creator Studio' : 'Dashboard')}
        </h1>
      </div>
    </div>
  );
};

export default memo(DashboardNavbarBrand);
