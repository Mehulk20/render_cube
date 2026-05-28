const steps = [
  { number: '1', title: 'Discover', description: 'Browse millions of premium assets across various categories.' },
  { number: '2', title: 'Purchase', description: 'Choose the perfect asset and download instantly at a fair price.' },
  { number: '3', title: 'Create Amazing', description: 'Use high-quality assets to bring your projects to life faster.' },
];

/**
 * HowItWorks — 3-step process section. Dark mode aware.
 */
const HowItWorks = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50/50 dark:bg-gray-900/50 transition-colors duration-300">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-display font-bold text-gray-900 dark:text-white mb-14" style={{ fontFamily: 'Syne' }}>
          How It Works
        </h2>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting dashed line */}
          <div className="hidden md:block absolute top-7 h-px border-t-2 border-dashed border-purple-200 dark:border-purple-800 z-0" style={{ left: '20%', right: '20%' }} />

          {steps.map(({ number, title, description }) => (
            <div key={title} className="relative z-10 flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-2xl bg-primary text-white font-display font-bold text-xl flex items-center justify-center mb-5 shadow-lg shadow-purple-200 dark:shadow-purple-900" style={{ fontFamily: 'Syne' }}>
                {number}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{title}</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
