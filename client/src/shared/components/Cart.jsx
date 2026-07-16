import { useNavigate } from 'react-router-dom';
import { selectCartItems } from '../../features/cart/services';
import { useAppSelector } from '../../store';
import { ShoppingCart } from 'lucide-react';
import clsx from 'clsx';

export default function Cart({ icon }) {
  const navigate = useNavigate();
  const cartItems = useAppSelector(selectCartItems);

  const handleNavigate = (path) => {
    if (document.startViewTransition) {
      document.startViewTransition(() => {
        navigate(path);
      });
    } else {
      navigate(path);
    }
  };

  return (
    <div>
      <button
        onClick={() => handleNavigate('/cart')}
        aria-label="Shopping cart"
        className={clsx(
          'relative flex h-11 w-11 items-center justify-center text-foreground-soft',
          'transition-colors duration-[var(--duration-fast)] ease-[var(--ease-standard)]',
          'hover:text-primary',
          icon !== 20 && ['rounded-xl', 'border border-transparent', 'hover:bg-surface-hover']
        )}
      >
        <ShoppingCart size={icon} />
        {cartItems.length > 0 && (
          <span className="absolute -top-0.5 -right-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-white">
            {cartItems.length}
          </span>
        )}
      </button>
    </div>
  );
}
