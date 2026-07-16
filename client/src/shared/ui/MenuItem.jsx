import clsx from 'clsx';
import { ArrowUpRight } from 'lucide-react';

export default function MenuItem({
  as: Component = 'button',
  icon: Icon,
  text,
  badge,
  danger = false,
  showArrow = true,
  disabled = false,
  className,
  children,
  ...props
}) {
  const isButton = Component === 'button';

  return (
    <Component
      {...props}
      {...(isButton ? { type: 'button', disabled } : {})}
      className={clsx(
        'group flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-sm',
        'transition-all duration-200',
        danger ? 'hover:bg-danger/10' : 'hover:bg-surface-hover',
        disabled && 'pointer-events-none opacity-50',
        className
      )}
    >
      <div
        className={clsx('flex items-center gap-3', danger ? 'text-danger' : 'text-foreground-soft')}
      >
        {Icon && <Icon size={18} className="shrink-0" />}

        <span className="truncate">{text}</span>

        {children}
      </div>

      {badge ? (
        <span className="rounded-full bg-primary/15 px-2 py-0.5 text-xs font-medium text-primary">
          {badge}
        </span>
      ) : (
        showArrow && (
          <ArrowUpRight
            size={16}
            className={clsx(
              'text-foreground-faint transition-transform duration-200',
              'group-hover:-translate-y-0.5 group-hover:translate-x-0.5'
            )}
          />
        )
      )}
    </Component>
  );
}
