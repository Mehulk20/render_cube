function CreatorCard({ name, img }) {
  return (
    <div className="text-center text-white">
      <div className="w-24 h-24 mx-auto rounded-full bg-gray-800 mb-2" />
      <p>{name}</p>
    </div>
  );
}

export default CreatorCard;
