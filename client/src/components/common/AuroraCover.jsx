import clsx from 'clsx';

export default function AuroraCover({ className, children }) {
  return (
    <div className={clsx('aurora-cover relative overflow-hidden', className)}>
      <div className="absolute inset-0 opacity-40 mix-blend-overlay" style={{
        backgroundImage: 'radial-gradient(circle at 30% 20%, rgba(255,255,255,0.15), transparent 40%)'
      }} />
      {children}
    </div>
  );
}
