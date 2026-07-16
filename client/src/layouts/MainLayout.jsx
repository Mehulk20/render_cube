import { Outlet } from 'react-router-dom';
import { Navbar, Footer } from '../features/public/components';
import { ScrollToTop } from '../UI';

/**
 * Layout — shared shell with Navbar at top and Footer at bottom.
 * <Outlet /> renders the matched child route page.
 */
const MainLayout = () => {
  return (
    <div className="min-h-screen bg-background transition-surface flex flex-col ">
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
