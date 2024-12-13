import { useEffect, useRef, useState } from "react";
import classes from "./SearchForm.module.scss";
import { CiSearch } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import ButtonIcon from "../../ui/ButtonIcon";
import useOnClickOutside from "../../hooks/useClickOutside";
import { fetchPopularMovies } from "../../utils/api";
import SuggestionItem from "./SuggestionItem";
function SearchForm() {
  const [query, setQuery] = useState("");
  const [isFocus, setIsFocus] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(0);
  const [suggestionMovies, setSuggestionMovies] = useState([]);
  const selectorRef = useRef(null);
  const inputRef = useRef(null);
  const filterSuggestionMovies = suggestionMovies.filter((movie) =>
    movie.title.toLowerCase().includes(query.toLowerCase())
  );
  useOnClickOutside(inputRef, () => setIsFocus(false));
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!query.trim()) {
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
    if (movies) {
      setSuggestionMovies(movies);
    }
  }
  function handleKeyDown(e) {
    if (e.key === "ArrowDown") {
      setFocusedIndex((prevIndex) =>
        prevIndex < filterSuggestionMovies.length - 1 ? prevIndex + 1 : 0
      );
    } else if (e.key === "ArrowUp") {
      setFocusedIndex((prevIndex) =>
        prevIndex > 0 ? prevIndex - 1 : filterSuggestionMovies.length - 1
      );
    } else if (e.key === "Enter" && focusedIndex !== -1) {
      navigate(`/movie/${filterSuggestionMovies[focusedIndex].id}`);
      setIsFocus(false);
      setQuery("");
      setFocusedIndex(-1);
    }
  }
  useEffect(() => {
    if (selectorRef?.current) {
      selectorRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, [focusedIndex]);
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
          onChange={(e) => setQuery(e.target.value)}
          onFocus={handleFocusInput}
          ref={inputRef}
          onKeyDown={handleKeyDown}
        />
        <ButtonIcon title={"Search"} icon={<CiSearch />} type="submit" />
        {filterSuggestionMovies.length > 0 && isFocus && (
          <ul className={classes.suggestionsList}>
            <li className={classes.hint}>Must Populer Movies To Watch</li>
            {filterSuggestionMovies.map((movie, index) => (
              <SuggestionItem
                movie={movie}
                key={movie.id}
                setIsFocus={setIsFocus}
                focusedIndex={focusedIndex}
                index={index}
                selectorRef={selectorRef}
              />
            ))}
          </ul>
        )}
      </form>
    </div>
  );
}

export default SearchForm;
