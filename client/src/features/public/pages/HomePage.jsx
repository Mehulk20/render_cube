import {
  StatsBar,
  CTASection,
  CategoriesSection,
  FeaturedAssets,
  HowItWorks,
} from '../../public/components';

import { HeroSection, SearchSection } from '../sections';

import { CreatorSection } from '../../creator/components';

/**
 * HomePage — main landing page.
 * Composes all homepage sections in order.
 */
const HomePage = () => {
  return (
    <div className="page-transition">
      <HeroSection />
      <SearchSection />
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
