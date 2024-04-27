import classes from "./ButtonIcon.module.scss";

function ButtonIcon({ title, icon, ...props }) {
  return (
    <button className={classes["button"]} {...props}>
      <span>{title}</span> {icon}
    </button>
  );
}

export default ButtonIcon;
