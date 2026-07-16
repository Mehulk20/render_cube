import { Link } from 'react-router-dom';
import { Heart, Download, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import { useWishlist } from '../../context/WishlistContext';

export default function AssetCard({ asset, index = 0 }) {
  const { isSaved, toggle } = useWishlist();
  const saved = isSaved(asset.id);

  return (
    <Link
      to={`/asset/${asset.id}`}
      className="group block overflow-hidden rounded-2xl border border-border bg-surface transition-all duration-300 hover:-translate-y-1 hover:border-violet/40 hover:shadow-glow"
      style={{ animationDelay: `${index * 40}ms` }}
    >
      <div className={clsx('relative aspect-[4/3] overflow-hidden bg-gradient-to-br', asset.color)}>
        <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/20" />
        {asset.free && (
          <span className="absolute left-2.5 top-2.5 rounded-full bg-black/50 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-white backdrop-blur-sm">
            Free
          </span>
        )}
        <button
          onClick={(e) => {
            e.preventDefault();
            toggle(asset.id);
          }}
          className={clsx(
            'absolute right-2.5 top-2.5 flex h-7 w-7 items-center justify-center rounded-full backdrop-blur-sm transition-all duration-200',
            saved
              ? 'bg-rose text-white opacity-100'
              : 'bg-black/40 text-white opacity-0 group-hover:opacity-100 hover:bg-black/60'
          )}
          aria-label={saved ? 'Remove from wishlist' : 'Add to wishlist'}
          aria-pressed={saved}
        >
          <motion.span
            animate={saved ? { scale: [1, 1.35, 1] } : { scale: 1 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
          >
            <Heart size={13} className={saved ? 'fill-white' : ''} />
          </motion.span>
        </button>
      </div>
      <div className="p-3.5">
        <p className="truncate text-sm font-medium text-ink">{asset.title}</p>
        <p className="mt-0.5 truncate text-xs text-ink-faint">{asset.author}</p>
        <div className="mt-2.5 flex items-center justify-between text-xs text-ink-faint">
          <span className="flex items-center gap-1">
            <Download size={12} /> {asset.downloads.toLocaleString()}
          </span>
          {asset.rating > 0 && (
            <span className="flex items-center gap-1">
              <Star size={12} className="fill-amber text-amber" /> {asset.rating}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
