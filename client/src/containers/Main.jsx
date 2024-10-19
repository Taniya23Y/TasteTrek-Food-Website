import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

function Main() {
  return (
    // <main className="w-full min-h-screen flex items-center justify-center flex-col bg-[#F5F3F0] ">
    <main className="w-full h-full flex items-center justify-center flex-col bg-white ">
      <div className="bg-[#F5F3F0] rounded-2xl">
        <div className="flex justify-center items-center">
          <Navbar />
        </div>

        <Hero />

        {/* <HeroDivider /> */}
        {/* <HeroOne /> */}

        <h1>Heelo jii</h1>
        <h1>Heelo jii</h1>
        <h1>Heelo jii</h1>
        <h1>Heelo jii</h1>
        <h1>Heelo jii</h1>
        <h1>Heelo jii</h1>
      </div>
    </main>
  );
}

export default Main;
