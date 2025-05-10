import { useEffect, RefObject, DependencyList } from 'react';

export function useResetScroll<T extends HTMLElement>(
  ref: RefObject<T | null>,
  deps: DependencyList,
): void {
  useEffect(() => {
    if (ref.current) {
      ref.current.scrollTop = 0;
    }
  }, [...deps, ref]);
}
