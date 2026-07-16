import { Card } from '../../../shared/ui';

export default function ProfileEmptyState({ title, description }) {
  return (
    <Card className="p-8 text-center">
      <h3 className="font-display text-lg font-semibold text-ink">{title}</h3>

      <p className="mt-2 text-sm text-ink-faint">{description}</p>
    </Card>
  );
}
