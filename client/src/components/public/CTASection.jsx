import { ArrowRight, Briefcase, CheckCircle, Lock, Mail, User, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';

/**
 * CTASection — bottom-of-page call to action.
 *
 * FIX: "Join as Creator" now expands an inline sign-up form within the same
 * section instead of navigating away. The form slides in with a smooth
 * CSS transition and can be dismissed with an X button.
 *
 * Dark mode aware.
 */
const CTASection = () => {
  const [showForm, setShowForm] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', password: '', specialty: '' });

  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-white dark:bg-gray-950 transition-colors duration-300">
      {/* Background blur blobs */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-64 h-64 opacity-20 pointer-events-none">
        <div className="w-full h-full bg-gradient-to-br from-purple-400 to-indigo-400 rounded-full blur-3xl" />
      </div>
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-64 h-64 opacity-20 pointer-events-none">
        <div className="w-full h-full bg-gradient-to-br from-pink-400 to-purple-400 rounded-full blur-3xl" />
      </div>

      <div className="max-w-2xl mx-auto text-center relative z-10">

        {/* ── Default CTA state ── */}
        <div
          className="transition-all duration-500 ease-in-out"
          style={{
            maxHeight: showForm ? '0px' : '400px',
            opacity: showForm ? 0 : 1,
            overflow: 'hidden',
            pointerEvents: showForm ? 'none' : 'auto',
          }}
        >
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-gray-900 dark:text-white mb-4" style={{ fontFamily: 'Syne' }}>
            Ready to Get Started?
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-lg mb-10">Join our creative community today.</p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link to="/marketplace">
              <Button variant="primary" size="lg">
                Explore Assets <ArrowRight size={16} />
              </Button>
            </Link>
            {/* Opens inline form instead of navigating */}
            <button
              onClick={() => setShowForm(true)}
              className="text-gray-700 dark:text-gray-300 font-semibold text-base px-6 py-3 hover:text-primary transition-colors"
            >
              Join as Creator
            </button>
          </div>
        </div>

        {/* ── Inline creator sign-up form ── */}
        <div
          className="transition-all duration-500 ease-in-out"
          style={{
            maxHeight: showForm ? '700px' : '0px',
            opacity: showForm ? 1 : 0,
            overflow: 'hidden',
            pointerEvents: showForm ? 'auto' : 'none',
          }}
        >
          {submitted ? (
            /* Success state */
            <div className="py-10 flex flex-col items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-950 flex items-center justify-center">
                <CheckCircle size={32} className="text-green-500" />
              </div>
              <h3 className="text-2xl font-display font-bold text-gray-900 dark:text-white" style={{ fontFamily: 'Syne' }}>
                You're in! 🎉
              </h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm max-w-xs">
                Welcome to AssetHub. Check your inbox to verify your email and start selling.
              </p>
              <Button variant="primary" size="md" onClick={() => { setShowForm(false); setSubmitted(false); }}>
                Back to Home
              </Button>
            </div>
          ) : (
            <div className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-3xl p-8 text-left shadow-xl mt-4">

              {/* Form header */}
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-display font-bold text-gray-900 dark:text-white" style={{ fontFamily: 'Syne' }}>
                    Join as a Creator
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">Start selling your assets in minutes</p>
                </div>
                <button
                  onClick={() => setShowForm(false)}
                  aria-label="Close form"
                  className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-500 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors flex-shrink-0 mt-0.5"
                >
                  <X size={16} />
                </button>
              </div>

              <form
                onSubmit={handleSubmit}
                className="space-y-4"
              >
                {/* Name */}
                <div className="relative">
                  <User size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    required
                    placeholder="Full name"
                    value={form.name}
                    onChange={update('name')}
                    className="w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-sm text-gray-900 dark:text-white placeholder-gray-400 outline-none focus:border-primary transition-colors"
                  />
                </div>

                {/* Email */}
                <div className="relative">
                  <Mail size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="email"
                    required
                    placeholder="Email address"
                    value={form.email}
                    onChange={update('email')}
                    className="w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-sm text-gray-900 dark:text-white placeholder-gray-400 outline-none focus:border-primary transition-colors"
                  />
                </div>

                {/* Password */}
                <div className="relative">
                  <Lock size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="password"
                    required
                    minLength={8}
                    placeholder="Password (min. 8 chars)"
                    value={form.password}
                    onChange={update('password')}
                    className="w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-sm text-gray-900 dark:text-white placeholder-gray-400 outline-none focus:border-primary transition-colors"
                  />
                </div>

                {/* Specialty */}
                <div className="relative">
                  <Briefcase size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                  <select
                    value={form.specialty}
                    onChange={update('specialty')}
                    required
                    className="w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-sm text-gray-900 dark:text-white outline-none focus:border-primary transition-colors appearance-none"
                  >
                    <option value="">What do you create?</option>
                    <option>Templates & UI</option>
                    <option>Video & Motion</option>
                    <option>Music & Audio</option>
                    <option>3D Models</option>
                    <option>Photography</option>
                    <option>Fonts & Typography</option>
                    <option>Code & Plugins</option>
                    <option>Other</option>
                  </select>
                </div>

                {/* Perks */}
                <div className="flex flex-col gap-1.5 py-1">
                  {['Zero upfront fees', 'Keep up to 80% revenue', 'Reach a global audience'].map((perk) => (
                    <div key={perk} className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400">
                      <CheckCircle size={14} className="text-primary flex-shrink-0" />
                      {perk}
                    </div>
                  ))}
                </div>

                <Button type="submit" variant="primary" size="lg" className="w-full justify-center">
                  Create Creator Account <ArrowRight size={16} />
                </Button>
              </form>

              <p className="text-center text-xs text-gray-400 dark:text-gray-500 mt-4">
                Already have an account?{' '}
                <Link to="/login" className="text-primary hover:underline font-medium">Log in</Link>
              </p>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};

export default CTASection;
