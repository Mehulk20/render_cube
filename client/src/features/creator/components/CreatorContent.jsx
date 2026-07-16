import { ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

import { Button } from '../../../shared/ui';
import { creatorBenefits } from './creator-data';

export default function CreatorContent() {
  return (
    <div
      className="
        flex
        flex-col
        justify-center
        p-8
        lg:p-14
      "
    >
      {/* Eyebrow */}

      <span
        className="
          mb-4
          text-xs
          font-semibold
          uppercase
          tracking-widest
          text-primary
        "
      >
        For Creators
      </span>

      {/* Heading */}

      <h2
        className="
          max-w-xl
          font-display
          text-4xl
          font-bold
          leading-tight
          text-foreground
          lg:text-5xl
        "
      >
        Turn Your Ideas Into <span className="text-gradient">Income</span>
      </h2>

      {/* Description */}

      <p
        className="
          mt-6
          max-w-md
          text-base
          leading-relaxed
          text-foreground-muted
        "
      >
        Share your creativity with creators around the world. Publish once, sell forever, and let
        Estadious handle payments, delivery, licensing and discoverability.
      </p>

      {/* CTA */}

      <div className="mt-8">
        <Link to="/signup">
          <Button variant="primary" className="group">
            Start Selling
            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Button>
        </Link>
      </div>

      {/* Benefits */}

      <div className="mt-10 space-y-4">
        {creatorBenefits.map((benefit) => (
          <div
            key={benefit}
            className="
              flex
              items-center
              gap-3
            "
          >
            <div
              className="
                flex
                h-8
                w-8
                items-center
                justify-center
                rounded-full
                bg-success-soft
              "
            >
              <CheckCircle size={16} className="text-success" />
            </div>

            <span
              className="
                text-sm
                font-medium
                text-foreground
              "
            >
              {benefit}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
