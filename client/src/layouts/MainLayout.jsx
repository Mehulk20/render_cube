import { Outlet, useLocation } from 'react-router-dom';
import { Navbar } from '../features/public/components/navbar';
import { FooterSection } from '../features/public/sections';
import { ScrollToTop } from '../UI';
import { AnimatePresence } from 'framer-motion';
import { PageTransition } from '../shared/components';

/**
 * Layout — shared shell with Navbar at top and Footer at bottom.
 * <Outlet /> renders the matched child route page.
 */
const MainLayout = () => {
  const location = useLocation();
  return (
    <div className="min-h-screen bg-background transition-surface flex flex-col ">
      <ScrollToTop />
      <Navbar />
      <main id="main-content" tabIndex={-1} className="flex-1 outline-none">
        <AnimatePresence mode="wait">
          <PageTransition key={location.pathname} className="mx-auto">
            <Outlet />
          </PageTransition>
        </AnimatePresence>
      </main>
      <FooterSection />
    </div>
  );
};

export default MainLayout;
