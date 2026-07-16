import clsx from 'clsx';

export default function TopAssetItem({ name, category, revenue, active = false }) {
  return (
    <div
      className={clsx(
        `
          group
          flex
          items-center
          gap-3
          rounded-xl
          p-3
          transition-interactive
          hover:bg-surface-hover
        `,
        active && 'bg-surface-hover'
      )}
    >
      {/* Thumbnail */}

      <div
        className="
          flex
          h-10
          w-10
          shrink-0
          items-center
          justify-center
          rounded-lg
          bg-linear-to-br
          from-brand-500
          to-brand-400
          text-sm
          font-bold
          text-white
        "
      >
        {name.charAt(0)}
      </div>

      {/* Asset */}

      <div className="min-w-0 flex-1">
        <h4
          className="
            truncate
            text-sm
            font-semibold
            text-foreground
          "
        >
          {name}
        </h4>

        <p
          className="
            mt-0.5
            text-xs
            text-foreground-faint
          "
        >
          {category}
        </p>
      </div>

      {/* Revenue */}

      <div className="text-right">
        <p
          className="
            text-sm
            font-semibold
            text-foreground
          "
        >
          {revenue}
        </p>
      </div>
    </div>
  );
}
