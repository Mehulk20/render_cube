const AuthFooter = () => {
  return (
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
  );
};

export default AuthFooter;
