import { UploadCloud, FolderPlus, BarChart3, Store, Share2, UserSquare2 } from 'lucide-react';
import { Card } from '../ui';

const actions = [
  { label: 'Upload Asset', icon: UploadCloud },
  { label: 'Create Collection', icon: FolderPlus },
  { label: 'View Analytics', icon: BarChart3 },
  { label: 'Edit Store', icon: Store },
  { label: 'Share Store', icon: Share2 },
  { label: 'Creator Profile', icon: UserSquare2 },
];

export default function CreatorQuickActions() {
  return (
    <Card className="p-4 sm:p-5">
      <h3 className="mb-3 font-display text-sm font-semibold text-ink">Quick Actions</h3>
      <div className="grid grid-cols-2 gap-2.5">
        {actions.map((a) => (
          <button
            key={a.label}
            className="flex flex-col items-center gap-2 rounded-xl border border-border bg-surface-raised px-3 py-4 text-center text-xs font-medium text-ink-soft transition-colors hover:border-violet/40 hover:text-ink"
          >
            <a.icon size={18} className="text-violet" />
            {a.label}
          </button>
        ))}
      </div>
    </Card>
  );
}
