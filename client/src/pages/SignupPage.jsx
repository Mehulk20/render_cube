import { ArrowRight, CheckCircle, Eye, EyeOff } from 'lucide-react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../components/Button';

/**
 * SignupPage — registration form with name, email, password, and account type.
 * Dark mode aware.
 */
const SignupPage = () => {
  const [form, setForm] = useState({ name: '', email: '', password: '', accountType: 'buyer' });
  const [showPw, setShowPw] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const update = field => e => setForm(f => ({ ...f, [field]: e.target.value }));

  const handleSubmit = e => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => navigate('/marketplace'), 1000);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 flex items-center justify-center px-4 py-18 transition-colors duration-300 page-transition">
      <div className="w-full max-w-md">
        {/* Logo */}
        <Link to="/" className="flex items-center justify-center gap-2 mb-8">
          <div className="w-9 h-9 bg-primary rounded-xl flex items-center justify-center">
            <svg width="20" height="20" viewBox="0 0 18 18" fill="none">
              <path d="M3 9L9 3L15 9L9 15L3 9Z" fill="white" fillOpacity="0.9" />
              <path d="M6 9L9 6L12 9L9 12L6 9Z" fill="white" />
            </svg>
          </div>
          <span
            className="font-display font-bold text-2xl text-gray-900 dark:text-white"
            style={{ fontFamily: 'Syne' }}
          >
            AssetHub
          </span>
        </Link>

        <div className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-3xl p-8 shadow-sm">
          <h1
            className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-1"
            style={{ fontFamily: 'Syne' }}
          >
            Create an account
          </h1>
          <p className="text-gray-500 dark:text-gray-400 text-sm mb-6">
            Join 150,000+ creators on AssetHub.
          </p>

          {/* Account type toggle */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            {['buyer', 'creator'].map(type => (
              <button
                key={type}
                type="button"
                onClick={() => setForm(f => ({ ...f, accountType: type }))}
                className={`py-3 rounded-xl border-2 text-sm font-semibold capitalize transition-all ${
                  form.accountType === type
                    ? 'border-primary bg-purple-50 dark:bg-purple-950 text-primary'
                    : 'border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:border-gray-300'
                }`}
              >
                {type === 'buyer' ? '🛒 Buyer' : '🎨 Creator'}
              </button>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Full name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                Full Name
              </label>
              <input
                type="text"
                required
                value={form.name}
                onChange={update('name')}
                placeholder="Jane Smith"
                className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-sm text-gray-900 dark:text-white placeholder-gray-400 outline-none focus:border-primary transition-colors"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                Email
              </label>
              <input
                type="email"
                required
                value={form.email}
                onChange={update('email')}
                placeholder="you@example.com"
                className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-sm text-gray-900 dark:text-white placeholder-gray-400 outline-none focus:border-primary transition-colors"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPw ? 'text' : 'password'}
                  required
                  minLength={8}
                  value={form.password}
                  onChange={update('password')}
                  placeholder="Min. 8 characters"
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-sm text-gray-900 dark:text-white placeholder-gray-400 outline-none focus:border-primary transition-colors pr-11"
                />
                <button
                  type="button"
                  onClick={() => setShowPw(!showPw)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
                >
                  {showPw ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            {/* Terms */}
            <p className="text-xs text-gray-400 dark:text-gray-500">
              By creating an account you agree to our{' '}
              <a href="#" className="text-primary hover:underline">
                Terms of Service
              </a>{' '}
              and{' '}
              <a href="#" className="text-primary hover:underline">
                Privacy Policy
              </a>
              .
            </p>

            <Button
              type="submit"
              variant="primary"
              size="lg"
              className="w-full justify-center"
              disabled={loading}
            >
              {loading ? (
                'Creating account…'
              ) : (
                <>
                  <CheckCircle size={16} /> Create Account
                </>
              )}
            </Button>
          </form>

          {/* Benefits list */}
          <div className="mt-6 pt-6 border-t border-gray-100 dark:border-gray-800">
            <p className="text-xs text-gray-400 dark:text-gray-500 mb-3">What you get for free:</p>
            {['5 downloads/month', 'Browse 2M+ assets', 'Community access'].map(item => (
              <div
                key={item}
                className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-300 mb-1.5"
              >
                <CheckCircle size={11} className="text-primary" /> {item}
              </div>
            ))}
          </div>

          <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-5">
            Already have an account?{' '}
            <Link to="/login" className="text-primary font-semibold hover:underline">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
