// IconButton.jsx
import React from "react";
import styles from "./IconButton.module.scss";

const IconButton = ({ icon, title, backgroundColor }) => {
  return (
    <button
      className={`${styles.button} group`}
      style={{ backgroundColor: backgroundColor }}
    >
      <span>{icon}</span>
      <span className={styles.tooltip}>{title}</span>
    </button>
  );
};

export default IconButton;
