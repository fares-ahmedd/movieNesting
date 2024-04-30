import dayjs from "dayjs";
import classes from "./BannerTitle.module.scss";

function BannerTitle({ data }) {
  return (
    <>
      <div className={classes.title}>
        {`${data.name || data.title} (${dayjs(data.release_date).format(
          "YYYY"
        )})`}
      </div>
      <div className={classes.subtitle}>{data?.tagline}</div>
    </>
  );
}

export default BannerTitle;
