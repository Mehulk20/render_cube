import { ArrowLeft, ArrowRight, ShoppingCart, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../../../store';
import {
  removeItemFromCart,
  clearCart,
  selectCartItems,
  selectCartTotal,
} from '../../cart/services';

import { Button } from '../../public/components';

/**
 * CartPage — shopping cart with item list, totals, and checkout CTA.
 * Empty state shown when cart is empty.
 */
const CartPage = () => {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector(selectCartItems);

  const total = useAppSelector(selectCartTotal);

  // Empty cart state
  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center gap-6 transition-surface page-transition">
        <div className="w-24 h-24 rounded-full bg-violet/10 flex items-center justify-center">
          <ShoppingCart size={40} className="text-primary" />
        </div>
        <div className="text-center">
          <h2 className="font-display text-2xl font-bold text-foreground mb-2">
            Your cart is empty
          </h2>
          <p className="text-foreground-faint text-sm">
            Discover amazing assets and add them to your cart.
          </p>
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
    <div className="min-h-screen bg-background transition-surface page-transition">
      <div className="pt-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <Link
              to="/marketplace"
              className="inline-flex items-center gap-2 text-foreground-faint hover:text-primary transition-colors text-sm mb-2"
            >
              <ArrowLeft size={14} /> Continue Shopping
            </Link>
            <h1 className="font-display text-3xl font-bold text-foreground">Shopping Cart</h1>
          </div>
          <button
            onClick={() => dispatch(clearCart())}
            className="text-sm text-foreground-faint hover:text-danger transition-colors font-medium"
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
                className="flex items-center gap-4 bg-card border border-border-soft rounded-2xl p-4 animate-fade-in"
              >
                {/* Asset thumbnail */}
                <div className={`w-20 h-16 rounded-xl flex-shrink-0 ${item.gradient}`} />

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-semibold text-foreground truncate">{item.title}</h3>
                  <p className="text-xs text-foreground-faint mt-0.5">by {item.creator}</p>
                  <p className="text-xs text-foreground-faint mt-0.5">Standard License</p>
                </div>

                {/* Price + remove */}
                <div className="flex items-center gap-4 flex-shrink-0">
                  <span className="text-base font-bold text-foreground">${item.price}</span>
                  <button
                    onClick={() => dispatch(removeItemFromCart(item.id))}
                    aria-label="Remove item"
                    className="w-8 h-8 flex items-center justify-center text-foreground-faint hover:text-danger hover:bg-danger-soft rounded-full transition-colors"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Order summary */}
          <div>
            <div className="bg-surface-raised rounded-3xl border border-border-soft p-6 sticky top-24">
              <h2 className="font-display text-lg font-bold text-foreground mb-5">Order Summary</h2>

              <div className="space-y-3 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-foreground-faint">
                    Subtotal ({cartItems.length} item{cartItems.length !== 1 ? 's' : ''})
                  </span>
                  <span className="font-semibold text-foreground">${total.toFixed(2)}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-foreground-faint">Tax (8%)</span>
                  <span className="font-semibold text-foreground">${tax.toFixed(2)}</span>
                </div>
                <div className="border-t border-border pt-3 flex items-center justify-between">
                  <span className="font-bold text-foreground">Total</span>
                  <span className="font-display text-xl font-bold text-foreground">
                    ${grandTotal.toFixed(2)}
                  </span>
                </div>
              </div>

              {/* Promo code */}
              <div className="mt-5 flex gap-2">
                <input
                  type="text"
                  placeholder="Promo code"
                  className="flex-1 bg-surface border border-border rounded-xl px-3 py-2.5 text-sm text-foreground placeholder:text-foreground-faint outline-none focus:border-primary transition-colors"
                />
                <button className="px-4 py-2.5 bg-foreground text-background text-sm font-semibold rounded-xl hover:opacity-90 transition-opacity">
                  Apply
                </button>
              </div>

              <Link to="/checkout" className="block mt-5">
                <Button variant="primary" size="lg" className="w-full justify-center">
                  Checkout <ArrowRight size={16} />
                </Button>
              </Link>

              <p className="text-center text-xs text-foreground-faint mt-3">
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
