import {
  HeroSection,
  SearchBar,
  StatsBar,
  CTASection,
  CategoriesSection,
  FeaturedAssets,
  HowItWorks,
} from '../../public/components';

import { CreatorSection } from '../../creator/components';

/**
 * HomePage — main landing page.
 * Composes all homepage sections in order.
 */
const HomePage = () => {
  return (
    <div className="page-transition">
      <HeroSection />
      <SearchBar />
      <StatsBar />
      <CategoriesSection />
      <FeaturedAssets />
      <CreatorSection />
      <HowItWorks />
      <CTASection />
    </div>
  );
};

export default HomePage;
