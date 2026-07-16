import clsx from 'clsx';
import { Link } from 'react-router-dom';

const variants = {
  template: {
    bg: 'bg-category-template-soft',
    text: 'text-category-template',
  },

  video: {
    bg: 'bg-category-video-soft',
    text: 'text-category-video',
  },

  audio: {
    bg: 'bg-category-audio-soft',
    text: 'text-category-audio',
  },

  graphic: {
    bg: 'bg-category-graphics-soft',
    text: 'text-category-graphics',
  },

  model3d: {
    bg: 'bg-category-model3d-soft',
    text: 'text-category-model3d',
  },

  photo: {
    bg: 'bg-category-photo-soft',
    text: 'text-category-photo',
  },

  font: {
    bg: 'bg-category-font-soft',
    text: 'text-category-font',
  },

  code: {
    bg: 'bg-category-code-soft',
    text: 'text-category-code',
  },
};

export default function CategoryCard({ icon, name, count, variant = 'template' }) {
  const current = variants[variant] ?? variants.template;

  return (
    <Link
      to={`/marketplace?cat=${encodeURIComponent(name)}`}
      aria-label={`Browse ${name}`}
      className="
        group
        hover-lift
        transition-surface
        flex
        flex-col
        items-center
        rounded-xl
        border
        border-border
        card
        p-6
        text-center
        shadow-card

      "
    >
      {/* Icon */}

      <div
        className={clsx(
          `
            mb-4
            flex
            h-16
            w-16
            items-center
            justify-center
            rounded-xl
            transition-transform
            duration-300
            group-hover:scale-110
            group-hover:-rotate-6
          `,
          current.bg
        )}
      >
        <span
          className={clsx(
            `
              text-3xl
              transition-transform
              duration-300
              group-hover:scale-110
            `,
            current.text
          )}
        >
          {icon}
        </span>
      </div>

      {/* Title */}

      <h3
        className="
          text-sm
          font-semibold
          text-foreground
          transition-colors
          duration-300
          group-hover:text-primary
        "
      >
        {name}
      </h3>

      {/* Count */}

      <p className="mt-1 text-xs text-foreground-faint">{count}</p>
    </Link>
  );
}
