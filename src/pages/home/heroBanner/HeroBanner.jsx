import { useEffect, useState } from "react";
import useFetch from "../../../hooks/useFetch";
import classes from "./HeroBanner.module.scss";
import { useSelector } from "react-redux";
import Img from "../../../components/lazyLoadImage/Img";
import LogoSpinner from "../../../ui/LogoSpinner";
import RandomMovie from "../../../assets/random-movies.jpg";
import HeroBannerContent from "./HeroBannerContent";
import { selectUrl } from "../../../store/slices/homeSlice";
function HeroBanner() {
  const [srcImage, setSrcImage] = useState("");
  const { data, isLoading } = useFetch("/movie/upcoming");
  const url = useSelector(selectUrl);

  useEffect(() => {
    const randomNumber = Math.floor(Math.random() * data?.results.length - 1);
    const randomPoster = data?.results[randomNumber]?.backdrop_path;
    if (url && randomPoster) {
      setSrcImage(`${url}${randomPoster}`);
    } else {
      setSrcImage(RandomMovie);
    }
  }, [data, url]);
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
