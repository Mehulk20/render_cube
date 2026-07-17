import { Search } from 'lucide-react';

export default function SearchInput({ value, onChange }) {
  return (
    <>
      <Search
        size={18}
        className="
          shrink-0
          text-foreground-faint
          transition-colors
          duration-300
          group-hover:text-primary
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
          text-sm
          text-foreground
          placeholder:text-foreground-faint
          outline-none
        "
      />
    </>
  );
}
