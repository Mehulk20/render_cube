import { DownloadsChart, AssetTable } from '../components';

import { downloadsSeries, myAssets } from '../../../data/mock';

export default function CreatorAnalyticsSection() {
  return (
    <div className="space-y-6">
      <DownloadsChart data={downloadsSeries} />

      <AssetTable items={myAssets} />
    </div>
  );
}
