import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Main, Login, Dashboard, ADashboard } from "./containers";
import { app } from "./config/firebase.config";
import { getAuth } from "firebase/auth";
import { validateUserJWTToken } from "./api";
import { useDispatch, useSelector } from "react-redux";
import { setUserDetails } from "./context/actions/userActions";
import { motion } from "framer-motion";
import { fadeInOut } from "./animations";
import { Alert, MainLoader } from "./components";
import PrivateRoute from "./components/PrivateRoute";

const App = () => {
  const firebaseAuth = getAuth(app);

  const [isLoading, setIsLoading] = useState(false);

  const alert = useSelector((state) => state.alert);

  const dispatch = useDispatch();

  useEffect(() => {
    setIsLoading(true);
    firebaseAuth.onAuthStateChanged((cred) => {
      if (cred) {
        cred.getIdToken().then((token) => {
          validateUserJWTToken(token).then((data) => {
            dispatch(setUserDetails(data));
          });
        });
      }
      setInterval(() => {
        setIsLoading(false);
      }, 3000);
    });
  }, []); /* eslint-disable-line react-hooks/exhaustive-deps */

  return (
    <div className="App w-full h-full flex flex-col items-center justify-center overflow-hidden">
      {isLoading && (
        <motion.div
          {...fadeInOut}
          className="fixed z-50 inset-0 bg-[#f5f3f0] backdrop-blur-md flex items-center justify-center w-full"
        >
          <MainLoader />
        </motion.div>
      )}

      <Routes>
        <Route path="/*" element={<Main />} />
        <Route path="/login" element={<Login />} />
        {/* Protect the dashboard and adashboard routes */}
        <Route
          path="/dashboard/*"
          element={
            // <PrivateRoute>
            <Dashboard />
            // </PrivateRoute>
          }
        />
        <Route
          path="/adashboard/*"
          element={
            <PrivateRoute>
              <ADashboard />
            </PrivateRoute>
          }
        />
      </Routes>

      {alert?.type && <Alert type={alert?.type} message={alert?.message} />}
    </div>
  );
};

export default App;
