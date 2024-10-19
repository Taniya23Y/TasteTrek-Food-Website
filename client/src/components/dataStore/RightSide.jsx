import React from "react";

import CustomerReview from "./Customer";
import Updates from "./Updates";

const RightSide = () => {
  return (
    <div className="RightSide flex flex-col w-[89%] justify-evenly lg:w-[100%] lg:mt-0">
      <div className="md:flex md:flex-col md:items-center">
        <h3 className="text-xl pb-1  font-bold pt-1">Updates</h3>
        <Updates />
      </div>
      <div>
        <h3>Customer Review</h3>
        <CustomerReview />
      </div>
    </div>
  );
};

export default RightSide;
