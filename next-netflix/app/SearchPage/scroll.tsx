import { useEffect } from "react";

export const scroll = ({
  target,
  onIntersect,
  root = null,
  rootMargin = "0px",
  threshold = 1.0,
}: {
  target: React.RefObject<Element>;
  onIntersect: IntersectionObserverCallback;
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
}) => {
  useEffect(() => {
    let observer: IntersectionObserver | undefined;

    if (target && target.current) {
      observer = new IntersectionObserver(onIntersect, {
        root,
        rootMargin,
        threshold,
      });
    
      observer.observe(target.current);
    }

    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, [target, root, rootMargin, threshold]);
};