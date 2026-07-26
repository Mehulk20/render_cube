import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../../public/components';

/**
 * NotFoundPage — 404 error page.
 */
const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center text-center px-4 transition-surface page-transition">
      {/* Decorative blob */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand-500/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10">
        <p className="font-display text-8xl font-black text-gradient mb-2">404</p>
        <h1 className="font-display text-3xl font-bold text-foreground mb-3">Page Not Found</h1>
        <p className="text-foreground-faint text-base mb-8 max-w-sm">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link to="/">
            <Button variant="primary" size="lg">
              <ArrowLeft size={16} /> Back to Home
            </Button>
          </Link>
          <Link to="/marketplace">
            <Button variant="outline" size="lg">
              Browse Assets
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
