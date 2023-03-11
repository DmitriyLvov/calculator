import { useCallback } from 'react';

const useCombineRefs = (refs: any[]) => {
  const combinedRef = useCallback((element: any) => {
    refs.forEach((ref) => {
      if (!ref) return;
      if (typeof ref === "function") {
        ref(element);
      } else {
        ref.current = element;
      }
    });
  }, refs);

  return combinedRef;
};

export default useCombineRefs;
