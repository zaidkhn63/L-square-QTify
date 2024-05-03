import React from "react";
import "./Hero.css";
import heroLogo from "../../Assets/hero.png";
const Hero = () => {
  return (
    <div className="hero">
      <div>
        <h1>100 Thousand Songs, ad-free</h1>
        <h1>Over thousands podcast episodes</h1>
      </div>
      <div>
        <img src={heroLogo} width={212} alt="not available" />
      </div>
    </div>
  );
};

export default Hero;
