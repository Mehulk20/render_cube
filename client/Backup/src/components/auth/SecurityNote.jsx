import { ShieldCheck } from 'lucide-react'

export default function SecurityNote({ text }) {
  return (
    <div className="flex items-start gap-2.5 rounded-xl bg-ink-50/80 p-3.5 dark:bg-ink-800/40">
      <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-brand-500 dark:text-brand-400" strokeWidth={1.8} />
      <p className="text-xs leading-relaxed text-ink-500 dark:text-ink-400">{text}</p>
    </div>
  )
}
