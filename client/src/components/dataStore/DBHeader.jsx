import React from "react";
import { MdSearch, BsToggles2 } from "../../assets/icons";
import { motion } from "framer-motion";
import { BsFillBellFill } from "react-icons/bs";
import { buttonClick } from "../../animations";
import { useSelector } from "react-redux";

const DBHeader = () => {
  const user = useSelector((state) => state.user);
  return (
    <div className="w-full flex items-center justify-between gap-3">
      <p className="text-2xl text-headingColor">
        Welcome to TasteTrek Dashboard{" "}
        {user?.name && (
          <span className="block text-base text-gray-500">{`Hello ${user?.name}...!`}</span>
        )}
      </p>
      <div className="flex items-center justify-center gap-4">
        <div className="flex items-center justify-center gap-3 px-4 py-2 bg-[#F5F3F0] backdrop-blur-md rounded-md shadow-md">
          <MdSearch className="text-gray-400 text-2xl" />
          <input
            type="text"
            placeholder="Search Here.."
            className="border-none outline-none bg-transparent w032 text-base font-semibold text-textColor"
          />
          <BsToggles2 className="text-gray-400 text-2xl" />
        </div>

        <motion.div
          {...buttonClick}
          className="w-10 h-10 rounded-md cursor-pointer bg-[#F5F3F0] flex justify-center items-center backdrop-blur-md shadow-md"
        >
          <BsFillBellFill className="text-gray-400 text-2xl" />
        </motion.div>
      </div>
    </div>
  );
};

export default DBHeader;
