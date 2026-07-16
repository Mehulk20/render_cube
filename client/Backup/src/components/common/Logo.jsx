import clsx from 'clsx';
import { Link } from 'react-router-dom';

export default function Logo({ className, to = '/' }) {
  return (
    <Link to={to} className={clsx('inline-flex items-center gap-2 group', className)}>
      <span className="relative flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-violet to-fuchsia">
        <span className="absolute inset-0 rounded-lg bg-gradient-to-br from-violet to-fuchsia blur-md opacity-0 group-hover:opacity-60 transition-opacity" />
        <svg viewBox="0 0 24 24" className="relative h-4 w-4 fill-white">
          <path d="M12 2 3 7v10l9 5 9-5V7l-9-5Zm0 2.3 6.5 3.6L12 11.5 5.5 7.9 12 4.3ZM5 9.2l6 3.3v7.2l-6-3.3V9.2Zm8 10.5v-7.2l6-3.3v7.2l-6 3.3Z" />
        </svg>
      </span>
      <span className="font-display text-[17px] font-semibold tracking-tight text-ink">Motion<span className="text-gradient">Envato</span></span>
    </Link>
  );
}
