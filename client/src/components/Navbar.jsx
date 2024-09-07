import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/f.png";
import { isActiveStyles, isNoActiveStyles } from "../utils/styles";
import { motion } from "framer-motion";
import { buttonClick } from "../animations";
import { MdShoppingCart } from "../assets/icons";
import { useSelector } from "react-redux";

const Navbar = () => {
  const user = useSelector((state) => state.user);

  return (
    <nav className=" fixed backdrop-blur-md z-50 inset-x-0 top-0 flex items-center justify-between px-12 md:px-20 py-6">
      <NavLink to="/" className="flex items-center justify-center gap-4">
        <div className="flex items-center w-full h-full">
          <img src={logo} alt="logo" className="w-[6.5185vh] h-[6.5185vh]" />
          <h1 className="font-[Aclonica] text-[2.99vh] md:text-[3.5vh]">
            TasteTrek
          </h1>
        </div>
      </NavLink>

      <nav className="flex items-center justify-between gap-8">
        <ul className="hidden md:flex items-center justify-between gap-8">
          <NavLink
            className={({ isActive }) =>
              isActive ? isActiveStyles : isNoActiveStyles
            }
            to={"/"}
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? isActiveStyles : isNoActiveStyles
            }
            to={"/menu"}
          >
            Menu
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? isActiveStyles : isNoActiveStyles
            }
            to={"/services"}
          >
            Services
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? isActiveStyles : isNoActiveStyles
            }
            to={"/aboutus"}
          >
            About Us
          </NavLink>
        </ul>

        <motion.div {...buttonClick} className="relative cursor-pointer">
          <MdShoppingCart className="text-3xl text-textColor" />
          <div className="w-6 h-6 rounded-full bg-red-500 flex items-center justify-center absolute -top-4 -right-1">
            <p className="text-primary text-base font-semibold">2</p>
          </div>
        </motion.div>

        {user ? (
          <>User</>
        ) : (
          <>
            <NavLink to={"/login"}>
              <motion.button
                {...buttonClick}
                className="px-4 py-2 rounded-md shadow-md bg-white border border-red-300 cursor-pointer"
              ></motion.button>
            </NavLink>
          </>
        )}
      </nav>
    </nav>
  );
};

export default Navbar;
