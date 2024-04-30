import { FaStar } from "react-icons/fa";
import classes from "./RatingAndPlay.module.scss";
import Playbtn from "../Playbtn";

function RatingAndPlay({ data }) {
  return (
    <div className={classes.row}>
      <h1 className={classes.rating}>
        {data.vote_average.toFixed(1)}
        <FaStar />
      </h1>
      <Playbtn />
    </div>
  );
}

export default RatingAndPlay;
