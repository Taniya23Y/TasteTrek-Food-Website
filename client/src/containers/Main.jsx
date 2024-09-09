import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

function Main() {
  return (
    // <main className="w-full min-h-screen flex items-center justify-center flex-col bg-[#F5F3F0] ">
    <main className="w-full h-full flex items-center justify-center flex-col bg-[#F5F3F0] ">
      <Navbar />
      <Hero />

      {/* <Hero /> */}
    </main>
  );
}

export default Main;
