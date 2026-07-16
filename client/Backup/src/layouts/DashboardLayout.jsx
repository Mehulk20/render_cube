import { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { DashboardSidebar, MobileBottomNav, MobileDrawer } from '../components/layout';
import { DashboardNavbar } from '../components/dashboard';
import { PageTransition } from '../components/common';
import { accountLinks, creatorLinks } from '../lib/navLinks';

export default function DashboardLayout({ mode = 'account', title }) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const location = useLocation();
  const links = mode === 'creator' ? creatorLinks : accountLinks;

  return (
    <div className="flex flex-col bg-void">
      <DashboardNavbar />
      <div className="flex ">
        <DashboardSidebar mode={mode} />
        <MobileDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} links={links} />

        <div className="flex min-h-screen flex-1 flex-col">
          {/* <DashboardNavbar title={title} /> */}
          <main className="flex-1 px-4 pb-24 pt-6 sm:px-6 lg:px-8 lg:pb-10">
            <AnimatePresence mode="wait">
              <PageTransition key={location.pathname} className="mx-auto max-w-350">
                <Outlet />
              </PageTransition>
            </AnimatePresence>
          </main>
          <MobileBottomNav mode={mode} onMenuClick={() => setDrawerOpen(true)} />
        </div>
      </div>
    </div>
  );
}
