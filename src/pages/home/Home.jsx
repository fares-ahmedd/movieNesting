import HeroBanner from "./heroBanner/HeroBanner";
import Trending from "./trending/Trending";
import Popular from "./popular/Popular";
import TopRated from "./topRated/TopRated";

function Home() {
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
