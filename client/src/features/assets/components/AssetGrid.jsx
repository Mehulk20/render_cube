import AssetCard from './AssetCard';
import { Skeleton } from '../../../shared/ui';

export default function AssetGrid({ assets, loading = false }) {
  if (loading) {
    return (
      <div className="grid grid-cols-2 gap-md sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {Array.from({ length: 10 }).map((_, i) => (
          <div key={i} className="overflow-hidden rounded-2xl border border-border bg-surface">
            <Skeleton className="aspect-4/3 rounded-none" />
            <div className="space-y-2 p-3.5">
              <Skeleton className="h-3.5 w-3/4" />
              <Skeleton className="h-3 w-1/2" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {assets.map((asset, i) => (
        <AssetCard key={asset.id} asset={asset} index={i} />
      ))}
    </div>
  );
}
