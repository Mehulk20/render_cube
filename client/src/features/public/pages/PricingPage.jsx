import { ArrowRight, CheckCircle, Zap } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../public/components';

const PLANS = [
  {
    name: 'Free',
    monthlyPrice: 0,
    yearlyPrice: 0,
    description: 'Perfect for exploring the marketplace.',
    color: 'border-border',
    badge: null,
    features: [
      '5 downloads per month',
      'Standard resolution assets',
      'Personal use license',
      'Community support',
      'Basic search filters',
    ],
    cta: 'Get Started Free',
    ctaVariant: 'outline',
  },
  {
    name: 'Pro',
    monthlyPrice: 29,
    yearlyPrice: 19,
    description: 'For freelancers and independent creators.',
    color: 'border-primary',
    badge: 'Most Popular',
    features: [
      'Unlimited downloads',
      '4K & high-res assets',
      'Commercial use license',
      'Priority email support',
      'Advanced search & filters',
      'Download history',
      'Early access to new releases',
    ],
    cta: 'Start Pro Trial',
    ctaVariant: 'primary',
  },
  {
    name: 'Team',
    monthlyPrice: 79,
    yearlyPrice: 59,
    description: 'For studios and growing teams.',
    color: 'border-border',
    badge: null,
    features: [
      'Everything in Pro',
      'Up to 10 team members',
      'Shared asset library',
      'Team usage analytics',
      'Dedicated account manager',
      'Custom license agreements',
      'API access',
    ],
    cta: 'Start Team Trial',
    ctaVariant: 'outline',
  },
];

const FAQS = [
  {
    q: 'Can I cancel my subscription anytime?',
    a: 'Yes, you can cancel at any time. Your access continues until the end of the billing period.',
  },
  {
    q: 'What license do I get with each plan?',
    a: 'All paid plans include a commercial license. Free accounts are limited to personal use only.',
  },
  {
    q: 'Is there a student discount?',
    a: 'Yes! Students get 50% off Pro plans with a valid educational email. Contact support to claim.',
  },
  {
    q: 'Do unused downloads roll over?',
    a: 'On the Free plan, downloads reset monthly with no rollover. Pro and Team plans have unlimited downloads.',
  },
];

/**
 * PricingPage — plan comparison with monthly/yearly toggle and FAQ section.
 */
const PricingPage = () => {
  const [isYearly, setIsYearly] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="min-h-screen bg-background transition-surface page-transition">
      {/* Hero */}
      <div className="pt-28 pb-16 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-2xl mx-auto">
          <span className="inline-flex items-center gap-2 bg-violet/10 border border-violet/20 text-primary text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-4">
            <Zap size={11} /> Simple Pricing
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Choose Your <span className="text-gradient">Plan</span>
          </h1>
          <p className="text-foreground-faint text-lg mb-8">
            Start for free. Upgrade when you're ready. Cancel anytime.
          </p>

          {/* Monthly / Yearly toggle */}
          <div className="inline-flex items-center bg-surface-raised rounded-full p-1 gap-1">
            <button
              onClick={() => setIsYearly(false)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                !isYearly ? 'bg-card shadow-sm text-foreground' : 'text-foreground-faint'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                isYearly ? 'bg-card shadow-sm text-foreground' : 'text-foreground-faint'
              }`}
            >
              Yearly <span className="text-success text-xs font-bold ml-1">Save 35%</span>
            </button>
          </div>
        </div>
      </div>

      {/* Plans grid */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid md:grid-cols-3 gap-6">
          {PLANS.map((plan) => {
            const price = isYearly ? plan.yearlyPrice : plan.monthlyPrice;
            const isPop = plan.name === 'Pro';

            return (
              <div
                key={plan.name}
                className={`relative bg-card border-2 ${plan.color} rounded-3xl p-8 flex flex-col transition-all duration-300 ${
                  isPop ? 'shadow-glow scale-[1.02]' : 'shadow-sm'
                }`}
              >
                {/* Popular badge */}
                {plan.badge && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold px-4 py-1.5 rounded-full">
                    {plan.badge}
                  </span>
                )}

                <div className="mb-6">
                  <h3 className="font-display text-xl font-bold text-foreground">{plan.name}</h3>
                  <p className="text-foreground-faint text-sm mt-1">{plan.description}</p>
                </div>

                {/* Price display */}
                <div className="mb-6">
                  <div className="flex items-end gap-1">
                    <span className="font-display text-5xl font-bold text-foreground">
                      ${price}
                    </span>
                    {price > 0 && <span className="text-foreground-faint mb-1.5">/mo</span>}
                  </div>
                  {isYearly && price > 0 && (
                    <p className="text-xs text-success mt-1 font-medium">
                      Billed ${price * 12}/year · Save ${(plan.monthlyPrice - price) * 12}/year
                    </p>
                  )}
                </div>

                {/* Feature list */}
                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2.5 text-sm text-foreground-muted"
                    >
                      <CheckCircle size={16} className="text-primary flex-shrink-0 mt-0.5" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link to="/signup">
                  <Button variant={plan.ctaVariant} size="md" className="w-full justify-center">
                    {plan.cta} <ArrowRight size={16} />
                  </Button>
                </Link>
              </div>
            );
          })}
        </div>

        {/* Enterprise note */}
        <div className="mt-10 text-center bg-surface-raised border border-border-soft rounded-2xl p-8">
          <h3 className="font-display text-xl font-bold text-foreground mb-2">Need Enterprise?</h3>
          <p className="text-foreground-faint text-sm mb-4">
            Custom pricing, SLAs, dedicated support, and volume licensing for large organisations.
          </p>
          <Link to="/signup" className="text-primary font-semibold hover:underline text-sm">
            Contact Sales →
          </Link>
        </div>
      </div>

      {/* FAQ section */}
      <div className="bg-surface-raised border-t border-border-soft py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-foreground mb-10 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-3">
            {FAQS.map((faq, i) => (
              <div
                key={i}
                className="bg-card border border-border-soft rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  aria-expanded={openFaq === i}
                  className="w-full text-left px-6 py-4 flex items-center justify-between"
                >
                  <span className="text-sm font-semibold text-foreground">{faq.q}</span>
                  <span
                    className={`text-primary text-lg font-bold transition-transform ${openFaq === i ? 'rotate-45' : ''}`}
                  >
                    +
                  </span>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-4 animate-fade-in">
                    <p className="text-sm text-foreground-faint leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
