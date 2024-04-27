import Logo from "../../assets/movieNesting-logo.svg";
import SearchForm from "../../ui/SearchForm";
import classes from "./Header.module.scss";
function Header() {
  return (
    <header>
      <div className={classes["header"]}>
        <img
          src={Logo}
          alt="MovieNesting Logo"
          className={classes["header__img"]}
        />
        <SearchForm />
      </div>
    </header>
  );
}

export default Header;
