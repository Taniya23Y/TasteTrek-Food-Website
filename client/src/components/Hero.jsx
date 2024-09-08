import React from "react";
import HeroIMG from "../assets/HeroImg.png";

const Hero = () => {
  return (
    <section className="w-auto h-auto bg-[white] flex flex-col sm:flex-row items-center justify-between rounded-2xl px-1 py-1 select-none">
      <div className="bg-[#FEBD2E] w-[100%] h-auto flex flex-col sm:flex-row items-center justify-between rounded-2xl">
        {/* Text Section */}

        <div className="flex pt-[5rem]">
          <div className="p-3 lg:p-9 flex flex-col items-center justify-center space-y-4 md:space-y-6 max-w-lg">
            <div className="text-4xl md:text-6xl lg:text-[6rem] flex flex-col font-bold text-black">
              <span className="font-[Aclonica]">Taste</span>
              <span className="flex flex-end">
                <pre className="flex flex-end font-[Aclonica]"> - Trek</pre>
              </span>
              <span className="font-[Aclonica]">Secrets</span>
            </div>
            <div className="text-sm text-center text-red-600 flex justify-center items-center">
              🍽️Bringing flavor to your doorstep!
            </div>
          </div>

          {/* Subtitle Section */}
          <div className="flex flex-col  justify-center items-center top-10 mt-4 mb-3 md:mt-0">
            <p className="text-sm md:text-base text-black text-center">
              🤍 New strawberry season has started,
            </p>
            <p className="text-sm md:text-base text-black text-center">
              let’s Find Food!
            </p>
          </div>
        </div>

        {/* Image Section */}
        <div className="mt-0 md:mt-0 lg:mt-12 flex justify-center select-none">
          <img
            src={HeroIMG}
            alt="Chef Illustration"
            className="w-[220px] h-[200px] md:w-auto md:h-auto bottom-0 object-contain pointer-events-none"
          />
        </div>

        {/* SVG and Play Button Section */}
        <div className="hidden md:flex flex-col justify-center items-center gap-[1rem]">
          <svg
            className="w-[7.8125vw] h-[33vh]"
            viewBox="0 0 100 300"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M50,0 C30,30 20,60 30,90 C40,120 70,150 50,180 C30,210 20,240 30,270 C40,300 70,300 50,270 C30,240 20,210 30,180 C40,150 70,120 50,90 C30,60 20,30 50,0 Z"
              fill="#000000"
            />
          </svg>

          <button className="bottom-0 right-0 w-10 h-10 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-red-500 rounded-full flex items-center justify-center text-white shadow-md hover:scale-105 transition-transform">
            ▶
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
