import classes from "./VideoSkeleton.module.scss";

function VideoSkeleton() {
  const loadingSkeleton = () => {
    return (
      <div className={classes.skItem}>
        <div className={`${classes.thumb} ${classes.skeleton}`}></div>
        <div className={`${classes.row} ${classes.skeleton}`}></div>
        <div className={`${classes.row2} ${classes.skeleton}`}></div>
      </div>
    );
  };
  return (
    <div className={classes.videoSkeleton}>
      {loadingSkeleton()}
      {loadingSkeleton()}
      {loadingSkeleton()}
      {loadingSkeleton()}
    </div>
  );
}

export default VideoSkeleton;
