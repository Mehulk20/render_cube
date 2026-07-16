import { Link } from 'react-router-dom';
import { FaGithub, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

import { Container } from '../ui';
import Logo from './Logo';

const footerLinks = {
  Marketplace: [
    { label: 'Browse Assets', to: '/marketplace' },
    { label: 'Collections', to: '/collections' },
    { label: 'Categories', to: '/categories' },
    { label: 'Free Assets', to: '/free-assets' },
  ],

  Creators: [
    { label: 'Become a Creator', to: '/creator/apply' },
    { label: 'Top Creators', to: '/creators' },
    { label: 'Creator Dashboard', to: '/creator/dashboard' },
    { label: 'Creator Guidelines', to: '/creator/guidelines' },
  ],

  Resources: [
    { label: 'Documentation', to: '/docs' },
    { label: 'Blog', to: '/blog' },
    { label: 'Help Center', to: '/help' },
    { label: 'API', to: '/api' },
  ],

  Company: [
    { label: 'About', to: '/about' },
    { label: 'Careers', to: '/careers' },
    { label: 'Contact', to: '/contact' },
    { label: 'Press Kit', to: '/press' },
  ],
};

const socials = [
  {
    icon: FaInstagram,
    href: '#',
    label: 'Instagram',
  },
  {
    icon: FaGithub,
    href: '#',
    label: 'GitHub',
  },
  {
    icon: FaTwitter,
    href: '#',
    label: 'Twitter',
  },
  {
    icon: FaYoutube,
    href: '#',
    label: 'YouTube',
  },
];

const Footer = () => {
  return (
    <footer className="border-t border-border bg-surface">
      <Container>
        <div className="py-20">
          <div className="grid gap-14 lg:grid-cols-12">
            {/* Brand */}

            <div className="lg:col-span-4">
              <Link to="/" className="inline-flex items-center gap-3">
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

              {/* Newsletter */}

              <div className="mt-8">
                <h3 className="mb-2 text-sm font-semibold text-foreground">Stay Updated</h3>

                <p className="mb-5 text-sm text-foreground-muted">
                  Creator news, new assets and platform updates.
                </p>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="
                      focus-ring
                      flex-1
                      rounded-xl
                      border
                      border-border
                      bg-surface-raised
                      px-4
                      py-3
                      text-sm
                      text-foreground
                      placeholder:text-foreground-faint
                      transition-all
                      duration-300
                      hover:border-border-strong
                    "
                  />

                  <button
                    className="
                      rounded-xl
                      bg-primary
                      px-5
                      py-3
                      text-sm
                      font-semibold
                      text-white
                      transition-all
                      duration-300
                      hover:bg-primary-hover
                      hover:shadow-glow
                    "
                  >
                    Subscribe
                  </button>
                </div>
              </div>

              {/* Social */}

              <div className="mt-8 flex items-center gap-3">
                {socials.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      rounded-xl
                      border
                      border-border
                      bg-surface-raised
                      text-foreground-muted
                      shadow-card
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:border-primary
                      hover:text-primary
                      hover:shadow-card-hover
                    "
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>

            {/* Navigation Columns */}
            {Object.entries(footerLinks).map(([section, links]) => (
              <div key={section} className="lg:col-span-2">
                <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-foreground">
                  {section}
                </h3>

                <ul className="space-y-3">
                  {links.map(({ label, to }) => (
                    <li key={label}>
                      <Link
                        to={to}
                        className="
                          text-sm
                          text-foreground-muted
                          transition-colors
                          duration-300
                          hover:text-primary
                        "
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Trust Stats */}

          <div
            className="
              mt-16
              grid
              grid-cols-2
              gap-6
              rounded-2xl
              border
              border-border
              bg-surface-raised
              p-8
              shadow-card
              sm:grid-cols-4
            "
          >
            {[
              {
                value: '12K+',
                label: 'Creators',
              },
              {
                value: '850K+',
                label: 'Assets',
              },
              {
                value: '120+',
                label: 'Countries',
              },
              {
                value: '4.9★',
                label: 'Community Rating',
              },
            ].map((item) => (
              <div key={item.label} className="text-center">
                <h3 className="font-display text-3xl font-bold text-primary">{item.value}</h3>

                <p className="mt-1 text-sm text-foreground-muted">{item.label}</p>
              </div>
            ))}
          </div>

          {/* Bottom */}

          <div
            className="
              mt-16
              flex
              flex-col
              gap-6
              border-t
              border-border
              pt-8
              text-sm
              lg:flex-row
              lg:items-center
              lg:justify-between
            "
          >
            <p className="text-foreground-faint">
              © {new Date().getFullYear()} Estadious. All rights reserved.
            </p>

            <div
              className="
                flex
                flex-wrap
                items-center
                gap-6
              "
            >
              <Link
                to="/status"
                className="
                  text-foreground-muted
                  transition-colors
                  duration-300
                  hover:text-primary
                "
              >
                Status
              </Link>

              <Link
                to="/terms"
                className="
                  text-foreground-muted
                  transition-colors
                  duration-300
                  hover:text-primary
                "
              >
                Terms
              </Link>

              <Link
                to="/privacy"
                className="
                  text-foreground-muted
                  transition-colors
                  duration-300
                  hover:text-primary
                "
              >
                Privacy
              </Link>

              <Link
                to="/licenses"
                className="
                  text-foreground-muted
                  transition-colors
                  duration-300
                  hover:text-primary
                "
              >
                Licenses
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
