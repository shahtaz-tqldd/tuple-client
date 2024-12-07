import { Navigate } from "react-router-dom";
import useAuth from "./useAuth";

const PrivateRoute = ({ children, allowedRoles, path = "/sign-in" }) => {
  const { token, role } = useAuth();

  return token && allowedRoles.includes(role) ? (
    children
  ) : (
    <Navigate to={path} />
  );
};

export default PrivateRoute;
