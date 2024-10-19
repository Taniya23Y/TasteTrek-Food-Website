import React from "react";
import { Route, Routes } from "react-router-dom";
import DBHome from "../dataStore/DBHome";
import DBOrders from "../dataStore/DBOrders";
import DBItems from "../dataStore/DBItems";
import DBNewItems from "../dataStore/DBNewItems";
import DBUsers from "../dataStore/DBUsers";

const MainDash = () => {
  return (
    <div className="MainDash overflow-y-scroll scrollbar">
      <h1 className="text-4xl pb-2  font-bold pt-8">DashBoard</h1>
      {/* food banner  */}

      <div className="py-2 flex flex-col flex-1 ">
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

export default MainDash;
