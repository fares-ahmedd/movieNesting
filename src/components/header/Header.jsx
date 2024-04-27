import SearchForm from "../../ui/SearchForm";
import classes from "./Header.module.scss";
import Logo from "./Logo";
function Header() {
  return (
    <header>
      <div className={classes["header__Container"]}>
        <Logo />
        <SearchForm />
      </div>
    </header>
  );
}

export default Header;
