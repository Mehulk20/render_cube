const AuthCard = ({ title, subtitle, children, cardFoot = null, className = '' }) => {
  return (
    <>
      <div
        className={`rounded-3xl border border-ink-100 bg-white/90 p-7 shadow-card backdrop-blur-sm dark:border-ink-800 dark:bg-ink-900/80 dark:shadow-card-dark sm:p-9 ${className}`}
      >
        <h2 className="font-display text-2xl font-bold tracking-tight text-ink-900 dark:text-white sm:text-[28px]">
          {title}
        </h2>

        {subtitle && <p className="mt-1.5 text-sm text-ink-500 dark:text-ink-400">{subtitle}</p>}

        <div className="mt-7">{children}</div>
      </div>

      {cardFoot}
    </>
  );
};

export default AuthCard;
