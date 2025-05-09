import React from "react";

const Spinner = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="w-10 h-10 bg-[#FEBD2E] animate-ping rounded-full flex items-center justify-center relative">
        <div className="absolute inset-0 rounded-full bg-[#B17908] blur-xl"></div>
      </div>
    </div>
  );
};

export default Spinner;
