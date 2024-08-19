import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoute = () => {
  const userInfo = true;
  return userInfo ? <Outlet /> : <Navigate to={"/login"} />;
};
