import { Outlet } from 'react-router-dom';
import { Navbar, Footer } from '../components';
import { ScrollToTop } from '../UI';

/**
 * Layout — shared shell with Navbar at top and Footer at bottom.
 * <Outlet /> renders the matched child route page.
 */
const MainLayout = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300 flex flex-col">
      <ScrollToTop />
      <Navbar />
      <main id="main-content" tabIndex={-1} className="flex-1 outline-none">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
