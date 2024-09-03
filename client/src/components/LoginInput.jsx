import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeInOut } from "../animations";

const LoginInput = ({
  placeholder,
  icon,
  inputState,
  inputStateFunction,
  type,
  isSignUp,
}) => {
  const [isFocus, setIsFocus] = useState(false);

  return (
    <motion.div
      {...fadeInOut}
      className={`mb-3 flex items-center gap-4 pb-1 px-4 py-2 border rounded-md transition-all duration-300 ${
        isFocus ? "border-[#F59E44] ring-2 ring-[#F59E44]" : "border-gray-300"
      }`}
    >
      {/* Icon */}
      <span className="text-[#F59E44]">{icon}</span>

      {/* Input Field */}
      <input
        type={type}
        placeholder={placeholder}
        className="w-full bg-transparent text-lg font-semibold focus:outline-none border-none"
        value={inputState}
        onChange={(e) => inputStateFunction(e.target.value)}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
      />
    </motion.div>
  );
};

export default LoginInput;
