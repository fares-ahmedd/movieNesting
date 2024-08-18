import { useSelector } from "react-redux";
import PosterFallback from "../../assets/no-poster.png";
import Img from "../lazyLoadImage/Img";
import dayjs from "dayjs";
import classes from "./CarouselItem.module.scss";
import CircleRating from "../../ui/CircleRating";
import Genres from "../genres/Genres";
import { useNavigate } from "react-router-dom";
import { selectUrl } from "../../store/slices/homeSlice";
function CarouselItem({ item, endpoint }) {
  const url = useSelector(selectUrl);
  const navigate = useNavigate();

  const posterUrl =
    item.poster_path && url ? url + item.poster_path : PosterFallback;
  function handleClick() {
    navigate(`/${item.media_type || endpoint}/${item.id}`);
  }
  return (
    <li className={classes.carouselItem} key={item.id} onClick={handleClick}>
      <div className={classes.posterBlock}>
        <Img src={posterUrl} className={classes.img} />
        <CircleRating
          rating={item.vote_average.toFixed(1)}
          key={Math.random()}
        />
      </div>
      <Genres data={item.genre_ids} />

      <div className={classes.textBlock} style={{ textAlign: "center" }}>
        <span className={classes.title}>{item.title || item.name}</span>
        <span className={classes.date}>
          {dayjs(item.release_Date).format("MMM D, YYYY")}
        </span>
      </div>
    </li>
  );
}

export default CarouselItem;
