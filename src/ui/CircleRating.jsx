import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import classes from "./CircleRating.module.scss";
function CircleRating({ rating }) {
  const ratingNumber = Number(rating);
  return (
    <div className={classes.circleRating}>
      <CircularProgressbar
        value={ratingNumber}
        maxValue={10}
        text={rating}
        strokeWidth={5}
        styles={buildStyles({
          pathColor:
            ratingNumber < 5 ? "red" : ratingNumber < 7 ? "orange" : "green",
        })}
      />
    </div>
  );
}

export default CircleRating;
