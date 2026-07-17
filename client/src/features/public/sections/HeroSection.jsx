import AuroraBackground from '../../../UI/AuroraBackground';
import { Container, Section } from '../../../shared/ui';

import { HeroContent, HeroVisual } from '../components/hero';

export default function HeroSection() {
  return (
    <Section className="relative min-h-screen overflow-hidden bg-background bg-grid pt-4">
      <AuroraBackground />

      <div className="animate-float pointer-events-none absolute top-20 right-0 h-150 w-150 translate-x-1/4 translate-y-1/4 rounded-full bg-brand-300/30 blur-3xl" />

      <div className="animate-float-delayed pointer-events-none absolute bottom-0 left-0 h-100 w-100 translate-x-1/4 translate-y-1/4 rounded-full bg-fuchsia/15 blur-3xl" />

      <Container className="relative flex min-h-[calc(100vh-64px)] items-center py-16">
        <div className="grid w-full items-center gap-10 lg:grid-cols-2 xl:gap-16">
          <HeroContent />

          <HeroVisual />
        </div>
      </Container>
    </Section>
  );
}
