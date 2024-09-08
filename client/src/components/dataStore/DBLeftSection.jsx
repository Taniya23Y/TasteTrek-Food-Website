import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/f.png";
import { isActiveStyles, isNoActiveStyles } from "../../utils/styles";
import {
  FaHome,
  FaUserCheck,
  IoFastFoodSharp,
  MdRestaurantMenu,
  RiFolderInfoFill,
} from "../../assets/icons";

function DBLeftSection() {
  return (
    <div className="h-full py-8 flex flex-col bg-[#F5F3F0] backdrop-blur-md shadow-md min-w-210 w-200 gap-3">
      <NavLink to={"/"} className="flex items-center justify-start ">
        <img src={logo} alt="logo" className="w-12" />
        <p className="font-semibold text-[1.5rem] font-[Aclonica]">TasteTrek</p>
      </NavLink>

      <hr />

      <ul className="flex flex-col gap-2">
        <NavLink
          to={"/dashboard/home"}
          className={({ isActive }) =>
            isActive
              ? `${isActiveStyles} px-4 py-2 border-l-8 border-[#FEBD2E]`
              : isNoActiveStyles
          }
        >
          <div className="flex items-center justify-start gap-2">
            <FaHome />
            Home
          </div>
        </NavLink>
        <NavLink
          to={"/dashboard/orders"}
          className={({ isActive }) =>
            isActive
              ? `${isActiveStyles} px-4 py-2 border-l-8 border-[#FEBD2E]`
              : isNoActiveStyles
          }
        >
          <div className="flex items-center justify-start gap-2">
            <MdRestaurantMenu />
            Orders
          </div>
        </NavLink>
        <NavLink
          to={"/dashboard/items"}
          className={({ isActive }) =>
            isActive
              ? `${isActiveStyles} px-4 py-2 border-l-8 border-[#FEBD2E]`
              : isNoActiveStyles
          }
        >
          <div className="flex items-center justify-start gap-2">
            <IoFastFoodSharp />
            Items
          </div>
        </NavLink>
        <NavLink
          to={"/dashboard/newItem"}
          className={({ isActive }) =>
            isActive
              ? `${isActiveStyles} px-4 py-2 border-l-8 border-[#FEBD2E]`
              : isNoActiveStyles
          }
        >
          <div className="flex items-center justify-start gap-2">
            <RiFolderInfoFill />
            Add New Item
          </div>
        </NavLink>
        <NavLink
          to={"/dashboard/users"}
          className={({ isActive }) =>
            isActive
              ? `${isActiveStyles} px-4 py-2 border-l-8 border-[#FEBD2E]`
              : isNoActiveStyles
          }
        >
          <div className="flex items-center justify-start gap-2">
            <FaUserCheck />
            Users
          </div>
        </NavLink>
      </ul>

      <div className="w-full flex items-center justify-center mt-auto px-3 ">
        <div className="w-full h-full rounded-xl bg-[#FEBD2E] flex items-center justify-center flex-col gap-3 p-1">
          <div className="w-8 h-8 sm:w-12 sm:h-12 border bg-white rounded-full flex items-center justify-center">
            <p className="text-lg sm:text-2xl font-bold text-black">?</p>
          </div>
          <p className="text-lg sm:text-xl text-primary font-semibold">
            Help Center
          </p>
          <p className="text-sm sm:text-base text-textColor text-center">
            Having trouble in the TasteTrek. <br /> Please contact us for more
            <br /> questions.
          </p>
          <button className="px-3 py-1 sm:px-4 sm:py-2 rounded-full bg-primary text-black cursor-pointer">
            Get in touch
          </button>
        </div>
      </div>
    </div>
  );
}

export default DBLeftSection;
