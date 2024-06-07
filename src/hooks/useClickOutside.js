import { useEffect } from "react";

const useOnClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = (event) => {
      if (
        !ref.current ||
        ref.current.contains(event.target) ||
        event.target.tagName === "UL" ||
        event.target.tagName === "LI" ||
        event.target.tagName === "SPAN" ||
        event.target.tagName === "BUTTON"
      ) {
        return;
      }

      handler(event);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
};

export default useOnClickOutside;
