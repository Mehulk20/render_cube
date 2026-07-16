import { ArrowRight, Briefcase, CheckCircle, Lock, Mail, User, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import Button from './Button';

const SPECIALTIES = [
  'Templates & UI',
  'Video & Motion',
  'Music & Audio',
  '3D Models',
  'Photography',
  'Fonts & Typography',
  'Code & Plugins',
  'Other',
];

const PERKS = ['Zero upfront fees', 'Keep up to 80% revenue', 'Reach a global audience'];

const inputClass = `
  focus-ring w-full rounded-xl border border-border bg-surface-raised py-3 pr-4 pl-11
  text-sm text-foreground placeholder:text-foreground-faint transition-all duration-300
  hover:border-border-strong focus:border-primary
`;

/**
 * CreatorSignupForm — inline "join as creator" form used inside CTASection.
 * Owns its own field state, submit handling, and success state so the
 * parent only needs to know whether to show it and how to close it.
 */
export default function CreatorSignupForm({ onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', password: '', specialty: '' });

  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-5 py-12">
        <div className="flex h-18 w-18 items-center justify-center rounded-full bg-success/10 ring-1 ring-success/20">
          <CheckCircle size={34} className="text-success" />
        </div>

        <div className="space-y-2">
          <h3 className="font-display text-3xl font-bold text-foreground">You're in! 🎉</h3>

          <p className="mx-auto max-w-sm text-sm leading-relaxed text-foreground-muted">
            Welcome to Estadious. Check your inbox to verify your email and start selling.
          </p>
        </div>

        <Button
          variant="primary"
          onClick={() => {
            onClose();
            setSubmitted(false);
          }}
        >
          Back to Home
        </Button>
      </div>
    );
  }

  return (
    <div className="mt-6 rounded-3xl border border-border bg-surface p-8 text-left shadow-floating transition-surface">
      {/* Header */}
      <div className="mb-8 flex items-start justify-between">
        <div>
          <h3 className="font-display text-3xl font-bold text-foreground">Join as a Creator</h3>
          <p className="mt-2 text-sm text-foreground-muted">Start selling your assets in minutes.</p>
        </div>

        <button
          onClick={onClose}
          aria-label="Close form"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface-raised text-foreground-soft transition-all duration-300 hover:bg-surface-hover hover:text-foreground"
        >
          <X size={16} />
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Name */}
        <div className="relative">
          <User size={16} className="pointer-events-none absolute top-1/2 left-4 -translate-y-1/2 text-foreground-faint" />
          <input
            type="text"
            required
            placeholder="Full name"
            value={form.name}
            onChange={update('name')}
            className={inputClass}
          />
        </div>

        {/* Email */}
        <div className="relative">
          <Mail size={16} className="pointer-events-none absolute top-1/2 left-4 -translate-y-1/2 text-foreground-faint" />
          <input
            type="email"
            required
            placeholder="Email address"
            value={form.email}
            onChange={update('email')}
            className={inputClass}
          />
        </div>

        {/* Password */}
        <div className="relative">
          <Lock size={16} className="pointer-events-none absolute top-1/2 left-4 -translate-y-1/2 text-foreground-faint" />
          <input
            type="password"
            required
            minLength={8}
            placeholder="Password (minimum 8 characters)"
            value={form.password}
            onChange={update('password')}
            className={inputClass}
          />
        </div>

        {/* Specialty */}
        <div className="relative">
          <Briefcase size={16} className="pointer-events-none absolute top-1/2 left-4 -translate-y-1/2 text-foreground-faint" />
          <select
            value={form.specialty}
            onChange={update('specialty')}
            required
            className={`${inputClass} appearance-none pr-10`}
          >
            <option value="">What do you create?</option>
            {SPECIALTIES.map((specialty) => (
              <option key={specialty}>{specialty}</option>
            ))}
          </select>

          <svg
            className="pointer-events-none absolute top-1/2 right-4 h-4 w-4 -translate-y-1/2 text-foreground-faint"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>

        {/* Creator Benefits */}
        <div className="space-y-2 pt-2">
          {PERKS.map((perk) => (
            <div key={perk} className="flex items-center gap-3 text-sm text-foreground-muted">
              <CheckCircle size={16} className="shrink-0 text-success" />
              <span>{perk}</span>
            </div>
          ))}
        </div>

        <Button type="submit" variant="primary" size="lg" className="group w-full justify-center">
          Create Creator Account
          <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
        </Button>
      </form>

      <div className="mt-6 border-t border-border pt-6 text-center">
        <p className="text-sm text-foreground-muted">
          Already have an account?{' '}
          <Link to="/login" className="font-semibold text-primary transition-colors duration-300 hover:text-primary-hover">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}
