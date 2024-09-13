import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  MdLogout,
  TbLayoutSidebarRightCollapseFilled,
  TbLayoutSidebarRightExpandFilled,
} from "../../assets/icons";
import { motion } from "framer-motion";
import { buttonClick } from "../../animations";
import Avatar from "react-nice-avatar";
import { getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { setUserNull } from "../../context/actions/userActions";
import { app } from "../../config/firebase.config";

import { CChart } from "@coreui/react-chartjs";

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
    <div className="h-full bg-[#F5F3F0] backdrop-blur-md shadow-md flex flex-col items-center pt-12 justify-start gap-3 overflow-y-auto">
      <div className="flex justify-between gap-5 w-full px-2">
        {/* hide DBRightSection icon  */}
        <div className="flex items-center justify-start">
          <motion.div
            {...buttonClick}
            className="w-10 h-10 rounded-md cursor-pointer bg-[#F5F3F0] backdrop-blur-md shadow-md flex items-center justify-center"
          >
            <TbLayoutSidebarRightCollapseFilled className="text-gray-400 text-2xl" />
          </motion.div>
        </div>

        {/* user verified image */}
        <div className="flex items-center justify-end gap-2">
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

          {/* Logout btn  */}
          <motion.div
            onClick={signOut}
            {...buttonClick}
            className="w-10 h-10 rounded-md cursor-pointer bg-[#F5F3F0] backdrop-blur-md shadow-md flex items-center justify-center"
          >
            <MdLogout className="text-gray-400 text-2xl" />
          </motion.div>
        </div>
      </div>

      {/* bar chart code by coreUi@react.js */}
      <div className="overflow-auto">
        <div className="flex items-center justify-center px-2 py-2 w-full">
          <div className="">
            {" "}
            {/* Adjust max-height as needed */}
            <CChart
              type="bar"
              data={{
                labels: [
                  "January",
                  "February",
                  "March",
                  "April",
                  "May",
                  "June",
                  "July",
                ],
                datasets: [
                  {
                    label: "GitHub Commits",
                    backgroundColor: "#f87979",
                    data: [40, 20, 12, 39, 10, 40, 39, 80, 40],
                  },
                ],
              }}
              labels="months"
              options={{
                plugins: {
                  legend: {
                    labels: {
                      color: "black",
                    },
                  },
                },
              }}
            />
          </div>
        </div>

        <div className="flex items-center justify-center px-2 w-full">
          <div className="">
            {" "}
            {/* Adjust max-height as needed */}
            <CChart
              type="doughnut"
              data={{
                labels: ["VueJs", "EmberJs", "ReactJs", "AngularJs"],
                datasets: [
                  {
                    backgroundColor: [
                      "#41B883",
                      "#E46651",
                      "#00D8FF",
                      "#DD1B16",
                    ],
                    data: [40, 20, 80, 10],
                  },
                ],
              }}
              options={{
                plugins: {
                  legend: {
                    labels: {
                      color: "black",
                    },
                  },
                },
              }}
            />
          </div>
        </div>

        {/* Scrollable content */}
        <div className="flex flex-col items-center justify-center w-full px-2 pt-5 gap-2">
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
        </div>
      </div>
    </div>
  );
};

export default DBRightSection;
