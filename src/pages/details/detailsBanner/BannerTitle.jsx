import dayjs from "dayjs";
import classes from "./BannerTitle.module.scss";

function BannerTitle({ data }) {
  return (
    <>
      <h1 className={classes.title}>
        {`${data.name || data.title} (${dayjs(data.release_date).format(
          "YYYY"
        )})`}
      </h1>
      <span className={classes.subtitle}>{data?.tagline}</span>
    </>
  );
}

export default BannerTitle;
