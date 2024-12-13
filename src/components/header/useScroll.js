import { useEffect, useState } from "react";

export function useScroll(moveToElement) {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "-50px",
    };
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      setIsScrolled(!entry.isIntersecting);
    }, options);
    const currentRef = moveToElement.current;
    if (currentRef) {
      observer.observe(currentRef);
    }
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return isScrolled;
}
