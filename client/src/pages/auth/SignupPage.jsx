import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, User, UserPlus } from 'lucide-react';
import {
  InputField,
  PasswordInput,
  Checkbox,
  PrimaryButton,
  SocialButton,
  Divider,
  SecurityNote,
  AuthCard,
} from '../../components/auth';

import { isNotEmpty, isValidEmail } from '../../utils/validators';
export default function SignupPage() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: '', email: '', password: '', confirm: '' });
  const [agree, setAgree] = useState(false);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const nextErrors = {};
    if (!isNotEmpty(form.name)) nextErrors.name = 'Enter your full name';
    if (!isValidEmail(form.email)) nextErrors.email = 'Enter a valid email address';
    if (form.password.length < 8) nextErrors.password = 'Use at least 8 characters';
    if (form.confirm !== form.password) nextErrors.confirm = 'Passwords do not match';
    if (!agree) nextErrors.agree = 'Please accept the Terms of Service';
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate('/login');
    }, 1200);
  };

  return (
    <AuthCard
      title="Create your account"
      subtitle="Join the marketplace and start creating today"
      cardFoot={
        <p className="mt-6 text-center text-sm text-ink-500 dark:text-ink-400">
          Already have an account?{' '}
          <Link
            to="/login"
            className="font-semibold text-brand-600 transition-colors hover:text-brand-700 dark:text-brand-400"
          >
            Log in
          </Link>
        </p>
      }
    >
      <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
        <InputField
          id="name"
          label="Full Name"
          icon={User}
          placeholder="Enter your full name"
          value={form.name}
          onChange={update('name')}
          error={errors.name}
          autoComplete="name"
        />

        <InputField
          id="email"
          label="Email Address"
          icon={Mail}
          type="email"
          placeholder="Enter your email"
          value={form.email}
          onChange={update('email')}
          error={errors.email}
          autoComplete="email"
        />

        <PasswordInput
          id="password"
          label="Password"
          placeholder="Create a password"
          value={form.password}
          onChange={update('password')}
          error={errors.password}
          showStrength
          autoComplete="new-password"
        />

        <PasswordInput
          id="confirm"
          label="Confirm Password"
          placeholder="Re-enter your password"
          value={form.confirm}
          onChange={update('confirm')}
          error={errors.confirm}
          autoComplete="new-password"
        />

        <div>
          <Checkbox
            id="agree"
            checked={agree}
            onChange={() => setAgree((v) => !v)}
            label={
              <span>
                I agree to the{' '}
                <a
                  href="#"
                  className="font-semibold text-brand-600 hover:text-brand-700 dark:text-brand-400"
                >
                  Terms of Service
                </a>{' '}
                and{' '}
                <a
                  href="#"
                  className="font-semibold text-brand-600 hover:text-brand-700 dark:text-brand-400"
                >
                  Privacy Policy
                </a>
              </span>
            }
          />
          {errors.agree && (
            <p className="mt-1.5 text-xs font-medium text-red-500">{errors.agree}</p>
          )}
        </div>

        <PrimaryButton icon={UserPlus} loading={loading}>
          Create Account
        </PrimaryButton>

        <Divider label="or continue with" />

        <div className="grid grid-cols-2 gap-3">
          <SocialButton provider="google" label="Google" />
          <SocialButton provider="github" label="GitHub" />
        </div>

        <SecurityNote text="Your data is protected with industry-standard encryption and security." />
      </form>
    </AuthCard>
  );
}
