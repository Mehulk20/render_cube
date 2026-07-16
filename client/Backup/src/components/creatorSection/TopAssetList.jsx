import TopAssetItem from './TopAssetItem';
import { topAssets } from './creator-data';

export default function TopAssetList() {
  return (
    <div>
      <div className="mb-4 flex items-center justify-between">
        <h4 className="text-sm font-semibold text-foreground">Top Assets</h4>

        <span className="text-xs text-foreground-faint">This Month</span>
      </div>

      <div className="space-y-2">
        {topAssets.map((asset, index) => (
          <TopAssetItem key={asset.id} {...asset} active={index === 0} />
        ))}
      </div>
    </div>
  );
}
