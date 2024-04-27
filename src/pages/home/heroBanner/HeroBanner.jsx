import { useState } from "react";

function HeroBanner() {
  const [background, setBackground] = useState("");
  const [query, setQuery] = useState("");

  return (
    <div className="hero-banner">
      <div className="hero-banner__backdrop-img"></div>
      <div className="hero-banner__content"></div>
      <div className="hero-banner--opacity"></div>
    </div>
  );
}

export default HeroBanner;
