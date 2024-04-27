import Logo from "../../assets/movieNesting-logo.svg";
import classes from "./Header.module.scss";
function Header() {
  return (
    <header className={classes["header"]}>
      <img
        src={Logo}
        alt="MovieNesting Logo"
        className={classes["header__img"]}
      />
      <form className={classes["search-container"]}>
        <input type="text" className={classes["search-container__input"]} />
        <button type="button" className={classes["search-button"]}>
          Search
        </button>
      </form>
    </header>
  );
}

export default Header;
