import clsx from 'clsx';
const months = [
  { id: 'jan', label: 'J' },
  { id: 'feb', label: 'F' },
  { id: 'mar', label: 'M' },
  { id: 'apr', label: 'A' },
  { id: 'may', label: 'M' },
  { id: 'jun', label: 'J' },
  { id: 'jul', label: 'J' },
  { id: 'aug', label: 'A' },
  { id: 'sep', label: 'S' },
  { id: 'oct', label: 'O' },
  { id: 'nov', label: 'N' },
  { id: 'dec', label: 'D' },
];

export default function RevenueChart({ data = [], activeIndex = data.length - 1 }) {
  return (
    <div>
      {/* Header */}

      <div className="mb-4 flex items-center justify-between">
        <h4 className="text-sm font-semibold text-foreground">Revenue Trend</h4>

        <span className="text-xs text-foreground-faint">Last 12 Months</span>
      </div>

      {/* Chart */}

      <div
        className="
          flex
          h-28
          items-end
          gap-2
        "
      >
        {data.map((value, index) => (
          <div
            key={index}
            className="
              group
              flex
              flex-1
              items-end
              justify-center
            "
          >
            <div
              className={clsx(
                `
                  w-full
                  rounded-full
                  transition-all
                  duration-300
                  ease-out
                  hover:scale-y-105
                `,
                index === activeIndex
                  ? 'bg-linear-to-t from-brand-600 to-brand-400'
                  : 'bg-linear-to-t from-brand-200 to-brand-300 dark:from-brand-700 dark:to-brand-500'
              )}
              style={{
                height: `${value}%`,
              }}
            />
          </div>
        ))}
      </div>

      {/* Labels */}

      <div className="mt-3 grid grid-cols-12 text-center text-[10px] text-foreground-faint">
        {months.map((month) => (
          <span key={month.id}>{month.label}</span>
        ))}
      </div>
    </div>
  );
}
