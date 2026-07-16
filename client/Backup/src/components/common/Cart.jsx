import { useNavigate } from 'react-router-dom';
import { selectCartItems } from '../../features/cart';
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
          'relative flex h-11 w-11 items-center justify-center text-gray-600 hover:text-primary  dark:text-gray-300 dark:hover:text-white',
          icon !== 20 && [
            'rounded-nav-elm',
            'border border-transparent',
            'hover:bg-gray-100',
            'dark:hover:bg-gray-800',
          ]
        )}
      >
        <ShoppingCart size={icon} />
        {cartItems.length > 0 && (
          <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-primary text-white text-[10px] font-bold rounded-full flex items-center justify-center">
            {cartItems.length}
          </span>
        )}
      </button>
    </div>
  );
}
