import { BrandPanel, Logo, AuthFooter } from '../components/auth';
import { Navbar } from '../components/public';
import { ScrollToTop } from '../UI';
import AnimatedOutlet from '../UI/AnimatedOutlet';
import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-gradient-to-b from-white to-ink-50 dark:from-ink-950 dark:to-ink-900">
      {/* <AuthHeader /> */}
      <ScrollToTop />
      <Navbar variant="auth" />
      <main className="mx-auto flex min-h-[calc(100vh-84px)] w-full max-w-7xl flex-col items-center justify-center gap-10 px-4 py-6 lg:flex-row lg:items-center lg:justify-between lg:gap-10 lg:px-10 lg:py-24">
        <BrandPanel />

        <AnimatedOutlet />
      </main>

      <AuthFooter />
    </div>
  );
};

export default AuthLayout;
