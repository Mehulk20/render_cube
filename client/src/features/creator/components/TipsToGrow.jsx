import { Upload, Image, FolderKanban } from 'lucide-react';
import { Card } from '../../../shared/ui';

const icons = { tip1: Upload, tip2: Image, tip3: FolderKanban };
const tones = {
  tip1: 'bg-success/15 text-success',
  tip2: 'bg-info/15 text-info',
  tip3: 'bg-primary/15 text-primary',
};

export default function TipsToGrow({ tips }) {
  return (
    <Card className="p-4 sm:p-5">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="font-display text-sm font-semibold text-foreground">Tips to Grow</h3>
        <a
          href="#"
          className="text-xs font-medium text-primary transition-colors duration-[var(--duration-fast)] hover:text-primary-hover"
        >
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
                <p className="text-sm font-medium text-foreground">{t.title}</p>
                <p className="text-xs text-foreground-faint">{t.text}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </Card>
  );
}
