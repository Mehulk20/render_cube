import { Button } from '../../../../shared/ui';

export default function SidebarCTA({
  title,
  description,
  buttonText,
  buttonProps = {},
  className = '',
}) {
  return (
    <div className={className}>
      <p className="font-display text-sm font-semibold text-ink">{title}</p>

      <p className="mt-1 text-xs text-ink-faint">{description}</p>

      <Button size="sm" className="mt-4 w-full" {...buttonProps}>
        {buttonText}
      </Button>
    </div>
  );
}
