function AssetCard({ title, price, img }) {
  return (
    <div className="bg-gray-900 rounded-lg overflow-hidden p-2">
      <div className="h-40 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg mb-2" />
      <div className="text-white">
        <h4>{title}</h4>
        <p className="text-sm text-gray-400">${price}</p>
      </div>
    </div>
  );
}

export default AssetCard;
