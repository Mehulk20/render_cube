const AuthFooter = () => {
  return (
    <footer className="relative z-10 border-t border-border-soft px-6 py-6">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 text-xs text-foreground-faint sm:flex-row">
        <p>&copy; {new Date().getFullYear()} Render Cube. All rights reserved.</p>

        <nav className="flex items-center gap-4">
          <a href="#" className="transition-colors duration-[var(--duration-fast)] hover:text-primary">
            Terms of Service
          </a>
          <a href="#" className="transition-colors duration-[var(--duration-fast)] hover:text-primary">
            Privacy Policy
          </a>
          <a href="#" className="transition-colors duration-[var(--duration-fast)] hover:text-primary">
            Refund Policy
          </a>
          <a href="#" className="transition-colors duration-[var(--duration-fast)] hover:text-primary">
            Contact Us
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default AuthFooter;
