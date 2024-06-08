import { useRef, useState } from "react";
import classes from "./SearchForm.module.scss";
import { CiSearch } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import ButtonIcon from "../../ui/ButtonIcon";
import useToast from "../../ui/ErrorMessage";
import useOnClickOutside from "../../hooks/useClickOutside";
import { fetchPopularMovies } from "../../utils/api";
import SuggestionItem from "./SuggestionItem";
function SearchForm() {
  const [query, setQuery] = useState("");
  const [isFocus, setIsFocus] = useState(false);
  const [suggestionMovies, setSuggestionMovies] = useState([]);
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
  async function handleFocusInput() {
    setIsFocus(true);
    const movies = await fetchPopularMovies();
    console.log(movies);
    if (movies) {
      setSuggestionMovies(movies);
    }
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
          onFocus={handleFocusInput}
          ref={inputRef}
        />
        <ButtonIcon title={"Search"} icon={<CiSearch />} type="submit" />
        {suggestionMovies.length > 0 && (
          <ul className={classes.suggestionsList}>
            {suggestionMovies.map((movie) => (
              <SuggestionItem movie={movie} key={movie.id} />
            ))}
          </ul>
        )}
      </form>
      {toastComponent}
    </div>
  );
}

export default SearchForm;
