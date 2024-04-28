import React from "react";
import styles from "./LogoSpinner.module.scss";
import logoImage from "../assets/favicon-.png"; // Import your logo image
import Img from "../components/lazyLoadImage/Img";

function LogoSpinner() {
  return (
    <section style={{ height: "100vh" }}>
      <div className={styles.spinnerContainer}>
        <div className={styles.spinner}>
          <Img src={logoImage} className={styles.logo} />
          <h1 className={styles.title}>Loading...</h1>
        </div>
      </div>
    </section>
  );
}

export default LogoSpinner;
