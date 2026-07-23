import { Card } from '../../../shared/ui';

export default function ProfileAbout({ bio }) {
  return (
    <Card className="p-5">
      <h3 className="mb-2 font-display text-sm font-semibold text-ink">About</h3>

      <p className="text-sm leading-relaxed text-ink-soft">{bio || 'No bio added yet.'}</p>
    </Card>
  );
}
