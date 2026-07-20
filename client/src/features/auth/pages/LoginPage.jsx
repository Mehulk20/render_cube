import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { LogIn, User } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { useLoginMutation, setCredentials } from '../services';

import {
  InputField,
  PasswordInput,
  Checkbox,
  PrimaryButton,
  SocialButton,
  Divider,
  SecurityNote,
  AuthCard,
} from '../components';

import { isNotEmpty } from '../../../utils/validators';

export default function LoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const location = useLocation();

  const [login, { isLoading }] = useLoginMutation();

  const [form, setForm] = useState({ identifier: '', password: '' });
  const [errors, setErrors] = useState({});

  // const from = location.state?.from?.pathname || '/account/profile';

  const update = (key) => (e) => {
    const value = e.target.value;

    setForm((prev) => ({
      ...prev,
      [key]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [key]: undefined,
      api: undefined,
    }));
  };

  const handleSubmit = async (e) => {
    if (isLoading) return;

    e.preventDefault();

    const nextErrors = {};

    if (!isNotEmpty(form.identifier)) nextErrors.identifier = 'Enter your email or username';

    if (!isNotEmpty(form.password)) nextErrors.password = 'Enter your password';

    setErrors(nextErrors);

    if (Object.keys(nextErrors).length) return;

    try {
      const response = await login(form).unwrap();

      if (!response?.data?.accessToken) {
        throw new Error('Invalid login response');
      }

      const { accessToken, user } = response.data;

      dispatch(
        setCredentials({
          accessToken,
          user,
        })
      );

      localStorage.setItem('accessToken', accessToken);

      navigate('/account', {
        replace: true,
      });
    } catch (error) {
      console.error(error);

      setErrors({
        api: error?.data?.message || 'Invalid email/username or password.',
      });
    }
  };

  return (
    <AuthCard
      title="Welcome back"
      subtitle="Login to your account to continue"
      cardFoot={
        <p className="mt-6 text-center text-sm text-foreground-faint">
          Don't have an account?{' '}
          <Link to="/signup" className="font-semibold text-violet hover:text-violet-hover">
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
            <Checkbox id="remember" label="Remember me" />
            <Link
              to="/forgot-password"
              className="text-sm font-semibold text-violet transition-colors hover:text-violet-hover"
            >
              Forgot password?
            </Link>
          </div>
        </div>
        {errors.api && (
          <p className="rounded-lg border border-red-500/30 bg-red-500/10 p-3 text-sm text-red-400">
            {errors.api}
          </p>
        )}
        <PrimaryButton icon={LogIn} loading={isLoading}>
          Login
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
