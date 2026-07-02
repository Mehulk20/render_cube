import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { LogIn, User } from 'lucide-react';
import {
  InputField,
  PasswordInput,
  Checkbox,
  PrimaryButton,
  SocialButton,
  Divider,
  SecurityNote,
} from '../../components/auth';

import { AuthLayout } from '../../layouts';
import { isNotEmpty } from '../../utils/validators';

export default function LoginPage() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ identifier: '', password: '' });
  const [remember, setRemember] = useState(true);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const nextErrors = {};
    if (!isNotEmpty(form.identifier)) nextErrors.identifier = 'Enter your email or username';
    if (!isNotEmpty(form.password)) nextErrors.password = 'Enter your password';
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate('/login');
    }, 1200);
  };

  return (
    <AuthLayout
      title="Welcome back"
      subtitle="Login to your account to continue"
      cardFoot={
        <p className="mt-6 text-center text-sm text-ink-500 dark:text-ink-400">
          Don't have an account?{' '}
          <Link
            to="/signup"
            className="font-semibold text-brand-600 transition-colors hover:text-brand-700 dark:text-brand-400"
          >
            Sign up
          </Link>
        </p>
      }
    >
      <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
        <InputField
          id="identifier"
          label="Email or Username"
          icon={User}
          placeholder="Enter your email or username"
          value={form.identifier}
          onChange={update('identifier')}
          error={errors.identifier}
          autoComplete="username"
        />

        <div>
          <PasswordInput
            id="password"
            label="Password"
            placeholder="Enter your password"
            value={form.password}
            onChange={update('password')}
            error={errors.password}
            autoComplete="current-password"
          />
          <div className="mt-3 flex items-center justify-between">
            <Checkbox
              id="remember"
              label="Remember me"
              checked={remember}
              onChange={() => setRemember((r) => !r)}
            />
            <Link
              to="/forgot-password"
              className="text-sm font-semibold text-brand-600 transition-colors hover:text-brand-700 dark:text-brand-400"
            >
              Forgot password?
            </Link>
          </div>
        </div>

        <PrimaryButton icon={LogIn} loading={loading}>
          Login
        </PrimaryButton>

        <Divider label="or continue with" />

        <div className="grid grid-cols-2 gap-3">
          <SocialButton provider="google" label="Google" />
          <SocialButton provider="github" label="GitHub" />
        </div>

        <SecurityNote text="Your data is protected with industry-standard encryption and security." />
      </form>
    </AuthLayout>
  );
}
