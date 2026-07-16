export default function Divider({ label }) {
  return (
    <div className="flex items-center gap-4">
      <span className="h-px flex-1 bg-border" />
      {label && <span className="text-xs font-medium text-foreground-faint">{label}</span>}
      <span className="h-px flex-1 bg-border" />
    </div>
  );
}
