import React from "react";
import "../index.css";
import { MainDash, RightSide, Sidebar } from "../components";

const ADashboard = () => {
  return (
    <div className="ADashboard w-full h-[100vh] flex justify-center items-center overflow-x-auto scrollbar">
      <div className="ADashboard-div ">
        <Sidebar />
        <MainDash />
        {/* <RightSide /> */}
      </div>
    </div>
  );
};

export default ADashboard;
