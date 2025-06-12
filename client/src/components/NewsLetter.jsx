function NewsLetter() {
  return (
    <section>
      {/* Column 1: Logo + Newsletter */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Subscribe to our newsletter</h2>
        <p className="text-sm mb-4 text-gray-400">
          Stay updated on new templates, deals, and features.
        </p>
        <form className="flex items-center bg-gray-800 rounded-lg overflow-hidden">
          <input
            type="email"
            placeholder="Your email"
            className="bg-transparent px-4 py-2 w-full text-white placeholder-gray-400 outline-none"
          />
          <button className="bg-blue-600 hover:bg-blue-500 px-4 py-2 text-sm font-semibold">
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}

export default NewsLetter;
