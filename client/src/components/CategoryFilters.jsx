const filters = ['After Effects', 'Blender', 'Presets', 'Logos', 'Illustrator'];
function CategoryFilters() {
  return (
    <div className="flex flex-wrap gap-4 px-8 py-4">
      {filters.map((filter, idx) => (
        <button key={idx} className="bg-gray-800 px-4 py-2 rounded-lg text-white hover:bg-gray-700">
          {filter}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilters;
