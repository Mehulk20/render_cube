import { Container } from '../../../shared/ui';

import { FooterBrand, FooterBottom, FooterLinks } from '../components/footer';

export default function FooterSection() {
  return (
    <footer className="border-t border-border bg-surface">
      <Container>
        <div className="py-20">
          <div className="grid gap-14 lg:grid-cols-12">
            <FooterBrand />

            <FooterLinks />
          </div>

          <FooterBottom />
        </div>
      </Container>
    </footer>
  );
}
