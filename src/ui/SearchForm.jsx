import classes from "./SearchForm.module.scss";
import { CiSearch } from "react-icons/ci";

function SearchForm() {
  return (
    <form className={classes["search-form"]}>
      <input
        type="text"
        className={classes["search-form__input"]}
        placeholder="Search for movie or tv show..."
      />
      <button type="button" className={classes["search-form__button"]}>
        <span>Search</span> <CiSearch />
      </button>
    </form>
  );
}

export default SearchForm;
