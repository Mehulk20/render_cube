import { Card } from '../../../shared/ui';

export default function StoreProgressCard({ level = 12, xp = 12850, nextXp = 15000 }) {
  const pct = Math.min(100, (xp / nextXp) * 100);
  return (
    <Card className="p-4 sm:p-5">
      <h3 className="mb-3 font-display text-sm font-semibold text-foreground">Store Progress</h3>
      <div className="flex items-center gap-3">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-brand-400 font-display text-sm font-bold text-white">
          {level}
        </span>
        <div className="min-w-0 flex-1">
          <p className="text-sm font-medium text-foreground">Level {level} Creator</p>
          <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-surface-raised">
            <div
              className="h-full rounded-full bg-gradient-to-r from-primary to-brand-400 transition-all duration-[var(--duration-slow)] ease-[var(--ease-standard)]"
              style={{ width: `${pct}%` }}
            />
          </div>
          <p className="mt-1 flex justify-between text-[11px] text-foreground-faint">
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
