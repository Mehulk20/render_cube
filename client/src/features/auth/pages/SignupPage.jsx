import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Mail, User, UserPlus } from 'lucide-react';
import { setCredentials, useRegisterMutation } from '../services';
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

import { validateRegisterForm } from '../../../utils/validators';

export default function SignupPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    username: '',
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [agree, setAgree] = useState(false);
  const [errors, setErrors] = useState({});
  const [register, { isLoading }] = useRegisterMutation();

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = async (e) => {
    if (isLoading) return;
    e.preventDefault();
    const nextErrors = validateRegisterForm(form, agree);

    setErrors(nextErrors);

    if (Object.keys(nextErrors).length) return;

    try {
      const response = await register(form).unwrap();

      if (!response?.data?.accessToken) {
        throw new Error('Invalid signup response');
      }

      const { accessToken, user } = response.data;

      dispatch(setCredentials({ accessToken, user }));

      localStorage.setItem('accessToken', accessToken);

      navigate('/account', { replace: true });
    } catch (error) {
      console.error(error);

      setErrors((prev) => ({
        ...prev,
        ...error?.data?.errors,
        api: error?.data?.message,
      }));
    }
  };

  return (
    <AuthCard
      title="Create your account"
      subtitle="Join the marketplace and start creating today"
      cardFoot={
        <p className="mt-6 text-center text-sm text-foreground-faint">
          Already have an account?{' '}
          <Link
            to="/login"
            className="font-semibold text-violet transition-colors hover:text-violet-hover"
          >
            Log in
          </Link>
        </p>
      }
    >
      <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
        <InputField
          id="username"
          label="username"
          icon={Mail}
          type="Username"
          placeholder="set you unique username"
          value={form.username}
          onChange={update('username')}
          error={errors.username}
          autoComplete="username"
        />

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
          id="identifier"
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
          value={form.confirmPassword}
          onChange={update('confirmPassword')}
          error={errors.confirmPassword}
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
                <a href="#" className="font-semibold text-violet hover:text-violet-hover">
                  Terms of Service
                </a>{' '}
                and{' '}
                <a href="#" className="font-semibold text-violet hover:text-violet-hover">
                  Privacy Policy
                </a>
              </span>
            }
          />
          {errors.agree && <p className="mt-1.5 text-xs font-medium text-danger">{errors.agree}</p>}
        </div>

        <PrimaryButton icon={UserPlus} loading={isLoading}>
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
