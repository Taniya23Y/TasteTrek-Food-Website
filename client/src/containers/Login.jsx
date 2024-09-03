import React, { useState } from "react";
import { LoginInput } from "../components";
import { FaEnvelope, FaLock, FcGoogle } from "../assets/icons";
import { motion } from "framer-motion";
import { buttonClick } from "../animations";
import { FaArrowRight } from "react-icons/fa";
import logo from "../assets/f.png";

function Login() {
  const [userEmail, setUserEmail] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Animation Variants
  const textAnimation = {
    bounce: {
      y: [0, -10, 0], // Vertical movement
      transition: {
        duration: 1.5,
        repeat: Infinity,
        repeatType: "loop",
      },
    },
  };

  // Animation Variants for the arrows
  const arrowVariants = {
    leftToRight: {
      x: [0, 10, 0], // Moves slightly right and then back to left
      transition: {
        duration: 1.5, // Duration of the animation
        repeat: Infinity, // Repeats forever
        ease: "easeInOut", // Smooth easing
      },
    },
    rightToLeft: {
      x: [0, -10, 0], // Moves slightly left and then back to right
      transition: {
        duration: 1.5, // Duration of the animation
        repeat: Infinity, // Repeats forever
        ease: "easeInOut", // Smooth easing
      },
    },
  };

  return (
    <div className="bg-[#FEBD2E] w-full min-h-screen flex flex-col pb-4 overflow-hidden">
      {/* Navbar */}
      <div className="flex justify-between items-center px-5 py-2 w-full">
        <div className="flex">
          <span>
            <img src={logo} alt="logo" className="w-[1.9rem] h-[1.9rem]" />
          </span>
          <h1 className="font-[Aclonica] text-[1rem] md:text-2xl">TasteTrek</h1>
        </div>

        {/* Login and Signup Buttons */}
        <div className="flex gap-3 md:gap-5">
          <button className="border border-[#FDC886] rounded-md px-4 py-1 bg-black text-white hover:bg-white hover:text-black text-sm md:text-base">
            Login
          </button>
          <button className="border border-[#FDC886] rounded-md px-4 py-1 bg-black text-white hover:bg-white hover:text-black text-sm md:text-base">
            Signup
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <div className="pt-8 flex flex-col md:flex-row justify-center items-center gap-6 md:gap-10 p-4 overflow-hidden">
        <div>
          <h1 className="font-[Aclonica] text-[2rem] md:text-5xl text-black font-bold">
            Craving Something?
          </h1>

          <div className="flex-col pt-4">
            <motion.h2
              className="font-[Aclonica] text-[1.5rem] text-white"
              variants={textAnimation}
              animate="bounce"
            >
              good food
            </motion.h2>
            <motion.h2
              className="font-[Aclonica] text-[1.5rem] text-white"
              variants={textAnimation}
              animate="bounce"
            >
              good mood!
            </motion.h2>
            <p className="text-[1rem] font-serif">
              Are you hungry? Don't wait.
            </p>
            <p className="text-[1rem] font-serif">Let's start to order now.</p>

            {/* Animated Arrow */}
            <div className="flex items-center justify-start mt-4 text-[2rem]">
              <motion.span
                className="flex items-center gap-4 p-5 rounded-lg hover:shadow-lg transition-all"
                style={{ border: "1px solid gray" }}
                variants={arrowVariants}
                animate="leftToRight"
              >
                {/* Left Arrow Animation */}
                {/* <motion.span
                  className="the-arrow flex-shrink-0"
                  variants={arrowVariants}
                  animate="rightToLeft"
                >
                  <FaArrowLeft className="text-3xl" />
                </motion.span> */}

                {/* Main Text */}
                <span className="main text-3xl lg:text-xl flex-grow text-center text-yellow-900">
                  Discover More Foods
                </span>

                {/* Right Arrow Animation */}
                <motion.span
                  className="the-arrow flex-shrink-0"
                  variants={arrowVariants}
                  animate="leftToRight"
                >
                  <FaArrowRight className="text-3xl text-yellow-900" />
                </motion.span>
              </motion.span>
            </div>
          </div>
        </div>

        {/* Login Form */}
        <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg w-full max-w-[90%] md:max-w-md">
          <h2 className="text-xl md:text-2xl font-bold text-center text-[#F59E44] mb-4 md:mb-6">
            TasteTrek {isSignUp ? "Sign-Up" : "Login"}
          </h2>

          <p className="text-center text-sm md:text-base">
            Hey, Enter Your Details to{" "}
            <span className="font-bold underline">
              {isSignUp ? "Sign-Up" : "Sign-In"}
            </span>{" "}
            to your account.
          </p>
          <br />

          <LoginInput
            placeholder={"Email Here"}
            icon={<FaEnvelope className="text-xl text-textColor" />}
            inputState={userEmail}
            inputStateFunction={setUserEmail}
            type="email"
            isSignUp={isSignUp}
          />

          <LoginInput
            placeholder={"Password Here"}
            icon={<FaLock className="text-xl text-textColor" />}
            inputState={password}
            inputStateFunction={setPassword}
            type="password"
            isSignUp={isSignUp}
          />

          {isSignUp && (
            <LoginInput
              placeholder={"Confirm Password Here"}
              icon={<FaLock className="text-xl text-textColor" />}
              inputState={confirmPassword}
              inputStateFunction={setConfirmPassword}
              type="password"
              isSignUp={isSignUp}
            />
          )}

          {!isSignUp ? (
            <p className="text-sm md:text-base">
              Don't have an account?{" "}
              <motion.button
                {...buttonClick}
                className="text-[#F59E44] hover:text-[#FDC886] underline cursor-pointer bg-transparent font-[Aclonica]"
                onClick={() => setIsSignUp(true)}
              >
                Create one
              </motion.button>
            </p>
          ) : (
            <p className="text-sm md:text-base">
              Already have an account?{" "}
              <motion.button
                {...buttonClick}
                className="text-[#F59E44] hover:text-[#FDC886] underline cursor-pointer bg-transparent font-[Aclonica]"
                onClick={() => setIsSignUp(false)}
              >
                Sign-in here
              </motion.button>
            </p>
          )}

          {/* button section */}
          {isSignUp ? (
            <motion.div {...buttonClick} className="flex flex-col gap-4 mt-4">
              <button
                type="submit"
                className="w-full py-2 bg-[#FDC886] text-white rounded-md hover:bg-[#F59E44] transition duration-300"
              >
                Sign-Up
              </button>
            </motion.div>
          ) : (
            <motion.div {...buttonClick} className="flex flex-col gap-4 mt-4">
              <button
                type="submit"
                className="w-full py-2 bg-[#FDC886] text-black rounded-md hover:bg-[#F59E44] transition duration-300"
              >
                Sign-In
              </button>
            </motion.div>
          )}

          <div className="flex items-center justify-between gap-16">
            <div className="w-24 h-[1px] rounded-md bg-yellow-400"></div>
            <p className="">or</p>
            <div className="w-24 h-[1px] rounded-md bg-yellow-400"></div>
          </div>

          {/* google button  */}
          <motion.div
            {...buttonClick}
            className="flex items-center justify-center px-4 md:px-20 py-2 bg-gray-300 backdrop-blur-md cursor-pointer rounded-3xl gap-4"
          >
            <FcGoogle className="text-2xl md:text-3xl" />
            <p className="capitalize text-sm md:text-base text-headingColor">
              {isSignUp ? "Sign-In" : "Sign-Up"} with Google
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Login;
