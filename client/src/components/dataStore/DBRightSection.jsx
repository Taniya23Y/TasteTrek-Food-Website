import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { MdSearch, BsToggles2, MdLogout } from "../../assets/icons";
import { motion } from "framer-motion";
import { BsFillBellFill } from "react-icons/bs";
import { buttonClick } from "../../animations";
import Avatar from "react-nice-avatar";
import { getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { setUserNull } from "../../context/actions/userActions";
import { app } from "../../config/firebase.config";

const DBRightSection = () => {
  const user = useSelector((state) => state.user);

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
    <div className="h-full bg-[#F5F3F0] backdrop-blur-md shadow-md flex items-start pt-12 justify-start gap-3">
      <div className="flex items-center justify-center gap-2 px-2">
        <div className="w-10 h-10 rounded-md cursor-pointer overflow-hidden">
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
          onClick={signOut}
          {...buttonClick}
          className="w-10 h-10 rounded-md cursor-pointer bg-[#F5F3F0] backdrop-blur-md shadow-md flex items-center justify-center"
        >
          <MdLogout className="text-gray-400 text-2xl" />
        </motion.div>
      </div>
    </div>
  );
};

export default DBRightSection;
