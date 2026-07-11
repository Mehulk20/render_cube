import { ArrowUpRight, ArrowLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const WorkspaceSwitch = ({ role, isCreatorDashboard, setIsCreatorDashboard }) => {
  
  if (isCreatorDashboard) {
    return (
      <Link
        onClick={() => setIsCreatorDashboard(!isCreatorDashboard)}
        to="/account"
        className="inline-flex items-center gap-2 rounded-xl border mx-4 my-2 border-border bg-violet-500/20 px-5 py-3 text-sm font-medium text-foreground shadow-sm transition-all duration-300 hover:-translate-x-1 hover:border-primary/30 hover:bg-surface-hover"
      >
        <span className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-bold text-blue-100 transition-colors group-hover:bg-primary/90">
          Account
          <ChevronRight className="h-4 w-4" />
        </span>
      </Link>
    );
  }
  if (!isCreatorDashboard && role === 'creator')
    return (
      <Link
        to="/creator"
        className="mx-3 my-3 flex items-center justify-between rounded-xl bg-linear-to-r from-violet-600 to-fuchsia-600 p-2 text-white"
        onClick={() => setIsCreatorDashboard(!isCreatorDashboard)}
      >
        <div className="px-2">
          <h3 className="text-lg font-semibold">Creator Studio</h3>
          <p className="text-sm text-white/90">Manage assets & earnings</p>
        </div>

        <ArrowUpRight className="h-6 w-6" />
      </Link>
    );
};

export default WorkspaceSwitch;
