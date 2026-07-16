import { Bar } from '.';

export default function AssetThumb({ withPrice = true }) {
  return (
    <div className="shrink-0">
      <div className="skeleton mb-2 aspect-video w-40 rounded-xl sm:w-44" />
      <Bar className="mb-1.5 h-3 w-3/4" />
      {withPrice && <Bar className="h-2.5 w-10" />}
    </div>
  );
}
