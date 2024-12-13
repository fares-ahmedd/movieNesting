// Btn.jsx
import styles from "./Playbtn.module.scss";

function Playbtn({ onClick, isRemoveTitle = false }) {
  return (
    <div
      className={`${styles.btnContainer} ${isRemoveTitle ? styles.title : ""}`}
      onClick={onClick}
      role="button"
    >
      <span className={styles.button}>
        <svg
          viewBox="0 0 448 512"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          width="20px"
        >
          <path
            d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"
            fill="currentColor"
          />
        </svg>
      </span>
      {isRemoveTitle ? null : <span>Watch Trailer</span>}
    </div>
  );
}

export default Playbtn;
