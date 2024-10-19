import React from "react";
import HeroLeftImage from "../assets/hero-leftImage.png";
import HeroRightImage from "../assets/hero-rightImage.png";

const HeroDivider = () => {
  return (
    <section className="flex">
      <div className="left">
        <img src={HeroLeftImage} alt="hero-left" />
      </div>
      <div>
        <img src={HeroRightImage} alt="hero-left" />
      </div>
    </section>
  );
};

export default HeroDivider;
