import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowLeft, Mail, SendHorizonal } from 'lucide-react';
import { InputField, PrimaryButton, EmailSentAnimation } from '../../components/auth';
import { AuthLayout } from '../../layouts';
import { isValidEmail } from '../../utils/validators';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [cooldown, setCooldown] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isValidEmail(email)) {
      setError('Enter a valid email address');
      return;
    }
    setError('');
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSent(true);
      setCooldown(30);
      const tick = setInterval(() => {
        setCooldown((c) => {
          if (c <= 1) {
            clearInterval(tick);
            return 0;
          }
          return c - 1;
        });
      }, 1000);
    }, 1100);
  };

  const handleResend = () => {
    if (cooldown > 0) return;
    setCooldown(30);
    const tick = setInterval(() => {
      setCooldown((c) => {
        if (c <= 1) {
          clearInterval(tick);
          return 0;
        }
        return c - 1;
      });
    }, 1000);
  };

  return (
    <AuthLayout
      title={sent ? '' : 'Forgot password?'}
      subtitle={sent ? '' : "No worries, we'll send you reset instructions"}
      cardFoot={
        <p className="mt-6 text-center text-sm text-ink-500 dark:text-ink-400">
          <Link
            to="/login"
            className="inline-flex items-center gap-1.5 font-semibold text-brand-600 transition-colors hover:text-brand-700 dark:text-brand-400"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to login
          </Link>
        </p>
      }
    >
      <AnimatePresence mode="wait">
        {!sent ? (
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
            <InputField
              id="email"
              label="Email Address"
              icon={Mail}
              type="email"
              placeholder="Enter your registered email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={error}
              autoComplete="email"
            />
            <PrimaryButton icon={SendHorizonal} loading={loading}>
              Send Reset Link
            </PrimaryButton>
          </motion.form>
        ) : (
          <motion.div
            key="sent"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
          >
            <EmailSentAnimation email={email} />

            <motion.button
              type="button"
              onClick={handleResend}
              disabled={cooldown > 0}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="mt-6 w-full rounded-xl border border-ink-200 py-3 text-sm font-semibold text-ink-700 transition-colors duration-200 hover:bg-ink-50 disabled:cursor-not-allowed disabled:opacity-50 dark:border-ink-700 dark:text-ink-200 dark:hover:bg-ink-800/50"
            >
              {cooldown > 0 ? `Resend email in ${cooldown}s` : 'Resend email'}
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </AuthLayout>
  );
}
