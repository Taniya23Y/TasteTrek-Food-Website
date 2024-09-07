import React from "react";
import "../assets/css/Loader-video.css";

const MainLoader = () => {
  return (
    <div className="loader-container flex justify-center items-center mx-auto">
      <dotlottie-player
        className="responsive-lottie"
        src="https://lottie.host/5357a5da-de1d-4afa-8be1-d2b02f111560/vnaWSTSKnx.json"
        background="transparent"
        speed="1"
        loop
        autoplay
      ></dotlottie-player>
    </div>
  );
};

export default MainLoader;
