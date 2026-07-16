import { ShieldCheck } from 'lucide-react';

export default function SecurityNote({ text }) {
  return (
    <div className="flex items-start gap-2.5 rounded-xl bg-surface-raised/80 p-3.5">
      <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-primary" strokeWidth={1.8} />
      <p className="text-xs leading-relaxed text-foreground-soft">{text}</p>
    </div>
  );
}
