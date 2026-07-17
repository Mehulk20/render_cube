import { Link } from 'react-router-dom';

import { FOOTER_LINKS } from './footer.constants';

export default function FooterLinks() {
  return (
    <>
      {Object.entries(FOOTER_LINKS).map(([section, links]) => (
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
    </>
  );
}
