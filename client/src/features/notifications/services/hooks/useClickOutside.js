import { useEffect } from 'react';

/**
 * Calls `onOutsideClick` when a pointer event lands outside every
 * ref passed in `refs`. Pass the panel ref and the trigger ref so
 * clicking the bell button to close the panel doesn't immediately
 * re-open it.
 */
export function useClickOutside(refs, onOutsideClick, { enabled = true } = {}) {
  useEffect(() => {
    if (!enabled) return;

    function handlePointerDown(event) {
      const clickedInside = refs.some((ref) => ref?.current?.contains(event.target));

      if (!clickedInside) {
        onOutsideClick(event);
      }
    }

    document.addEventListener('mousedown', handlePointerDown);

    return () => document.removeEventListener('mousedown', handlePointerDown);
  }, [refs, onOutsideClick, enabled]);
}
