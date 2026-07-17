import { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import { MobileBottomNav, MobileDrawer } from '../features/dashboard/components';
import { DashboardSidebar } from '../features/dashboard/components/sidebar';
import { DashboardNavbar } from '../features/dashboard/components';
import { PageTransition } from '../shared/components';
import { accountLinks, creatorLinks } from '../lib/navLinks';

export default function DashboardLayout({ mode = 'account' }) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const location = useLocation();
  const links = mode === 'creator' ? creatorLinks : accountLinks;

  return (
    <div className="flex min-h-screen flex-col bg-void">
      <DashboardNavbar />

      <div className="flex flex-1 overflow-hidden">
        <DashboardSidebar mode={mode} />

        <MobileDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} links={links} />

        <div className="flex flex-1 flex-col overflow-hidden">
          <main className="flex-1 overflow-y-auto px-4 pt-20 pb-24 sm:px-6 lg:px-8 lg:pb-10">
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
