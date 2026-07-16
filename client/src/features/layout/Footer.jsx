import { Logo } from '../../shared/components';

const cols = [
  { title: 'Marketplace', links: ['Explore assets', 'Templates', 'Sound effects', 'UI kits'] },
  { title: 'Creators', links: ['Become a creator', 'Creator studio', 'Payouts', 'Guidelines'] },
  { title: 'Company', links: ['About', 'Careers', 'Blog', 'Contact'] },
];

export default function Footer() {
  return (
    <footer className="border-t border-border-soft bg-void">
      <div className="mx-auto max-w-2xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          <div className="col-span-2 sm:col-span-1">
            <Logo />
            <p className="mt-3 max-w-[220px] text-sm text-ink-faint">
              The marketplace for motion designers to share and discover creative assets.
            </p>
          </div>
          {cols.map((c) => (
            <div key={c.title}>
              <h4 className="font-display text-sm font-semibold text-ink">{c.title}</h4>
              <ul className="mt-3 space-y-2">
                {c.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-sm text-ink-faint hover:text-ink transition-colors">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-border-soft pt-6 text-xs text-ink-faint sm:flex-row">
          <p>© 2026 MotionEnvato. All rights reserved.</p>
          <p>Built for creators, by creators.</p>
        </div>
      </div>
    </footer>
  );
}
