import classes from "./Overview.module.scss";

function Overview({ data }) {
  return (
    <div className={classes.overview}>
      <div className={classes.heading}>Overview</div>
      <p className={classes.description}>{data.overview}</p>
    </div>
  );
}

export default Overview;
