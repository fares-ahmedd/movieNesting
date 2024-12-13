import classes from "./Error.module.scss";
import LinkButton from "./LinkButton";
import ErrorIcon from "../assets/error.svg";
function Error() {
  return (
    <div className={classes.container}>
      <img alt="Error Icon" src={ErrorIcon} className={classes.img} />
      <h1 className={classes.title}>Sorry, something went wrong 💥</h1>

      <LinkButton to={"/"}>Go Home </LinkButton>
    </div>
  );
}

export default Error;
