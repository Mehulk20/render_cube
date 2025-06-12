import AssetCard from './AssetCard';

const sampleAssets = [
  { title: 'After Effects', price: '14.99' },
  { title: 'Amorptma', price: '3.99' },
  { title: 'Audrakimn', price: '4.99' },
];

function AssetGrid({ title }) {
  return (
    <section className="px-8 py-6">
      <h2 className="text-2xl text-white mb-4">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {sampleAssets.map((asset, index) => (
          <AssetCard key={index} {...asset} />
        ))}
      </div>
    </section>
  );
}

export default AssetGrid;
