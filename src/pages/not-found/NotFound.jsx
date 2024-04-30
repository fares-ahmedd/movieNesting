import React from "react";
import styles from "./NotFound.module.scss";
import pageNotFound from "../../assets/error.svg";
import { Link } from "react-router-dom";
import LinkButton from "../../ui/LinkButton";
function NotFoundPage() {
  return (
    <div className={styles.container}>
      <img className={styles.image} src={pageNotFound} alt="404 Not Found" />
      <h1 className={styles.title}>Oops! Page Not Found :(</h1>
      <p className={styles.description}>
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link to={"/"}>
        {" "}
        <LinkButton>Go Back Home</LinkButton>
      </Link>
    </div>
  );
}

export default NotFoundPage;
