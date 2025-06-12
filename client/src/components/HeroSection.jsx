function HeroSection() {
  return (
    <section className="relative px-8  py-5 text-white overflow-hidden">
      {/* Background image with blend */}
      <div className=" w-full h-full z-0">
        <img src="/assets/hero-section-bg.svg" alt="Abstract" className=" w-full h-full" />
      </div>

      <div className="absolute z-10 top-[10rem] left-[5rem]">
        <h1 className="text-5xl font-bold leading-tight">
          Explore
          <br />
          Premium
          <br />
          Templates
        </h1>
        <button className="mt-6 border border-white px-6 py-3 rounded-lg text-lg hover:bg-white hover:text-black transition">
          Browse Assets
        </button>
      </div>
    </section>
  );
}

export default HeroSection;
