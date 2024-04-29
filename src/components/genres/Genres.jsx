import { useSelector } from "react-redux";
import classes from "./Genres.module.scss";

function Genres({ data }) {
  const { genres } = useSelector((state) => state.home);
  return (
    <div className={classes.genres}>
      {data?.map((g) => {
        if (!genres[g]?.name) return null;
        return (
          <div className={classes.genre} key={g}>
            {genres[g]?.name}
          </div>
        );
      })}
    </div>
  );
}

export default Genres;
