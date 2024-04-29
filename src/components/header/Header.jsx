import { useEffect, useRef, useState } from "react";
import SearchForm from "../../ui/SearchForm";
import classes from "./Header.module.scss";
import Logo from "./Logo";
import IconButton from "../../ui/IconButton";
import { FaArrowAltCircleUp } from "react-icons/fa";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const navbarRef = useRef(null);

  useEffect(() => {
    function handleObserver(entries) {
      const [entry] = entries;
      setIsScrolled(!entry.isIntersecting);
    }
    const options = {
      root: null,
      rootMargin: "-50px",
      threshold: 0,
    };
    const observer = new IntersectionObserver(handleObserver, options);
    const currentRef = navbarRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }
  }, []);

  return (
    <>
      <header className={isScrolled ? classes.scrolled : ""}>
        <div className={classes["header__Container"]}>
          <Logo />
          <SearchForm />
        </div>
      </header>
      <span className={classes.scroll} ref={navbarRef}></span>
      <IconButton
        title={"Up"}
        icon={<FaArrowAltCircleUp />}
        className={`${classes.upIcon} ${isScrolled ? classes.active : ""}`}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      />
    </>
  );
}

export default Header;
