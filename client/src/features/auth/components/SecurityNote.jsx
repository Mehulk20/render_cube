import { ShieldCheck } from 'lucide-react';

export default function SecurityNote({ text }) {
  return (
    <div className="flex items-start gap-md rounded-sm bg-surface-raised/80 p-md">
      <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" strokeWidth={1.8} />
      <p className="text-xs leading-relaxed text-foreground-soft">{text}</p>
    </div>
  );
}
