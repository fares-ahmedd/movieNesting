import { useEffect, useState } from "react";
import SwitchTabs from "../../../components/switchTabs/SwitchTabs";
import useFetch from "../../../hooks/useFetch";
import classes from "./TopRated.module.scss";
import Carousel from "../../../components/carousel/Carousel";
import { genresCall } from "../../../utils/api";
import { useDispatch } from "react-redux";
import { getGenres } from "../../../store/slices/homeSlice";

function TopRated() {
  const [endpoint, setEndpoint] = useState("movie");
  const dispatch = useDispatch();
  const { data, isLoading } = useFetch(`/${endpoint}/top_rated`);
  useEffect(() => {
    async function getGenresCall() {
      const response = await genresCall();
      dispatch(getGenres(response));
    }
    getGenresCall();
  }, [dispatch]);
  function onTabChange(tab) {
    setEndpoint(tab === "Movies" ? "movie" : "tv");
  }

  return (
    <section className={classes.carouselSection}>
      <div className={classes.layout}>
        <span className={classes.carouselTitle}>Top Rated</span>
        <SwitchTabs data={["Movies", "TV Shows"]} onTabChange={onTabChange} />
      </div>
      <Carousel
        data={data?.results}
        isLoading={isLoading}
        endpoint={endpoint}
      />
    </section>
  );
}

export default TopRated;
