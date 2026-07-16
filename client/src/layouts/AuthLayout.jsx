import { BrandPanel, AuthFooter } from '../features/auth/components';
import { Navbar } from '../features/public/components';
import { ScrollToTop } from '../UI';
import AnimatedOutlet from '../UI/AnimatedOutlet';

const AuthLayout = () => {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-linear-to-b from-surface to-background">
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
