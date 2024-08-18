import { useEffect } from "react";
import HeroBanner from "./heroBanner/HeroBanner";
import Trending from "./trending/Trending";
import Popular from "./popular/Popular";
import TopRated from "./topRated/TopRated";

function Home() {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
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
