import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/f.png";
import { isActiveStyles, isNoActiveStyles } from "../utils/styles";
import { motion } from "framer-motion";
import { buttonClick, slideTop } from "../animations";
import { MdLogout, MdShoppingCart } from "../assets/icons";
import { useDispatch, useSelector } from "react-redux";
// import { RxAvatar } from "react-icons/rx";
import Avatar from "react-nice-avatar";
import { getAuth } from "firebase/auth";
import { app } from "../config/firebase.config";
import { setUserNull } from "../context/actions/userActions";

const Navbar = () => {
  const user = useSelector((state) => state.user);
  const [isMenu, setIsMenu] = useState(false);

  // signOut logic
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
    <nav className="fixed z-50 inset-x-0 top-0 flex items-center justify-between px-4 lg:px-[4rem] py-4">
      <NavLink to="/" className="flex items-center justify-center gap-4">
        <div className="flex items-center w-full h-full ">
          {/* <img src={logo} alt="logo" className="w-[6.5185vh] h-[6.5185vh]" /> */}
          <img src={logo} alt="logo" className="w-12" />
          {/* <h1 className="font-[Aclonica] text-[2.99vh] md:text-[3.5vh]"> */}
          <h1 className="font-[Aclonica] text-[1.3rem] md:text-[1.4rem]">
            TasteTrek
          </h1>
        </div>
      </NavLink>

      <div>
        <ul className="hidden md:flex items-center justify-center gap-3">
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
      </div>

      <nav className="flex items-center justify-center gap-3">
        <motion.div {...buttonClick} className="relative cursor-pointer">
          <MdShoppingCart className="text-3xl text-textColor" />
          <div className="w-6 h-6 rounded-full bg-red-500 flex items-center justify-center absolute -top-4 -right-1">
            <p className="text-primary text-base font-semibold">2</p>
          </div>
        </motion.div>

        {user ? (
          <>
            <div
              className="relative cursor-pointer"
              onMouseEnter={() => setIsMenu(true)}
            >
              <div className="w-10 h-10 rounded-full shadow-md cursor-pointer overflow-hidden flex items-center justify-center">
                {/* <motion.img
                  className="w-full h-full object-cover"
                  src={user?.picture ? user?.picture : <Avatar />}
                  whileHover={{ scale: 1.15 }}
                  referrerPolicy="no-referrer"
                  alt="userLoginProfile"
                /> */}

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

              {/* dropdown menu  */}
              {isMenu && (
                <motion.div
                  {...slideTop}
                  onMouseLeave={() => setIsMenu(false)}
                  className="px-6 py-4 w-48 bg-[#F5F3F0] backdrop-blur-md rounded-md shadow-md absolute top-4 right-0 flex flex-col gap-4"
                >
                  <Link
                    className="hover:text-yellow-500 text-xl text-textColor"
                    to={"/dashboard/home"}
                  >
                    DashBoard
                  </Link>

                  <Link
                    className="hover:text-yellow-500 text-xl text-textColor"
                    to={"/profile"}
                  >
                    My Profile
                  </Link>

                  <Link
                    className="hover:text-yellow-500 text-xl text-textColor"
                    to={"/user-orders"}
                  >
                    Orders
                  </Link>
                  <hr />

                  <motion.div
                    {...buttonClick}
                    onClick={signOut}
                    className="group flex items-center justify-center px-3 py-2 rounded-md shadow-md bg-gray-100 hover:bg-yellow-500 gap-3 "
                  >
                    <MdLogout className="text-2xl text-textColor group-hover:text-headingColor" />
                    <p className="text-textColor text-xl group-hover:text-headingColor">
                      Sign Out
                    </p>
                  </motion.div>
                </motion.div>
              )}
            </div>
          </>
        ) : (
          <>
            <NavLink to={"/login"}>
              <motion.button
                {...buttonClick}
                className="px-4 py-2 rounded-md shadow-md bg-white border border-red-300 cursor-pointer"
              >
                Login
              </motion.button>
            </NavLink>
          </>
        )}
      </nav>
    </nav>
  );
};

export default Navbar;
