import { Card } from '../ui';

export default function StoreProgressCard({ level = 12, xp = 12850, nextXp = 15000 }) {
  const pct = Math.min(100, (xp / nextXp) * 100);
  return (
    <Card className="p-4 sm:p-5">
      <h3 className="mb-3 font-display text-sm font-semibold text-ink">Store Progress</h3>
      <div className="flex items-center gap-3">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-violet to-fuchsia font-display text-sm font-bold text-white">
          {level}
        </span>
        <div className="min-w-0 flex-1">
          <p className="text-sm font-medium text-ink">Level {level} Creator</p>
          <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-surface-raised">
            <div
              className="h-full rounded-full bg-gradient-to-r from-violet to-fuchsia transition-all duration-700"
              style={{ width: `${pct}%` }}
            />
          </div>
          <p className="mt-1 flex justify-between text-[11px] text-ink-faint">
            <span>
              {xp.toLocaleString()} / {nextXp.toLocaleString()} XP
            </span>
            <span>Next Level {level + 1}</span>
          </p>
        </div>
      </div>
    </Card>
  );
}
