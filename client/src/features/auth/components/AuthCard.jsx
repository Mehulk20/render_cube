const AuthCard = ({ title, subtitle, children, cardFoot = null, className = '' }) => {
  return (
    <>
      <div
        className={` rounded-2xl border border-border bg-surface/90 p-lg shadow-card backdrop-blur-sm sm:p-2xl ${className} `}
      >
        <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          {title}
        </h2>

        {subtitle && <p className="mt-sm text-sm text-foreground-soft">{subtitle}</p>}

        <div className="mt-lg">{children}</div>
      </div>

      {cardFoot}
    </>
  );
};

export default AuthCard;
