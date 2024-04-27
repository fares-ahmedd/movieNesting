import { useState } from "react";
import classes from "./SearchForm.module.scss";
import { CiSearch } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import ButtonIcon from "./ButtonIcon";

function SearchForm() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  function handleKeyup(e) {
    if (e.key === "Enter" && query.trim()) {
      console.log("di ");
      navigate(`/search/${query}`);
    }
  }
  function handleChange(e) {
    setQuery(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (!query.trim()) return;
    navigate(`/search/${query}`);
  }
  return (
    <form className={classes["search-form"]} onSubmit={handleSubmit}>
      <input
        type="text"
        className={classes["search-form__input"]}
        placeholder="Search for movie or tv show..."
        onKeyUp={handleKeyup}
        onChange={handleChange}
      />
      <ButtonIcon title={"Search"} icon={<CiSearch />} type="submit" />
    </form>
  );
}

export default SearchForm;
