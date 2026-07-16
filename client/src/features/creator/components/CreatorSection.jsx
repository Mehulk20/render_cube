import { Container, Section } from '../../../shared/ui';
import { CreatorContent, CreatorDashboard } from '.';

export default function CreatorSection() {
  return (
    <Section aria-labelledby="creator-section-heading">
      <Container>
        <div
          className="
            overflow-hidden
            rounded-2xl
            border
            border-border
            bg-panel
            shadow-card
            ring-1
            ring-border/50
          "
        >
          <div
            className="
              grid
              items-stretch
              lg:grid-cols-[1.1fr_0.9fr]
            "
          >
            <CreatorContent />
            <CreatorDashboard />
          </div>
        </div>
      </Container>
    </Section>
  );
}
