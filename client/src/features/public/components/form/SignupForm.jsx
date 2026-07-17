import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

import Button from '../Button';
import SignupBenefits from './SignupBenefits';
import SignupFields from './SignupFields';
import SignupHeader from './SignupHeader';

export default function SignupForm({ form, update, onSubmit, onClose }) {
  return (
    <div className="mt-6 rounded-3xl border border-border bg-surface p-8 text-left shadow-floating transition-surface">
      <SignupHeader onClose={onClose} />

      <form onSubmit={onSubmit} className="space-y-5">
        <SignupFields form={form} update={update} />

        <SignupBenefits />

        <Button type="submit" variant="primary" size="lg" className="group w-full justify-center">
          Create Creator Account
          <ArrowRight
            size={18}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </Button>
      </form>

      <div className="mt-6 border-t border-border pt-6 text-center">
        <p className="text-sm text-foreground-muted">
          Already have an account?{' '}
          <Link
            to="/login"
            className="font-semibold text-primary transition-colors duration-300 hover:text-primary-hover"
          >
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}
