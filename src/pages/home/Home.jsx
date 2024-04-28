import { useCallback, useEffect } from "react";

import { fetchData } from "../../utils/api";
import { useDispatch } from "react-redux";
import { getApiConfig } from "../../store/slices/homeSlice";

import HeroBanner from "./heroBanner/HeroBanner";
import classes from "./Home.module.scss";
import Trending from "./trending/Trending";
function Home() {
  const dispatch = useDispatch();
  const getInitialPoster = useCallback(
    async function getInitialPoster() {
      try {
        const response = await fetchData("/configuration");
        const data = {
          backdrop: `${response.images.secure_base_url}original`,
          poster: `${response.images.secure_base_url}original`,
          profile: `${response.images.secure_base_url}original`,
        };
        dispatch(getApiConfig(data));
      } catch (error) {}
    },
    [dispatch]
  );
  useEffect(() => {
    getInitialPoster();
  }, [getInitialPoster]);
  return (
    <>
      <main className={classes.main}>
        <HeroBanner />
        <Trending />
      </main>
    </>
  );
}

export default Home;
