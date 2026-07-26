import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';

export default function PrimaryButton({
  children,
  icon: Icon,
  loading = false,
  type = 'submit',
  className = '',
  disabled,
  ...props
}) {
  return (
    <motion.button
      type={type}
      whileTap={{ scale: 0.98 }}
      whileHover={{ y: -1 }}
      transition={{ type: 'spring', stiffness: 400, damping: 20 }}
      disabled={disabled || loading}
      className={`
        group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl
        bg-gradient-to-r from-brand-500 via-brand-600 to-brand-700 py-md text-base font-semibold text-white
        shadow-glow transition-shadow duration-[var(--duration-normal)] ease-[var(--ease-standard)]
        hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-70
        ${className}
      `}
      {...props}
    >
      <span className="pointer-events-none absolute inset-0 -z-0 bg-shimmer opacity-0 transition-opacity duration-[var(--duration-slow)] group-hover:opacity-100 group-hover:animate-shimmer" />
      <span className="relative z-10 flex items-center gap-2">
        {loading ? (
          <>
            <Loader2 className="h-[18px] w-[18px] animate-spin" />
            Please wait…
          </>
        ) : (
          <>
            {Icon && <Icon className="h-[18px] w-[18px]" strokeWidth={2} />}
            {children}
          </>
        )}
      </span>
    </motion.button>
  );
}
