import clsx from 'clsx';

export default function CategoryFilter({ categories, active, onSelect }) {
  return (
    <div className="flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
      <button
        onClick={() => onSelect('All')}
        className={clsx(
          'shrink-0 rounded-full border px-4 py-1.5 text-sm font-medium transition-colors',
          active === 'All' ? 'border-violet bg-violet/15 text-violet' : 'border-border text-ink-soft hover:border-violet/40 hover:text-ink'
        )}
      >
        All
      </button>
      {categories.map((c) => (
        <button
          key={c}
          onClick={() => onSelect(c)}
          className={clsx(
            'shrink-0 rounded-full border px-4 py-1.5 text-sm font-medium transition-colors',
            active === c ? 'border-violet bg-violet/15 text-violet' : 'border-border text-ink-soft hover:border-violet/40 hover:text-ink'
          )}
        >
          {c}
        </button>
      ))}
    </div>
  );
}
