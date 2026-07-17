import { Link } from 'react-router-dom';

import Logo from '../Logo';
import FooterNewsletter from './FooterNewsletter';
import FooterSocials from './FooterSocials';

export default function FooterBrand() {
  return (
    <div className="lg:col-span-4">
      <Link to="/" className="group inline-flex items-center gap-3">
        <Logo />

        <div>
          <h2 className="font-display text-2xl font-bold text-foreground">Estadious</h2>

          <p className="text-sm text-foreground-faint">Premium Digital Marketplace</p>
        </div>
      </Link>

      <p className="mt-6 max-w-sm leading-7 text-foreground-muted">
        Discover, create and sell premium digital assets. Empowering designers, developers,
        filmmakers and creators around the world.
      </p>

      <FooterNewsletter />

      <FooterSocials />
    </div>
  );
}
