import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";

import classes from "./MovieCard.module.scss";
import Img from "../lazyLoadImage/Img";
import CircleRating from "../../ui/CircleRating";
import Genres from "../genres/Genres";
import PosterFallback from "../../assets/no-poster.png";
import { URL } from "../../utils/api";

const MovieCard = ({ data, fromSearch, mediaType }) => {
  const navigate = useNavigate();
  const posterUrl = data.poster_path ? URL + data.poster_path : PosterFallback;
  return (
    <div
      className={classes.movieCard}
      onClick={() => navigate(`/${data.media_type || mediaType}/${data.id}`)}
    >
      <div className={classes.posterBlock}>
        <Img className={classes.posterImg} src={posterUrl} />
        <>
          <CircleRating rating={data.vote_average.toFixed(1)} />
          <Genres data={data.genre_ids} />
        </>
      </div>
      <div className={classes.textBlock}>
        <span className={classes.title}>{data.title || data.name}</span>
        <span className={classes.date}>
          {dayjs(data.release_date).format("MMM D, YYYY")}
        </span>
      </div>
    </div>
  );
};

export default MovieCard;
