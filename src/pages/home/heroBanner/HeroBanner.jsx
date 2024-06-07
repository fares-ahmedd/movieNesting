import { useEffect, useState } from "react";
import useFetch from "../../../hooks/useFetch";
import classes from "./HeroBanner.module.scss";
import { useSelector } from "react-redux";
import Img from "../../../components/lazyLoadImage/Img";
import LogoSpinner from "../../../ui/LogoSpinner";
import RandomMovie from "../../../assets/random-movies.jpg";
import HeroBannerContent from "./HeroBannerContent";
function HeroBanner() {
  const [srcImage, setSrcImage] = useState("");
  const { data, isLoading } = useFetch("/movie/upcoming");
  const { url } = useSelector((state) => state.home);
  const randomNumber = Math.floor(Math.random() * data?.results.length - 1);

  useEffect(() => {
    if (url || data?.results[randomNumber]?.backdrop_path) {
      setSrcImage(`${url}${data?.results[randomNumber]?.backdrop_path}`);
    } else {
      setSrcImage(RandomMovie);
    }
  }, [data, url, randomNumber]);
  if (isLoading) return <LogoSpinner />;
  return (
    <div className={classes["hero-banner"]}>
      <div className={classes["hero-banner__backdrop-img"]}>
        <Img src={srcImage} className={"img-poster"} />
      </div>
      <HeroBannerContent />
      <div className={classes["hero-banner--opacity"]}></div>
    </div>
  );
}

export default HeroBanner;
