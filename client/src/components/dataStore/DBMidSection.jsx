import React from "react";
import { Route, Routes } from "react-router-dom";
import DBHeader from "../dataStore/DBHeader";
import DBHome from "../dataStore/DBHome";
import DBOrders from "../dataStore/DBOrders";
import DBItems from "../dataStore/DBItems";
import DBNewItems from "../dataStore/DBNewItems";
import DBUsers from "../dataStore/DBUsers";

const DBMidSection = () => {
  return (
    // <div className="flex flex-col py-12 px-12 flex-1 h-full bg-red-400">
    <div className="flex flex-col gap-4 py-7 px-11 flex-1 h-full bg-[#FFEFCD]">
      <DBHeader />
      <div className="flex flex-col flex-1 overflow-y-scroll scrollbar">
        <Routes>
          <Route path="/home" element={<DBHome />} />
          <Route path="/orders" element={<DBOrders />} />
          <Route path="/items" element={<DBItems />} />
          <Route path="/newItem" element={<DBNewItems />} />
          <Route path="/users" element={<DBUsers />} />
        </Routes>
      </div>
    </div>
  );
};

export default DBMidSection;
