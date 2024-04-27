import { useEffect, useState } from "react";
import { GiTvRemote } from "react-icons/gi";

import useFetch from "../../../hooks/useFetch";
import classes from "./HeroBanner.module.scss";
import LinkButton from "../../../ui/LinkButton";
import { useSelector } from "react-redux";
function HeroBanner() {
  const [background, setBackground] = useState("");
  const { data, isLoading, error } = useFetch("/movie/upcoming");
  const { url } = useSelector((state) => state.home);

  useEffect(() => {
    const randomNumber = Math.floor(Math.random() * data?.results.length - 1);
    const bg = `${url.backdrop}${data?.results[randomNumber]?.backdrop_path}`;
    setBackground(bg);
  }, [data, url]);
  console.log(background);
  return (
    <div className={classes["hero-banner"]}>
      <div className={classes["hero-banner__backdrop-img"]}></div>
      <div className={classes["hero-banner__content"]}>
        <h1 className={classes["title"]}>
          Unlimited Movies and TVs <br /> Shows and More
        </h1>
        <ul className={classes["movies-list"]}>
          <li>Horror Movies</li>
          <li>Romantic Movies</li>
          <li>Drama Movies</li>
          <li>Action Movies</li>
          <li>Fantasy Movies</li>
          <li>TV Shows</li>
        </ul>
        <div className={classes["button-group"]}>
          <LinkButton>Watch Movies 📽️ </LinkButton>
          <LinkButton>Watch TV Shows 📺</LinkButton>
        </div>
      </div>
      <div className="hero-banner--opacity"></div>
    </div>
  );
}

export default HeroBanner;
