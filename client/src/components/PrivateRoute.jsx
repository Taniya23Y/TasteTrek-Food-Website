import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({ children }) => {
  const user = useSelector((state) => state.user); // Assuming you're storing user info in Redux

  return user ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
