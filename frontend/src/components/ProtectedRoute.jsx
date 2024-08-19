import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoute = () => {
  const userInfo = false;
  return userInfo ? <Outlet /> : <Navigate to={"/login"} />;
};
