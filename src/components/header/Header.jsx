import { useRef } from "react";
import SearchForm from "./SearchForm";
import classes from "./Header.module.scss";
import Logo from "./Logo";
import IconButton from "../../ui/IconButton";
import { FaArrowAltCircleUp } from "react-icons/fa";
import { useScroll } from "./useScroll";

function Header() {
  const moveToElement = useRef(null);
  const isScrolled = useScroll(moveToElement);

  return (
    <>
      <header className={isScrolled ? classes.scrolled : ""}>
        <div className={classes["header__Container"]}>
          <Logo />
          <SearchForm />
        </div>
      </header>
      <div className={classes.scroll} ref={moveToElement}></div>
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
