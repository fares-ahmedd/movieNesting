import { useSelector } from "react-redux";
import classes from "./SuggestionItem.module.scss";
import Img from "../lazyLoadImage/Img";
import { useEffect, useState } from "react";
import NoPosterImage from "../../assets/no-poster.png";
import { useNavigate } from "react-router-dom";

function SuggestionItem({
  movie,
  setIsFocus,
  focusedIndex,
  index,
  selectorRef,
}) {
  const [movieImage, setMovieImage] = useState("");
  const { url } = useSelector((state) => state.home);
  const navigate = useNavigate();

  useEffect(() => {
    if (url || movie?.backdrop_path) {
      setMovieImage(`${url}${movie?.backdrop_path}`);
    } else {
      setMovieImage(NoPosterImage);
    }
  }, [movie, url]);

  function handleClick() {
    setIsFocus(false);
    navigate(`/movie/${movie.id}`);
  }
  return (
    <li
      className={`${classes.suggestionItem} ${
        focusedIndex === index ? classes.focused : ""
      }`}
      onClick={handleClick}
      ref={focusedIndex === index ? selectorRef : null}
    >
      <Img src={movieImage} className={classes.img} />
      <section className={classes.section}>
        <span className={classes.title}>{movie?.title}</span>
        <span className={classes.date}>{movie?.release_date}</span>
      </section>
    </li>
  );
}

export default SuggestionItem;
