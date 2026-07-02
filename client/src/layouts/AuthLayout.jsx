import { motion } from 'framer-motion';
import ThemeToggle from '../components/auth/ThemeToggle';
import BrandPanel from '../components/auth/BrandPanel';
import Logo from '../components/auth/Logo';

const pageTransition = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -12 },
  transition: { duration: 0.35, ease: 'easeOut' },
};

export default function AuthLayout({ title, subtitle, children, cardFoot = null }) {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-gradient-to-b from-white to-ink-50 dark:from-ink-950 dark:to-ink-900">
      <header className="relative z-20 flex items-center justify-between px-6 py-5 lg:absolute lg:inset-x-0 lg:top-0 lg:bg-transparent lg:px-10">
        <div className="lg:hidden">
          <Logo size="sm" />
        </div>
        <div className="ml-auto">
          <ThemeToggle />
        </div>
      </header>

      <main className="mx-auto flex min-h-[calc(100vh-84px)] w-full max-w-7xl flex-col items-center justify-center gap-10 px-4 py-6 lg:flex-row lg:items-center lg:justify-between lg:gap-10 lg:px-10 lg:py-24">
        <BrandPanel />

        <motion.div
          initial={pageTransition.initial}
          animate={pageTransition.animate}
          exit={pageTransition.exit}
          transition={pageTransition.transition}
          className="w-full max-w-md"
        >
          <div className="rounded-3xl border border-ink-100 bg-white/90 p-7 shadow-card backdrop-blur-sm dark:border-ink-800 dark:bg-ink-900/80 dark:shadow-card-dark sm:p-9">
            <h2 className="font-display text-2xl font-bold tracking-tight text-ink-900 dark:text-white sm:text-[28px]">
              {title}
            </h2>
            {subtitle && (
              <p className="mt-1.5 text-sm text-ink-500 dark:text-ink-400">{subtitle}</p>
            )}

            <div className="mt-7">{children}</div>
          </div>
          {cardFoot}
        </motion.div>
      </main>

      <footer className="relative z-10 border-t border-ink-100 px-6 py-6 dark:border-ink-800">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 text-xs text-ink-400 dark:text-ink-500 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} Render Cube. All rights reserved.</p>
          <nav className="flex items-center gap-4">
            <a href="#" className="transition-colors hover:text-brand-500">
              Terms of Service
            </a>
            <a href="#" className="transition-colors hover:text-brand-500">
              Privacy Policy
            </a>
            <a href="#" className="transition-colors hover:text-brand-500">
              Refund Policy
            </a>
            <a href="#" className="transition-colors hover:text-brand-500">
              Contact Us
            </a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
