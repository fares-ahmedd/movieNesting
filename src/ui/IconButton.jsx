// IconButton.jsx
import styles from "./IconButton.module.scss";

const IconButton = ({ icon, title, backgroundColor, onClick, className }) => {
  return (
    <button
      className={`${styles.button} group ${className}`}
      style={{ backgroundColor: backgroundColor }}
      onClick={onClick}
    >
      <span>{icon}</span>
      <span className={styles.tooltip}>{title}</span>
    </button>
  );
};

export default IconButton;
