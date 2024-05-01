import classes from "./CastSkeleton.module.scss";

const CastSkeleton = () => {
  const skeletonItem = [];
  for (let i = 0; i < 6; i++) {
    skeletonItem.push(
      <div key={i} className={classes["cast-skeleton__item"]}>
        <div className={`${classes["cast-skeleton__circle"]} skeleton`}></div>
        <div
          className={`${classes["cast-skeleton__item--first"]} skeleton`}
        ></div>
        <div
          className={`${classes["cast-skeleton__item--second"]} skeleton`}
        ></div>
      </div>
    );
  }
  return (
    <div className={classes["cast-skeleton"]}>
      {skeletonItem.map((item) => item)}
    </div>
  );
};

export default CastSkeleton;
