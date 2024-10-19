import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/f.png";
import { isActiveStyles, isNoActiveStyles } from "../../utils/styles";
import { motion } from "framer-motion";
import {
  FaHome,
  FaUserCheck,
  IoFastFoodSharp,
  MdRestaurantMenu,
  RiFolderInfoFill,
} from "../../assets/icons";
import { buttonClick } from "../../animations";
import { TbLayoutSidebarLeftCollapseFilled } from "react-icons/tb";

const DBLeftSection = () => {
  // State for showing/hiding the section
  const [isSectionVisible, setIsSectionVisible] = useState(true);

  // Toggle visibility of DBRightSection
  const toggleSectionVisibility = () => {
    setIsSectionVisible(!isSectionVisible);
  };

  return (
    <div className="h-full  sticky py-6 flex flex-col bg-[#F5F3F0] backdrop-blur-md shadow-md gap-2">
      {/* logo and heading  */}
      <div className="flex gap-1">
        <NavLink to={"/"} className="flex items-center justify-start">
          <img src={logo} alt="logo" className="w-12" />
          {isSectionVisible && (
            <p className="font-semibold text-[1.5rem] font-[Aclonica]">
              TasteTrek
            </p>
          )}
          {/* Hide/Unhide DBRightSection icon */}
        </NavLink>
      </div>

      <hr />

      {/* <div className="overflow-y-scroll scrollbar"> */}
      <ul className="flex flex-col gap-2">
        <div className="flex items-center justify-start gap-1 px-2">
          <motion.div
            {...buttonClick}
            className="w-7 h-7 rounded-md cursor-pointer  bg-[#FEBD2E] backdrop-blur-md shadow-md flex items-center justify-center"
            onClick={toggleSectionVisibility}
          >
            <TbLayoutSidebarLeftCollapseFilled className="text-black text-xl" />
          </motion.div>
          <div className="flex items-center justify-end gap-2">
            {isSectionVisible && <span>Hide me!</span>}
          </div>
        </div>
        <NavLink
          to={"/dashboard/home"}
          className={({ isActive }) =>
            isActive
              ? `${isActiveStyles} px-3 py-1 border-l-8 border-[#FEBD2E]`
              : isNoActiveStyles
          }
        >
          <div className="flex items-center justify-start gap-2">
            <FaHome />
            {isSectionVisible && <span>Home</span>}
          </div>
        </NavLink>
        <NavLink
          to={"/dashboard/orders"}
          className={({ isActive }) =>
            isActive
              ? `${isActiveStyles} px-3 py-1 border-l-8 border-[#FEBD2E]`
              : isNoActiveStyles
          }
        >
          <div className="flex items-center justify-start gap-2">
            <MdRestaurantMenu />
            {isSectionVisible && <span>Orders</span>}
          </div>
        </NavLink>
        <NavLink
          to={"/dashboard/items"}
          className={({ isActive }) =>
            isActive
              ? `${isActiveStyles} px-3 py-1 border-l-8 border-[#FEBD2E]`
              : isNoActiveStyles
          }
        >
          <div className="flex items-center justify-start gap-2">
            <IoFastFoodSharp />
            {isSectionVisible && <span>Items</span>}
          </div>
        </NavLink>
        <NavLink
          to={"/dashboard/newItem"}
          className={({ isActive }) =>
            isActive
              ? `${isActiveStyles} px-3 py-1 border-l-8 border-[#FEBD2E]`
              : isNoActiveStyles
          }
        >
          <div className="flex items-center justify-start gap-2">
            <RiFolderInfoFill />
            {isSectionVisible && <span>Add New Item</span>}
          </div>
        </NavLink>
        <NavLink
          to={"/dashboard/users"}
          className={({ isActive }) =>
            isActive
              ? `${isActiveStyles} px-3 py-1 border-l-8 border-[#FEBD2E]`
              : isNoActiveStyles
          }
        >
          <div className="flex items-center justify-start gap-2">
            <FaUserCheck />
            {isSectionVisible && <span>Users</span>}
          </div>
        </NavLink>
      </ul>
      {isSectionVisible && (
        <div className="w-full flex items-center justify-center mt-auto px-3 pt-5">
          <div className="w-full h-full rounded-xl bg-[#FEBD2E] flex items-center justify-center flex-col gap-2 p-1">
            <div className="w-12 h-12  border bg-white rounded-full flex items-center justify-center">
              <p className="text-2xl font-bold text-black">?</p>
            </div>
            <p className=" text-primary font-semibold">Help Center</p>
            <p className="text-sm  text-textColor text-center">
              Having trouble in the TasteTrek. <br /> Please contact us for more
              <br /> questions.
            </p>
            <button className="px-2 py-1 rounded-full bg-primary text-black cursor-pointer">
              Get in touch
            </button>
          </div>
        </div>
      )}
    </div>
    // </div>
  );
};

export default DBLeftSection;
