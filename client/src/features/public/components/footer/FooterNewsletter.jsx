export default function FooterNewsletter() {
  return (
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
  );
}
