import { SOCIALS } from './footer.constants';

export default function FooterSocials() {
  return (
    <div className="mt-8 flex items-center gap-3">
      {SOCIALS.map(({ icon: Icon, href, label }) => (
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
  );
}
