import styles from "./NotFound.module.scss";
import pageNotFound from "../../assets/error.svg";
import LinkButton from "../../ui/LinkButton";
function NotFoundPage() {
  return (
    <div className={styles.container}>
      <img className={styles.image} src={pageNotFound} alt="404 Not Found" />
      <h1 className={styles.title}>Oops! Page Not Found :(</h1>
      <p className={styles.description}>
        The page you're looking for doesn't exist or has been moved.
      </p>

      <LinkButton to={"/"}>Go Back Home</LinkButton>
    </div>
  );
}

export default NotFoundPage;
