const AuthCard = ({ title, subtitle, children, cardFoot = null, className = '' }) => {
  return (
    <>
      <div
        className={` rounded-3xl border border-border bg-surface/90 p-7 shadow-card backdrop-blur-sm sm:p-9 ${className}`}
      >
        <h2 className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-[28px]">
          {title}
        </h2>

        {subtitle && <p className="mt-1.5 text-sm text-foreground-soft">{subtitle}</p>}

        <div className="mt-7">{children}</div>
      </div>

      {cardFoot}
    </>
  );
};

export default AuthCard;
