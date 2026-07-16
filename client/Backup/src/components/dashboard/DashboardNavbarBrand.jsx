import { Menu } from 'lucide-react';

const DashboardNavbarBrand = ({ mode, onMenuClick }) => {
  return (
    <div className="flex items-center gap-3">
      <button onClick={onMenuClick} className="rounded-lg p-2 hover:bg-muted lg:hidden">
        <Menu size={20} />
      </button>

      <div>
        <h1 className="text-lg font-semibold">
          {mode === 'creator' ? 'Creator Studio' : 'Dashboard'}
        </h1>
      </div>
    </div>
  );
};

export default DashboardNavbarBrand;
