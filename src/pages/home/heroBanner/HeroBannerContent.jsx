import classes from "./HeroBannerContent.module.scss";
import { moviesList } from "../../../utils/helpers";
import { Link } from "react-router-dom";
import LinkButton from "../../../ui/LinkButton";
function HeroBannerContent() {
  return (
    <div className={classes["content"]}>
      <h1 className={classes["title"]}>
        Unlimited Movies and TVs <br /> Shows and More
      </h1>
      <ul className={classes["movies-list"]}>
        {moviesList.map((movie) => (
          <li key={movie}>{movie}</li>
        ))}
      </ul>
      <div className={classes["button-group"]}>
        <Link to={"/explore/movie"}>
          <LinkButton>Watch Movies 📽️ </LinkButton>
        </Link>
        <Link to={"/explore/tv"}>
          <LinkButton>Watch TV Shows 📺</LinkButton>
        </Link>
      </div>
    </div>
  );
}

export default HeroBannerContent;
