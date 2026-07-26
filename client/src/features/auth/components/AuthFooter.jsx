const AuthFooter = () => {
  return (
    <footer className="relative z-dropdown border-t border-border-soft px-lg py-lg">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-md text-xs text-foreground-faint sm:flex-row">
        <p>&copy; {new Date().getFullYear()} Render Cube. All rights reserved.</p>

        <nav className="flex items-center gap-lg">
          <a href="#" className="motion-link hover:text-brand-500">
            Terms of Service
          </a>
          <a href="#" className="motion-link hover:text-brand-500">
            Privacy Policy
          </a>
          <a href="#" className="motion-link hover:text-brand-500">
            Refund Policy
          </a>
          <a href="#" className="motion-link hover:text-brand-500">
            Contact Us
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default AuthFooter;
