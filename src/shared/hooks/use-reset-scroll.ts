import { useEffect, RefObject } from 'react';

// HOOKS: 스크롤 초기화
export function useResetScroll<T extends HTMLElement>(ref: RefObject<T | null>, dependency: any) {
  useEffect(() => {
    if (ref.current) {
      ref.current.scrollTop = 0;
    }
  }, [dependency, ref]);
}
