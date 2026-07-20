import { PlayCircle, Camera, ExternalLink } from 'lucide-react';
import { Card } from '../../../shared/ui';

const iconMap = {
  youtube: PlayCircle,
  instagram: Camera,
  behance: () => <span className="text-[10px] font-bold">Be</span>,
  dribbble: () => <span className="text-[10px] font-bold">D</span>,
};
const iconBg = {
  youtube: 'bg-[#FF0000]',
  instagram: 'bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF]',
  behance: 'bg-[#1769FF]',
  dribbble: 'bg-[#EA4C89]',
};

export default function SocialLinksCard({ social, onEdit }) {
  return (
    <Card className="p-5">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="font-display text-sm font-semibold text-foreground">Social Links</h3>
        {onEdit && (
          <button
            onClick={onEdit}
            className="text-sm font-medium text-primary transition-colors duration-(--duration-fast) hover:text-primary-hover"
          >
            Edit
          </button>
        )}
      </div>
      <ul className="space-y-1">
        {social?.length > 0 &&
          social.map((s) => {
            const Icon = iconMap[s.icon];
            return (
              <li key={s.platform}>
                <a
                  href="#"
                  className="
                  flex items-center gap-3 rounded-xl px-2 py-2 text-sm
                  transition-colors duration-(--duration-fast) ease-(--ease-standard)
                  hover:bg-surface-raised
                "
                >
                  <span
                    className={`flex h-7 w-7 items-center justify-center rounded-lg text-white ${iconBg[s.icon]}`}
                  >
                    <Icon size={14} />
                  </span>
                  <span className="min-w-16 font-medium text-foreground">{s.platform}</span>
                  <span className="flex-1 truncate text-foreground-faint">{s.handle}</span>
                  <ExternalLink size={13} className="text-foreground-faint" />
                </a>
              </li>
            );
          })}
      </ul>
    </Card>
  );
}
