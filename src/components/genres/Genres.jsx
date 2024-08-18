import { useSelector } from "react-redux";
import classes from "./Genres.module.scss";
import { selectGenres } from "../../store/slices/homeSlice";

function Genres({ data, width, isCard = true }) {
  const genres = useSelector(selectGenres);

  if (data.length < 1) return;
  return (
    <ul className={classes.genres}>
      {data?.map((g) => (
        <li
          className={`${isCard ? classes.card : classes.genre}`}
          key={g}
          style={{ width }}
        >
          {genres[g]?.name}
        </li>
      ))}
    </ul>
  );
}

export default Genres;
