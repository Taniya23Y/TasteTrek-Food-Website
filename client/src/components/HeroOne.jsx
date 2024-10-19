import React from "react";
import HeroLeftImage from "../assets/heroleft1.png";
import HeroRightImage from "../assets/heroright1.png";

const HeroOne = () => {
  return (
    <section className="flex">
      <div className="bg-white rounded-md">
        <div className="left">
          <img src={HeroLeftImage} alt="hero-left" />
        </div>
        <div>
          <img src={HeroRightImage} alt="hero-left" />
        </div>
      </div>
    </section>
  );
};

export default HeroOne;
