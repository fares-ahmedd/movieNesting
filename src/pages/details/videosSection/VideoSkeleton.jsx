import classes from "./VideoSkeleton.module.scss";

function VideoSkeleton() {
  const loadingSkeleton = () => {
    return (
      <div className={classes.skItem}>
        <div className={`${classes.thumb} skeleton`}></div>
        <div className={`${classes.row} skeleton`}></div>
        <div className={`${classes.row2} skeleton`}></div>
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
