import { useEffect, useRef, useState } from 'react';

const ITEM_MIN_WIDTH = 250 as const;

export const useSlider = ({ items }: { items: unknown[] }) => {
  const containerElementRef = useRef<HTMLUListElement>(null);
  const observerRef = useRef<ResizeObserver | null>(null);
  const [visibleItemCount, setVisibleItemCount] = useState(1);
  const [_slideIndex, setSlideIndex] = useState(0);
  const slideIndex = Math.min(Math.max(0, _slideIndex), items.length - 1);

  useEffect(() => {
    if (containerElementRef.current === null || observerRef.current) {
      return;
    }
    const observer = new ResizeObserver((entries) => {
      const rect = entries[0].contentRect;
      setVisibleItemCount(Math.max(Math.floor(rect.width / ITEM_MIN_WIDTH), 1));
    });
    observerRef.current = observer;
    observer.observe(containerElementRef.current);
    return () => {
      observer.disconnect();
      observerRef.current = null;
    };
  }, []);

  return {
    containerElementRef,
    setSlideIndex,
    slideIndex,
    visibleItemCount,
  };
};
