/**
 * HowItWorks — 3-step process section. Dark mode aware.
 */
import { Container, Section } from '../../../shared/ui';

const steps = [
  {
    number: '1',
    title: 'Discover',
    description: 'Browse millions of premium assets across various categories.',
  },
  {
    number: '2',
    title: 'Purchase',
    description: 'Choose the perfect asset and download instantly at a fair price.',
  },
  {
    number: '3',
    title: 'Create Amazing',
    description: 'Use high-quality assets to bring your projects to life faster.',
  },
];

export default function HowItWorks() {
  return (
    <Section className="bg-surface-raised">
      <Container size="md">
        {/* Header */}

        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="font-display text-4xl font-bold text-foreground lg:text-5xl">
            How It Works
          </h2>

          <p className="mt-4 text-lg text-foreground-muted">
            Get started in minutes with our simple creator marketplace workflow.
          </p>
        </div>

        {/* Steps */}

        <div className="relative grid gap-10 md:grid-cols-3">
          {/* Connection */}

          <div
            className="
              absolute
              top-7
              right-[18%]
              left-[18%]
              z-0
              hidden
              border-t-2
              border-dashed
              border-border-strong
              md:block
            "
          />

          {steps.map(({ number, title, description }) => (
            <div
              key={title}
              className="
                relative
                z-10
                flex
                flex-col
                items-center
                text-center
              "
            >
              {/* Number */}

              <div
                className="
                  mb-6
                  flex
                  h-16
                  w-16
                  items-center
                  justify-center
                  rounded-2xl
                  bg-primary
                  font-display
                  text-xl
                  font-bold
                  text-white
                  shadow-glow
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:scale-105
                "
              >
                {number}
              </div>

              {/* Title */}

              <h3 className="mb-3 text-xl font-semibold text-foreground">{title}</h3>

              {/* Description */}

              <p className="max-w-xs leading-7 text-foreground-muted">{description}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
