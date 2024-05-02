import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getInitialPoster } from "../../store/slices/homeSlice";
import HeroBanner from "./heroBanner/HeroBanner";
import Trending from "./trending/Trending";
import Popular from "./popular/Popular";
import TopRated from "./topRated/TopRated";

function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getInitialPoster());
    window.scrollTo({ top: 0 });
  }, [dispatch]);
  return (
    <>
      <main>
        <HeroBanner />
        <Trending />
        <Popular />
        <TopRated />
      </main>
    </>
  );
}

export default Home;
