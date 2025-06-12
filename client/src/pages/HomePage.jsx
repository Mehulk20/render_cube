import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import CategoryFilters from '../components/CategoryFilters';
import AssetGrid from '../components/AssetGrid';
import CreatorList from '../components/CreatorList';

function HomePage() {
  return (
    <div className="bg-black min-h-screen">
      <HeroSection />
      <CategoryFilters />
      <AssetGrid title="Trending Assets" />
      <AssetGrid title="New Arrivals" />
      <CreatorList />
    </div>
  );
}

export default HomePage;
