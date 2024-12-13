import classes from "./HeroBannerContent.module.scss";
import { moviesList } from "../../../utils/helpers";
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
        <LinkButton to={"/explore/movie"}>Watch Movies 📽️ </LinkButton>

        <LinkButton to={"/explore/tv"}>Watch TV Shows 📺</LinkButton>
      </div>
    </div>
  );
}

export default HeroBannerContent;
