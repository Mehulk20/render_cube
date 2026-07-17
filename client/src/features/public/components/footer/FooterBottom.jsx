import { Link } from 'react-router-dom';

import { FOOTER_LEGAL_LINKS } from './footer.constants';

export default function FooterBottom() {
  return (
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

      <div className="flex flex-wrap items-center gap-6">
        {FOOTER_LEGAL_LINKS.map(({ label, to }) => (
          <Link
            key={label}
            to={to}
            className="
              text-foreground-muted
              transition-colors
              duration-300
              hover:text-primary
            "
          >
            {label}
          </Link>
        ))}
      </div>
    </div>
  );
}
