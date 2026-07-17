import { Card } from '../../../shared/ui';

export default function ProfileInfo({ user }) {
  return (
    <Card className="space-y-4 p-5">
      <h3 className="font-display text-sm font-semibold text-ink">Creator Information</h3>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <p className="text-xs text-ink-faint">Store Name</p>

          <p className="mt-0.5 text-sm text-ink">{user.storeName}</p>
        </div>

        <div>
          <p className="text-xs text-ink-faint">Store URL</p>

          <p className="mt-0.5 text-sm text-violet">rendercube.com/{user.username}</p>
        </div>

        <div className="sm:col-span-2">
          <p className="text-xs text-ink-faint">Store Description</p>

          <p className="mt-0.5 text-sm text-ink-soft">{user.storeDescription}</p>
        </div>

        <div>
          <p className="text-xs text-ink-faint">Store Category</p>

          <p className="mt-0.5 text-sm text-ink">{user.storeCategory}</p>
        </div>
      </div>
    </Card>
  );
}
