import { NavLink } from "react-router-dom";
import ButtonIcon from "./ButtonIcon";
import classes from "./FixedButtons.module.scss";

function FixedButtons() {
  return (
    <div className={classes.fixed}>
      <NavLink
        to={"/explore/movie"}
        className={({ isActive }) => (isActive ? classes.active : "")}
      >
        <ButtonIcon title={"Movies"} />
      </NavLink>
      <NavLink
        to={"/explore/tv"}
        className={({ isActive }) => (isActive ? classes.active : "")}
      >
        <ButtonIcon title={"TV Shows"} />
      </NavLink>
    </div>
  );
}

export default FixedButtons;
