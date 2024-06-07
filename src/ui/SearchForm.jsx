import { useRef, useState } from "react";
import classes from "./SearchForm.module.scss";
import { CiSearch } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import ButtonIcon from "./ButtonIcon";
import useToast from "./ErrorMessage";
import useOnClickOutside from "../hooks/useClickOutside";
function SearchForm() {
  const [query, setQuery] = useState("");
  const [isFocus, setIsFocus] = useState(false);
  const inputRef = useRef(null);
  useOnClickOutside(inputRef, () => setIsFocus(false));
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
    setIsFocus(false);
    navigate(`/search/${query}`);
    setQuery("");
  }
  return (
    <div
      className={`${classes.container} ${isFocus ? classes.inputFocus : ""}`}
    >
      <form className={`${classes["search-form"]} `} onSubmit={handleSubmit}>
        <input
          type="text"
          value={query}
          className={`${classes["search-form__input"]} `}
          placeholder="Search for movie or tv show..."
          onChange={handleChange}
          onFocus={() => setIsFocus(true)}
          ref={inputRef}
        />
        <ButtonIcon title={"Search"} icon={<CiSearch />} type="submit" />
        {toastComponent}
      </form>
    </div>
  );
}

export default SearchForm;
