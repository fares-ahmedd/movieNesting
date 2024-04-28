import { useEffect, useRef, useState } from "react";
import SearchForm from "../../ui/SearchForm";
import classes from "./Header.module.scss";
import Logo from "./Logo";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const navbarRef = useRef(null);

  useEffect(() => {
    const handleObserver = (entries) => {
      const [entry] = entries;
      console.log(entry);
      setIsScrolled(!entry.isIntersecting);
    };
    const options = {
      root: null,
      rootMargin: "20px",
      threshold: 0,
    };
    const observer = new IntersectionObserver(handleObserver, options);
    const currentRef = navbarRef.current; // Copy the current ref value
    if (currentRef) {
      observer.observe(currentRef);
    }
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef); // Use the copied ref value
      }
    };
  }, []);
  console.log(isScrolled);

  return (
    <>
      <header>
        <div className={classes["header__Container"]}>
          <Logo />
          <SearchForm />
        </div>
      </header>
      <span className={classes.scroll} ref={navbarRef}></span>
    </>
  );
}

export default Header;
