import { Upload, Image, FolderKanban } from 'lucide-react';
import { Card } from '../ui';

const icons = { tip1: Upload, tip2: Image, tip3: FolderKanban };
const tones = {
  tip1: 'bg-mint/15 text-mint',
  tip2: 'bg-cyan/15 text-cyan',
  tip3: 'bg-violet/15 text-violet',
};

export default function TipsToGrow({ tips }) {
  return (
    <Card className="p-4 sm:p-5">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="font-display text-sm font-semibold text-ink">Tips to Grow</h3>
        <a href="#" className="text-xs font-medium text-violet hover:text-fuchsia">
          View all
        </a>
      </div>
      <ul className="space-y-3">
        {tips.map((t) => {
          const Icon = icons[t.id] ?? Upload;
          return (
            <li key={t.id} className="flex items-start gap-3">
              <span
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${tones[t.id]}`}
              >
                <Icon size={15} />
              </span>
              <div>
                <p className="text-sm font-medium text-ink">{t.title}</p>
                <p className="text-xs text-ink-faint">{t.text}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </Card>
  );
}
