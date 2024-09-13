import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  BiSolidReport,
  IoBarChartSharp,
  IoPieChartSharp,
  TbLayoutSidebarRightCollapseFilled,
} from "../../assets/icons";
import { motion } from "framer-motion";
import { buttonClick } from "../../animations";

import { CChart } from "@coreui/react-chartjs";
import { getAllProducts } from "../../api";
import { setAllProducts } from "../../context/actions/productActions";

const DBRightSection = () => {
  const [isSectionVisible, setIsSectionVisible] = useState(false); // State for showing/hiding the section

  const dispatch = useDispatch();

  const products = useSelector((state) => state.products);
  const drinks = products?.filter((item) => item.product_category === "drinks");
  const deserts = products?.filter(
    (item) => item.product_category === "deserts"
  );
  const fruits = products?.filter((item) => item.product_category === "fruits");
  const rice = products?.filter((item) => item.product_category === "rice");
  const curry = products?.filter((item) => item.product_category === "curry");
  const bread = products?.filter((item) => item.product_category === "bread");
  const chinese = products?.filter(
    (item) => item.product_category === "chinese"
  );

  useEffect(() => {
    if (!products) {
      getAllProducts().then((data) => {
        dispatch(setAllProducts(data));
      });
    }
  }, []); /* eslint-disable-line react-hooks/exhaustive-deps */

  // Toggle visibility of DBRightSection
  const toggleSectionVisibility = () => {
    setIsSectionVisible(!isSectionVisible);
  };

  return (
    <div className="relative h-full bg-[#F5F3F0] backdrop-blur-md shadow-md flex flex-col items-center pt-7 justify-start gap-3 ">
      <div className="flex w-full justify-between gap-5 px-2">
        {/* user verified image */}
        {isSectionVisible && (
          <div className="flex items-center justify-start gap-2">
            {/* report headings */}
            {isSectionVisible && (
              <div className="flex items-start justify-start w-full px-4">
                <div className="flex items-center gap-2 bg-[#FB6C55] rounded-2xl px-2 py-1">
                  <h1 className="text-[1rem] font-semi">Report Analysis</h1>
                  <BiSolidReport className="text-black text-[1rem]" />
                </div>
              </div>
            )}
          </div>
        )}

        {/* Hide/Unhide DBRightSection icon */}
        <div className="absolute top-7 right-2 flex items-center justify-end">
          <motion.div
            {...buttonClick}
            className="w-10 h-10 rounded-md cursor-pointer bg-[#FB6C55] backdrop-blur-md shadow-md flex items-center justify-center"
            onClick={toggleSectionVisibility}
          >
            <TbLayoutSidebarRightCollapseFilled className="text-black text-2xl" />
          </motion.div>
        </div>
      </div>

      {/* Conditionally render the DBRightSection */}
      {isSectionVisible && (
        <div className="overflow-y-scroll scrollbar">
          {/* bar chart code by coreUi@react.js */}
          <div className="flex items-center justify-center px-2 py-2">
            <div className="bg-[#e2e0e0] rounded-md py-8 px-2 h-full">
              <div className="flex items-center justify-center gap-2 pb-4 underline">
                <h1 className="text-[2rem] font-medium">Bar Report</h1>
                <IoBarChartSharp className="text-black text-[2rem]" />
              </div>
              <CChart
                type="bar"
                data={{
                  labels: [
                    "Drinks",
                    "Deserts",
                    "Fruits",
                    "Rice",
                    "Curry",
                    "Bread",
                    "Chinese",
                  ],
                  datasets: [
                    {
                      label: "Category wise Count",
                      backgroundColor: "#FEBD2E",
                      data: [
                        drinks?.length,
                        deserts?.length,
                        fruits?.length,
                        rice?.length,
                        curry?.length,
                        bread?.length,
                        chinese?.length,
                      ],
                    },
                  ],
                }}
                options={{
                  plugins: {
                    legend: {
                      labels: {
                        color: "#000000",
                      },
                    },
                  },
                }}
              />
            </div>
          </div>

          <hr />

          <div className="flex items-center justify-center px-2 w-full pt-2 pb-3">
            <div className="bg-[#e2e0e0] rounded-md py-8 px-2 h-full">
              <div className="flex items-center justify-center gap-2 pb-4 underline">
                <h1 className="text-[2rem] font-medium">Doughnut Report</h1>
                <IoPieChartSharp className="text-black text-[2rem]" />
              </div>
              <CChart
                type="doughnut"
                data={{
                  labels: [
                    "Orders",
                    "Delivered",
                    "Cancelled",
                    "Paid",
                    "Not Paid",
                  ],
                  datasets: [
                    {
                      backgroundColor: [
                        "#51FF00",
                        "#00B6FF",
                        "#008BFF",
                        "#FFD100",
                        "#FF00FB",
                      ],
                      data: [40, 20, 80, 34, 54],
                    },
                  ],
                }}
                options={{
                  plugins: {
                    legend: {
                      labels: {
                        color: "black",
                      },
                    },
                  },
                }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DBRightSection;
