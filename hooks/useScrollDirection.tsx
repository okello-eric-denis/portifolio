import { useEffect, useState } from 'react';

export enum ScrollDirection {
  Initial,
  Down,
  Up,
}

const useScrollDirection = (isMobileOnly = false, isMobile = false) => {
  const [scrollDir, setScrollDir] = useState(ScrollDirection.Initial);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const threshold = 10;
    let lastScrollY = window.scrollY || 0;

    let ticking = false;
    const updateScrollDir = () => {
      const scrollY = window.scrollY || 0;

      if (Math.abs(scrollY - lastScrollY) < threshold) {
        ticking = false;
        return;
      }

      let currentScrollDirection = ScrollDirection.Initial;

      if (scrollY > lastScrollY) {
        currentScrollDirection = ScrollDirection.Down;
      } else {
        currentScrollDirection = ScrollDirection.Up;
      }

      if (currentScrollDirection !== scrollDir) {
        setScrollDir(currentScrollDirection);
      }

      lastScrollY = scrollY > 0 ? scrollY : 0;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDir);
        ticking = true;
      }
    };

    if ((isMobileOnly && isMobile) || !isMobileOnly) {
      window.addEventListener('scroll', onScroll);
    }

    // Fallback for initial load
    if (!isMobile && !isInitialized) {
      setScrollDir(ScrollDirection.Down);
      setIsInitialized(true);
    }

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [scrollDir, isMobileOnly, isMobile, isInitialized]);

  return scrollDir;
};

export default useScrollDirection;
