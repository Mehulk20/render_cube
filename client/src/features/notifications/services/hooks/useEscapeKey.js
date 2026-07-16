import { useEffect } from 'react';

/** Calls `onEscape` when the Escape key is pressed while `enabled` is true. */
export function useEscapeKey(onEscape, { enabled = true } = {}) {
  useEffect(() => {
    if (!enabled) return;

    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        onEscape(event);
      }
    }

    window.addEventListener('keydown', handleKeyDown);

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onEscape, enabled]);
}
