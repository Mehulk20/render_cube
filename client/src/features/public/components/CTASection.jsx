import { ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import Button from './Button';
import { CreatorSignupForm } from '../sections';
import { Container } from '../../../shared/ui';

/**
 * CTASection — bottom-of-page call to action.
 * "Join as Creator" expands CreatorSignupForm inline instead of
 * navigating away, sliding in with a smooth transition.
 */
const CTASection = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <section className="relative overflow-hidden bg-background py-24 transition-surface lg:py-28">
      {/* Background */}
      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center">
        <div className="h-72 w-72 rounded-full bg-linear-to-br from-brand-400 to-brand-600 opacity-20 blur-3xl" />
      </div>

      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center">
        <div className="h-72 w-72 rounded-full bg-linear-to-br from-fuchsia to-brand-500 opacity-20 blur-3xl" />
      </div>

      <Container>
        <div className="relative z-10 mx-auto max-w-2xl text-center">
          {/* Default CTA */}
          <div
            className="transition-all duration-500 ease-out"
            style={{
              maxHeight: showForm ? '0px' : '420px',
              opacity: showForm ? 0 : 1,
              overflow: 'hidden',
              pointerEvents: showForm ? 'none' : 'auto',
            }}
          >
            <h2 className="font-display text-5xl font-bold text-foreground">
              Ready to Get Started?
            </h2>

            <p className="mt-5 text-lg text-foreground-muted">Join our creative community today.</p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link to="/marketplace">
                <Button variant="primary" size="lg" className="group">
                  Explore Assets
                  <ArrowRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Button>
              </Link>

              <Button variant="ghost" size="lg" onClick={() => setShowForm(true)}>
                Join as Creator
              </Button>
            </div>
          </div>

          {/* Form */}
          <div
            className="transition-all duration-500 ease-out"
            style={{
              maxHeight: showForm ? '760px' : '0px',
              opacity: showForm ? 1 : 0,
              overflow: 'hidden',
              pointerEvents: showForm ? 'auto' : 'none',
            }}
          >
            <CreatorSignupForm onClose={() => setShowForm(false)} />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CTASection;
