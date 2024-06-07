import { useState } from "react";
import classes from "./SearchForm.module.scss";
import { CiSearch } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import ButtonIcon from "./ButtonIcon";
import useToast from "./ErrorMessage";

function SearchForm() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const { toastComponent, triggerToast } = useToast();
  function handleChange(e) {
    setQuery(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (!query.trim()) {
      triggerToast({
        message: "please type a movie name",
        duration: 3000,
      });
      return;
    }
    window.scrollTo({ top: 0 });
    navigate(`/search/${query}`);
    setQuery("");
  }
  return (
    <form className={classes["search-form"]} onSubmit={handleSubmit}>
      <input
        type="text"
        value={query}
        className={classes["search-form__input"]}
        placeholder="Search for movie or tv show..."
        onChange={handleChange}
      />
      <ButtonIcon title={"Search"} icon={<CiSearch />} type="submit" />
      {toastComponent}
    </form>
  );
}

export default SearchForm;
