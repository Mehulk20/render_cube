import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { KeyRound } from 'lucide-react';
import { PasswordInput, PrimaryButton, SuccessCheck } from '../../components/auth';
import { AuthLayout } from '../../layouts';

export default function ResetPasswordPage() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ password: '', confirm: '' });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const nextErrors = {};
    if (form.password.length < 8) nextErrors.password = 'Use at least 8 characters';
    if (form.confirm !== form.password) nextErrors.confirm = 'Passwords do not match';
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setDone(true);
    }, 1100);
  };

  return (
    <AuthLayout
      title={done ? '' : 'Reset password'}
      subtitle={done ? '' : 'Create a new password for your account'}
      cardFoot={
        !done ? (
          <p className="mt-6 text-center text-sm text-ink-500 dark:text-ink-400">
            Remembered it?{' '}
            <Link
              to="/login"
              className="font-semibold text-brand-600 transition-colors hover:text-brand-700 dark:text-brand-400"
            >
              Back to login
            </Link>
          </p>
        ) : null
      }
    >
      <AnimatePresence mode="wait">
        {!done ? (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.25 }}
            onSubmit={handleSubmit}
            noValidate
            className="flex flex-col gap-5"
          >
            <PasswordInput
              id="password"
              label="New Password"
              placeholder="Enter your new password"
              value={form.password}
              onChange={update('password')}
              error={errors.password}
              showStrength
              autoComplete="new-password"
            />
            <PasswordInput
              id="confirm"
              label="Confirm New Password"
              placeholder="Re-enter your new password"
              value={form.confirm}
              onChange={update('confirm')}
              error={errors.confirm}
              autoComplete="new-password"
            />
            <PrimaryButton icon={KeyRound} loading={loading}>
              Reset Password
            </PrimaryButton>
          </motion.form>
        ) : (
          <motion.div
            key="done"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
          >
            <SuccessCheck
              title="Password reset"
              description="Your password has been changed successfully. You can now log in with your new password."
            />
            <PrimaryButton type="button" onClick={() => navigate('/login')} className="mt-2">
              Continue to login
            </PrimaryButton>
          </motion.div>
        )}
      </AnimatePresence>
    </AuthLayout>
  );
}
