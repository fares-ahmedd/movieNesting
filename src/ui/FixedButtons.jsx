import ButtonIcon from "./ButtonIcon";
import classes from "./FixedButtons.module.scss";

function FixedButtons() {
  return (
    <div className={classes.fixed}>
      <ButtonIcon title={"Movies"} />
      <ButtonIcon title={"TV Shows"} />
    </div>
  );
}

export default FixedButtons;
