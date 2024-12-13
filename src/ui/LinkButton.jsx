import { Link } from "react-router-dom";
import styles from "./LinkButton.module.scss";

function Button({ children, ...props }) {
  return (
    <Link className={styles.button} {...props}>
      <span>{children}</span>
      <svg width="15px" height="10px" viewBox="0 0 13 10">
        <path d="M1,5 L11,5"></path>
        <polyline points="8 1 12 5 8 9"></polyline>
      </svg>
    </Link>
  );
}

export default Button;
