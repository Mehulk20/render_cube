import {
  HeroSection,
  SearchBar,
  StatsBar,
  CTASection,
  CategoriesSection,
  FeaturedAssets,
  HowItWorks,
} from '../../components/public';

import { CreatorSection } from '../../components/creatorSection';

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
