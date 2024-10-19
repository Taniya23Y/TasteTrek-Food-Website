import React from "react";
import Cards from "../dataStore/Cards";
import Table from "../dataStore/Table";

const DBHome = () => {
  return (
    <div className="text-black ">
      <Cards />
      <Table />
    </div>
  );
};

export default DBHome;
