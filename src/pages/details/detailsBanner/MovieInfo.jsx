import dayjs from "dayjs";
import classes from "./MovieInfo.module.scss";
import { toHoursAndMinutes } from "../../../utils/helpers";

function MovieInfo({ data, writer, director }) {
  return (
    <>
      <div className={classes.info}>
        {data.status && (
          <div className={classes.infoItem}>
            <span className={`${classes.text} ${classes.bold}`}>Status: </span>
            <span className={classes.text}>{data.status}</span>
          </div>
        )}
        {data.release_date && (
          <div className={classes.infoItem}>
            <span className={`${classes.text} ${classes.bold}`}>
              Release Date:{" "}
            </span>
            <span className={classes.text}>
              {dayjs(data.release_date).format("MMM D, YYYY")}
            </span>
          </div>
        )}
        {data.runtime && (
          <div className={classes.infoItem}>
            <span className={`${classes.text} ${classes.bold}`}>Runtime: </span>
            <span className={classes.text}>
              {toHoursAndMinutes(data.runtime)}
            </span>
          </div>
        )}
      </div>
      {director?.length > 0 && (
        <div className={classes.info}>
          <span className={`${classes.text} ${classes.bold}`}>Director: </span>
          <span className={classes.text}>
            {director.map((d, i) => (
              <span key={i}>
                {d.name} {director?.length - 1 !== i && ", "}
              </span>
            ))}
          </span>
        </div>
      )}
      {writer?.length > 0 && (
        <div className={classes.info}>
          <span className={`${classes.text} ${classes.bold}`}>Writer: </span>
          <span className={classes.text}>
            {writer.map((d, i) => (
              <span key={i}>
                {d.name} {writer?.length - 1 !== i && ", "}
              </span>
            ))}
          </span>
        </div>
      )}
    </>
  );
}

export default MovieInfo;
