import { useState } from "react";
import classes from "./SwitchTabs.module.scss";

function SwitchTabs({ data, onTabChange }) {
  const [selectedTab, setSelectedTab] = useState(0);
  const [left, setLeft] = useState(0);

  function activeTab(tab, index) {
    setLeft(index * 100);
    setTimeout(() => {
      setSelectedTab(index);
    }, 300);
    onTabChange(tab);
  }
  return (
    <div className={classes.switchingTabs}>
      <div className={classes.tabItems}>
        {data.map((tab, index) => (
          <span
            key={index}
            className={`${classes.tabItem} ${
              selectedTab === index ? classes.active : ""
            }`}
            onClick={() => activeTab(tab, index)}
          >
            {tab}
          </span>
        ))}
        <span className={classes.movingBg} style={{ left }} />
      </div>
    </div>
  );
}

export default SwitchTabs;
