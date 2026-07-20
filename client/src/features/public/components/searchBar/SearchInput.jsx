import { Search } from 'lucide-react';

export default function SearchInput({ value, onChange }) {
  return (
    <>
      <Search
        size={20}
        strokeWidth={2}
        className="
      shrink-0
      text-foreground-muted
      transition-all
      duration-500
      ease-out
      group-hover:text-primary
      group-focus-within:text-primary
      group-hover:scale-105
      group-focus-within:scale-105
    "
      />

      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search templates, 3D models, music, photos and more..."
        className="
    flex-1
    bg-transparent
    pl-2
    border-0
    outline-none
    ring-0
    focus:border-0
    focus:outline-none
    focus:ring-0
    focus-visible:outline-none
    focus-visible:ring-0

    appearance-none

    text-[16px]
    md:text-[17px]
    tracking-[0.01em]
    leading-none

    text-foreground
    placeholder:text-foreground-muted
    placeholder:transition-colors
    placeholder:duration-500

    caret-primary
    selection:bg-primary/20
    selection:text-foreground
  "
      />
    </>
  );
}
