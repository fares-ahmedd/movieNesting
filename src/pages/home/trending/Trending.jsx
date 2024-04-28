import SwitchTabs from "../../../components/switchTabs/SwitchTabs";
import classes from "./Trending.module.scss";

function Trending() {
  function onTabChange(tab) {}
  return (
    <section className={classes.carouselSection}>
      <div className={classes.layout}>
        <span className={classes.carouselTitle}>Trending</span>
        <SwitchTabs data={["Day", "Week"]} onTabChange={onTabChange} />
      </div>
    </section>
  );
}

export default Trending;
