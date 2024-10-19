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
    <div className="w-full fixed top-3 flex justify-between items-center px-6 z-10 ">
      {/* Left aligned logo */}
      <div className="flex items-center gap-4">
        <NavLink to="/" className="flex items-center">
          <img src={logo} alt="logo" className="w-12" />
          <h1 className="font-[Aclonica] text-[1.3rem] md:text-[1.4rem]">
            TasteTrek
          </h1>
        </NavLink>
      </div>

      {/* Center aligned navigation links */}
      <div className="flex-1 flex justify-center items-center">
        <ul className="hidden md:flex items-center gap-6">
          <NavLink
            className={({ isActive }) =>
              isActive ? isActiveStyles : isNoActiveStyles
            }
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? isActiveStyles : isNoActiveStyles
            }
            to="/menu"
          >
            Menu
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? isActiveStyles : isNoActiveStyles
            }
            to="/services"
          >
            Services
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? isActiveStyles : isNoActiveStyles
            }
            to="/aboutus"
          >
            About Us
          </NavLink>
        </ul>
      </div>

      {/* Right aligned shopping cart and profile */}
      <div className="flex items-center gap-4">
        <motion.div
          {...buttonClick}
          className="relative cursor-pointer bg-white rounded-full p-2"
        >
          <MdShoppingCart className="text-2xl text-black" />
          <div className="w-6 h-6 rounded-full bg-red-500 flex items-center justify-center absolute -top-3 -right-1">
            <p className="text-primary text-[0.9rem] font-semibold">2</p>
          </div>
        </motion.div>

        {user ? (
          <div
            className="relative cursor-pointer"
            onMouseEnter={() => setIsMenu(true)}
          >
            <div className="w-10 h-10 rounded-full shadow-md overflow-hidden">
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

            {/* Dropdown Menu */}
            {isMenu && (
              <motion.div
                {...slideTop}
                onMouseLeave={() => setIsMenu(false)}
                className="absolute top-4 right-0 bg-[#F5F3F0] rounded-md shadow-md p-4 w-48 flex flex-col gap-3"
              >
                <Link
                  className="hover:text-yellow-500 text-xl text-textColor"
                  to={"/dashboard/home"}
                >
                  DashBoard
                </Link>

                <Link
                  className="hover:text-yellow-500 text-xl text-textColor"
                  to={"/adashboard/home"}
                >
                  ADashBoard
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
                <hr className="md:hidden lg:hidden" />
                <div className="md:hidden pt-2 pb-2 flex flex-col items-start justify-start">
                  <ul className="md:hidden flex flex-col gap-3 text-black">
                    <NavLink
                      to={"/"}
                      className="hover:bg-yellow-500 hover:text-center rounded-full px-2 text-black "
                    >
                      Home
                    </NavLink>
                    <NavLink
                      to={"/menu"}
                      className="hover:bg-yellow-500 hover:text-center rounded-full px-2 text-black"
                    >
                      Menu
                    </NavLink>
                    <NavLink
                      to={"/services"}
                      className="hover:bg-yellow-500 hover:text-center rounded-full px-2 text-black"
                    >
                      Services
                    </NavLink>
                    <NavLink
                      to={"/aboutus"}
                      className="hover:bg-yellow-500 hover:text-center rounded-full px-2 text-black"
                    >
                      About Us
                    </NavLink>
                  </ul>
                </div>

                <hr />

                <motion.div
                  {...buttonClick}
                  onClick={signOut}
                  className="flex items-center justify-center mt-1 p-2 bg-gray-100 rounded-md hover:bg-yellow-500"
                >
                  <MdLogout className="text-2xl" />
                  <p>Sign Out</p>
                </motion.div>
              </motion.div>
            )}
          </div>
        ) : (
          <NavLink to="/login">
            <motion.button
              {...buttonClick}
              className="px-4 py-1 rounded-3xl shadow-md bg-white border border-white"
            >
              Login
            </motion.button>
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default Navbar;
