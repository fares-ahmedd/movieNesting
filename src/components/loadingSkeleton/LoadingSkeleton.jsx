import classes from './LoadingSkeleton.module.scss';

const LoadingSkeleton = () => {
  return (
    <div className={classes['skeleton-item']}>
      <div className={`${classes['skeleton-item__poster']} skeleton`}></div>
      <div className={classes['skeleton-item__text']}>
        <div className={`${classes['skeleton-item__title']} skeleton`}></div>
        <div className={`${classes['skeleton-item__date']} skeleton`}></div>
      </div>
    </div>
  );
};

export default LoadingSkeleton;
