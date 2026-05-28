import HeroSection from '../components/HeroSection';
import SearchBar from '../components/SearchBar';
import StatsBar from '../components/StatsBar';
import CategoriesSection from '../components/CategoriesSection';
import FeaturedAssets from '../components/FeaturedAssets';
import CreatorSection from '../components/CreatorSection';
import HowItWorks from '../components/HowItWorks';
import CTASection from '../components/CTASection';

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
