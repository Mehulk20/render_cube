import CreatorCard from './CreatorCard';

const creators = ['Rico Fratturm', 'Martin Strauke', 'John Stern', 'Kiao Hang'];

function CreatorList() {
  return (
    <section className="px-8 py-10">
      <h2 className="text-2xl text-white mb-4">Top Creators</h2>
      <div className="flex gap-8 flex-wrap">
        {creators.map((name, idx) => (
          <CreatorCard key={idx} name={name} />
        ))}
      </div>
    </section>
  );
}

export default CreatorList;
