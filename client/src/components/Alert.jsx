import React from "react";
import { motion } from "framer-motion";
import { fadeInOut } from "../animations";
import { FaCheck, BsExclamationTriangleFill } from "../assets/icons";

const Alert = ({ type, message }) => {
  // success
  if (type === "success") {
    return (
      <motion.div
        {...fadeInOut}
        className="fixed z-50 right-12 top-32 px-4 py-2 rounded-md backdrop-blur-sm bg-[#FEBD2E] shadow-md flex items-center gap-4"
      >
        <FaCheck className="text-xl text-[black]" />
        <p className="text-xl text-[black]">{message}</p>
      </motion.div>
    );
  }

  // warning
  if (type === "warning") {
    return (
      <motion.div
        {...fadeInOut}
        className="fixed z-50 right-12 top-32 px-4 py-2 rounded-md backdrop-blur-sm bg-[#d69d22] shadow-md flex items-center gap-4"
      >
        <BsExclamationTriangleFill className="text-xl text-[#795c1d]" />
        <p className="text-xl text-[#795c1d]">{message}</p>
      </motion.div>
    );
  }

  // danger
  if (type === "danger") {
    return (
      <motion.div
        {...fadeInOut}
        className="fixed z-50 right-12 top-32 px-4 py-2 rounded-md backdrop-blur-sm bg-red-300 shadow-md flex items-center gap-4"
      >
        <FaCheck className="text-xl text-red-700" />
        <p className="text-xl text-red-700">{message}</p>
      </motion.div>
    );
  }

  // information
  if (type === "info") {
    return (
      <motion.div
        {...fadeInOut}
        className="fixed z-50 right-12 top-32 px-4 py-2 rounded-md backdrop-blur-sm bg-blue-300 shadow-md flex items-center gap-4"
      >
        <FaCheck className="text-xl text-blue-700" />
        <p className="text-xl text-blue-700">{message}</p>
      </motion.div>
    );
  }
};

export default Alert;
