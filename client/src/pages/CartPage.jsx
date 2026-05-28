import { ArrowLeft, ArrowRight, ShoppingCart, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import Button from '../components/Button';

/**
 * CartPage — shopping cart with item list, totals, and checkout CTA.
 * Empty state shown when cart is empty.
 * Dark mode aware.
 */
const CartPage = () => {
  const { cartItems, removeItem, total, clearCart } = useCart();

  // Empty cart state
  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-950 flex flex-col items-center justify-center gap-6 transition-colors duration-300 page-transition">
        <div className="w-24 h-24 rounded-full bg-purple-50 dark:bg-purple-950 flex items-center justify-center">
          <ShoppingCart size={40} className="text-primary" />
        </div>
        <div className="text-center">
          <h2 className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-2" style={{ fontFamily: 'Syne' }}>
            Your cart is empty
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-sm">Discover amazing assets and add them to your cart.</p>
        </div>
        <Link to="/marketplace">
          <Button variant="primary" size="lg">
            Browse Assets <ArrowRight size={16} />
          </Button>
        </Link>
      </div>
    );
  }

  const tax = total * 0.08;
  const grandTotal = total + tax;

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300 page-transition">
      <div className="pt-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <Link to="/marketplace" className="inline-flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-primary transition-colors text-sm mb-2">
              <ArrowLeft size={14} /> Continue Shopping
            </Link>
            <h1 className="text-3xl font-display font-bold text-gray-900 dark:text-white" style={{ fontFamily: 'Syne' }}>
              Shopping Cart
            </h1>
          </div>
          <button
            onClick={clearCart}
            className="text-sm text-gray-400 hover:text-red-500 transition-colors font-medium"
          >
            Clear all
          </button>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">

          {/* Cart items list */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-4 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl p-4 animate-fade-in"
              >
                {/* Asset thumbnail */}
                <div className={`w-20 h-16 rounded-xl flex-shrink-0 ${item.gradient}`} />

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-semibold text-gray-900 dark:text-white truncate">{item.title}</h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">by {item.creator}</p>
                  <p className="text-xs text-gray-400 dark:text-gray-500 mt-0.5">Standard License</p>
                </div>

                {/* Price + remove */}
                <div className="flex items-center gap-4 flex-shrink-0">
                  <span className="text-base font-bold text-gray-900 dark:text-white">${item.price}</span>
                  <button
                    onClick={() => removeItem(item.id)}
                    aria-label="Remove item"
                    className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-950 rounded-full transition-colors"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Order summary */}
          <div>
            <div className="bg-gray-50 dark:bg-gray-900 rounded-3xl border border-gray-100 dark:border-gray-800 p-6 sticky top-24">
              <h2 className="text-lg font-display font-bold text-gray-900 dark:text-white mb-5" style={{ fontFamily: 'Syne' }}>
                Order Summary
              </h2>

              <div className="space-y-3 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-gray-500 dark:text-gray-400">Subtotal ({cartItems.length} item{cartItems.length !== 1 ? 's' : ''})</span>
                  <span className="font-semibold text-gray-900 dark:text-white">${total.toFixed(2)}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-500 dark:text-gray-400">Tax (8%)</span>
                  <span className="font-semibold text-gray-900 dark:text-white">${tax.toFixed(2)}</span>
                </div>
                <div className="border-t border-gray-200 dark:border-gray-700 pt-3 flex items-center justify-between">
                  <span className="font-bold text-gray-900 dark:text-white">Total</span>
                  <span className="text-xl font-display font-bold text-gray-900 dark:text-white" style={{ fontFamily: 'Syne' }}>
                    ${grandTotal.toFixed(2)}
                  </span>
                </div>
              </div>

              {/* Promo code */}
              <div className="mt-5 flex gap-2">
                <input
                  type="text"
                  placeholder="Promo code"
                  className="flex-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl px-3 py-2.5 text-sm text-gray-700 dark:text-gray-200 placeholder-gray-400 outline-none focus:border-primary transition-colors"
                />
                <button className="px-4 py-2.5 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 text-sm font-semibold rounded-xl hover:opacity-90 transition-opacity">
                  Apply
                </button>
              </div>

              <Link to="/checkout" className="block mt-5">
                <Button variant="primary" size="lg" className="w-full justify-center">
                  Checkout <ArrowRight size={16} />
                </Button>
              </Link>

              <p className="text-center text-xs text-gray-400 dark:text-gray-500 mt-3">
                Secure checkout · Instant delivery
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
