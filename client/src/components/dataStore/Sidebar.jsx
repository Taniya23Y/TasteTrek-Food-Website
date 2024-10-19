import React, { useState } from "react";
import "../../index.css";
import { motion } from "framer-motion";
import {
  FaHome,
  FaUserCheck,
  IoFastFoodSharp,
  MdRestaurantMenu,
  RiFolderInfoFill,
  UilBars,
  UilSignOutAlt,
} from "../../assets/icons";
import Logo from "../../assets/f.png";
import { NavLink, useNavigate } from "react-router-dom";
import { buttonClick } from "../../animations";
import { isActiveStyles, isNoActiveStyles } from "../../utils/styles";
import { useDispatch, useSelector } from "react-redux";
import Avatar from "react-nice-avatar";
import { getAuth } from "firebase/auth";
import { setUserNull } from "../../context/actions/userActions";
import { app } from "../../config/firebase.config";

const Sidebar = () => {
  const [expanded, setExpanded] = useState(true);

  const sidebarVariants = {
    true: {
      left: "0",
    },
    false: {
      left: "-55%",
    },
  };

  // user login image
  const user = useSelector((state) => state.user);
  const firebaseAuth = getAuth(app);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const signOut = () => {
    firebaseAuth
      .signOut()
      .then(() => {
        dispatch(setUserNull());
        navigate("/login", { replace: true });
      })
      .catch((err) => console.log(err));
  };

  return (
    // <div className="px-2 bg-[#f5f3f0] rounded-l-[2rem]">
    <div className="relative z-10 px-2 lg:rounded-l-[2rem] lg:bg-[#f5f3f0]">
      <div
        className="bars cursor-pointer"
        style={expanded ? { left: "56%" } : { left: "4%" }}
        onClick={() => setExpanded(!expanded)}
      >
        <UilBars />
      </div>

      <motion.div
        className="sidebar"
        variants={sidebarVariants}
        animate={window.innerWidth <= 768 ? `${expanded}` : ""}
      >
        {/* logo  */}
        <div className="Logo pt-9 flex h-[2rem] font-bold text-[22px] gap-[1rem] items-center justify-start">
          <NavLink to={"/"} className="flex items-center justify-start">
            <img src={Logo} alt="logo" className="w-12" />

            <p className="font-semibold text-[1.3rem] font-[Aclonica] text-black">
              TasteTrek
            </p>
          </NavLink>
        </div>

        <div className="menu mt-[2rem] flex flex-col gap-[2rem]">
          <ul className="flex flex-col gap-2 pt-2 ">
            <NavLink
              to={"/adashboard/home"}
              className={({ isActive }) =>
                isActive
                  ? `${isActiveStyles} px-3 py-1 border-l-8 border-[#FEBD2E]`
                  : isNoActiveStyles
              }
            >
              <div className="flex items-center justify-start gap-2">
                <FaHome />
                <span>Home</span>
              </div>
            </NavLink>
            <NavLink
              to={"/adashboard/orders"}
              className={({ isActive }) =>
                isActive
                  ? `${isActiveStyles} px-3 py-1 border-l-8 border-[#FEBD2E]`
                  : isNoActiveStyles
              }
            >
              <div className="flex items-center justify-start gap-2">
                <MdRestaurantMenu />
                <span>Orders</span>
              </div>
            </NavLink>
            <NavLink
              to={"/adashboard/items"}
              className={({ isActive }) =>
                isActive
                  ? `${isActiveStyles} px-3 py-1 border-l-8 border-[#FEBD2E]`
                  : isNoActiveStyles
              }
            >
              <div className="flex items-center justify-start gap-2">
                <IoFastFoodSharp />
                <span>Items</span>
              </div>
            </NavLink>
            <NavLink
              to={"/adashboard/newItem"}
              className={({ isActive }) =>
                isActive
                  ? `${isActiveStyles} px-3 py-1 border-l-8 border-[#FEBD2E]`
                  : isNoActiveStyles
              }
            >
              <div className="flex items-center justify-start gap-2">
                <RiFolderInfoFill />
                <span>Add New Item</span>
              </div>
            </NavLink>
            <NavLink
              to={"/adashboard/users"}
              className={({ isActive }) =>
                isActive
                  ? `${isActiveStyles} px-3 py-1 border-l-8 border-[#FEBD2E]`
                  : isNoActiveStyles
              }
            >
              <div className="flex items-center justify-start gap-2">
                <FaUserCheck />
                <span>Users</span>
              </div>
            </NavLink>
          </ul>

          {/* ---  */}
          <div className="flex items-center justify-center gap-2 menuItem">
            <div className="w-10 h-10 rounded-full shadow-md cursor-pointer overflow-hidden">
              {user?.picture ? (
                <motion.img
                  className="w-full h-full object-cover"
                  src={user.picture}
                  whileHover={{ scale: 1.15 }}
                  referrerPolicy="no-referrer"
                  alt="userLoginProfile"
                />
              ) : (
                <Avatar className="w-full h-full text-3xl" />
              )}
            </div>

            <motion.div
              {...buttonClick}
              onClick={signOut}
              className="w-10 h-10 rounded-md cursor-pointer bg-[#febd2e] backdrop-blur-md shadow-md flex items-center justify-center"
            >
              <UilSignOutAlt className="text-black text-xl" />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Sidebar;
