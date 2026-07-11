import { createContext, useContext, useState, useMemo, useCallback } from 'react';

const WishlistContext = createContext(null);

export function WishlistProvider({ children }) {
  const [ids, setIds] = useState(() => new Set(['a5', 'a9']));

  const toggle = useCallback((id) => {
    setIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id); else next.add(id);
      return next;
    });
  }, []);

  const isSaved = useCallback((id) => ids.has(id), [ids]);

  const value = useMemo(() => ({ ids, toggle, isSaved, count: ids.size }), [ids, toggle, isSaved]);

  return <WishlistContext.Provider value={value}>{children}</WishlistContext.Provider>;
}

export function useWishlist() {
  const ctx = useContext(WishlistContext);
  if (!ctx) throw new Error('useWishlist must be used within WishlistProvider');
  return ctx;
}
