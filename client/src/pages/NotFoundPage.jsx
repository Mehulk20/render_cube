import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';

/**
 * NotFoundPage — 404 error page.
 * Dark mode aware.
 */
const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 flex flex-col items-center justify-center text-center px-4 transition-colors duration-300 page-transition">
      {/* Decorative blob */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-100 dark:bg-purple-900/20 rounded-full blur-3xl opacity-40 pointer-events-none" />

      <div className="relative z-10">
        <p className="text-8xl font-display font-black text-gradient mb-2" style={{ fontFamily: 'Syne' }}>404</p>
        <h1 className="text-3xl font-display font-bold text-gray-900 dark:text-white mb-3" style={{ fontFamily: 'Syne' }}>
          Page Not Found
        </h1>
        <p className="text-gray-500 dark:text-gray-400 text-base mb-8 max-w-sm">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link to="/">
            <Button variant="primary" size="lg">
              <ArrowLeft size={16} /> Back to Home
            </Button>
          </Link>
          <Link to="/marketplace">
            <Button variant="outline" size="lg">Browse Assets</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
