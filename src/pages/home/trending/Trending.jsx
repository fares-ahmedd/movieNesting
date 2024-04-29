import { useEffect, useState } from "react";
import SwitchTabs from "../../../components/switchTabs/SwitchTabs";
import useFetch from "../../../hooks/useFetch";
import classes from "./Trending.module.scss";
import Carousel from "../../../components/carousel/Carousel";
import { genresCall } from "../../../utils/api";
import { useDispatch } from "react-redux";
import { getGenres } from "../../../store/slices/homeSlice";

function Trending() {
  const [endpoint, setEndpoint] = useState("day");
  const dispatch = useDispatch();
  const { data, isLoading } = useFetch(`/trending/all/${endpoint}`);
  useEffect(() => {
    async function getGenresCall() {
      const response = await genresCall();
      dispatch(getGenres(response));
    }
    getGenresCall();
  }, [dispatch]);
  function onTabChange(tab) {
    setEndpoint(tab === "Day" ? "day" : "week");
  }

  return (
    <section className={classes.carouselSection}>
      <div className={classes.layout}>
        <span className={classes.carouselTitle}>Trending</span>
        <SwitchTabs data={["Day", "Week"]} onTabChange={onTabChange} />
      </div>
      <Carousel data={data?.results} isLoading={isLoading} />
    </section>
  );
}

export default Trending;
