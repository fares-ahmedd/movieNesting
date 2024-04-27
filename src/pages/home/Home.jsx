import HeroBanner from "./heroBanner/HeroBanner";
import classes from "./Home.module.scss";
function Home() {
  return (
    <>
      <main className={classes.main}>
        <HeroBanner />
      </main>
    </>
  );
}

export default Home;
