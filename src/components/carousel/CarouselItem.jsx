import { useSelector } from "react-redux";
import PosterFallback from "../../assets/no-poster.png";
import Img from "../lazyLoadImage/Img";
import dayjs from "dayjs";
import classes from "./CarouselItem.module.scss";
function CarouselItem({ item }) {
  const { url } = useSelector((state) => state.home);

  const posterUrl = item.poster_path
    ? url.poster + item.poster_path
    : PosterFallback;

  return (
    <div className={classes.carouselItem} key={item.id}>
      <div className={classes.posterBlock}>
        <Img src={posterUrl} className={classes.img} />
      </div>
      <div className={classes.textBlock} style={{ textAlign: "center" }}>
        <span className={classes.title}>{item.title || item.name}</span>
        <span className={classes.date}>
          {dayjs(item.release_Date).format("MMM D, YYYY")}
        </span>
      </div>
    </div>
  );
}

export default CarouselItem;
