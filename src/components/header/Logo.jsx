import { Link } from "react-router-dom";
import ProjectLogo from "../../assets/movieNesting-logo.svg";
import classes from "./Logo.module.scss";

function Logo() {
  return (
    <Link to={"/"}>
      <img src={ProjectLogo} alt="MovieNesting Logo" className={classes.img} />
    </Link>
  );
}

export default Logo;
