import { ArrowUpRight } from 'lucide-react';

function MenuItem({ icon: Icon, text, badge, danger = false }) {
  return (
    <button className="flex w-full items-center justify-between rounded-lg px-3 py-2.5 transition hover:bg-zinc-900">
      <div className={`flex items-center gap-3 ${danger ? 'text-red-400' : 'text-zinc-300'}`}>
        <Icon size={18} />

        <span>{text}</span>
      </div>

      {badge ? (
        <span className="rounded-full bg-violet-600 px-2 py-0.5 text-xs text-white">{badge}</span>
      ) : (
        <ArrowUpRight size={16} className="text-zinc-500" />
      )}
    </button>
  );
}

export default MenuItem;
