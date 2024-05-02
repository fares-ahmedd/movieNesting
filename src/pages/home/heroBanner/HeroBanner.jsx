import { useEffect, useState } from "react";
import useFetch from "../../../hooks/useFetch";
import classes from "./HeroBanner.module.scss";
import LinkButton from "../../../ui/LinkButton";
import { useSelector } from "react-redux";
import { moviesList } from "../../../utils/helpers";
import Img from "../../../components/lazyLoadImage/Img";
import LogoSpinner from "../../../ui/LogoSpinner";
import { Link } from "react-router-dom";
function HeroBanner() {
  const [background, setBackground] = useState("");
  const { data, isLoading, error } = useFetch("/movie/upcoming");
  const { url } = useSelector((state) => state.home);

  useEffect(() => {
    const randomNumber = Math.floor(Math.random() * data?.results.length - 1);
    const bg = `${url.backdrop}${data?.results[randomNumber]?.backdrop_path}`;
    setBackground(bg);
  }, [data, url]);
  if (isLoading) return <LogoSpinner />;
  return (
    <div className={classes["hero-banner"]}>
      <div className={classes["hero-banner__backdrop-img"]}>
        <Img src={background} className={"img-poster"} />
      </div>
      <div className={classes["hero-banner__content"]}>
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
      <div className={classes["hero-banner--opacity"]}></div>
    </div>
  );
}

export default HeroBanner;
