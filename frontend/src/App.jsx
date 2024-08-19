import { Routes, Route } from "react-router-dom";
import "./App.css";
import { LoginPage } from "./pages/LoginPage";
import { CashierPage } from "./pages/CashierPage";
import { ProtectedRoute } from "./components/ProtectedRoute";

export const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route element={<ProtectedRoute />}>
        <Route path="/" element={<CashierPage />} />
      </Route>
    </Routes>
  );
};
