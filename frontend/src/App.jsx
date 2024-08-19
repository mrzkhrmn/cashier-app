import { Routes, Route } from "react-router-dom";
import "./App.css";
import { LoginPage } from "./pages/LoginPage";
import { CashierPage } from "./pages/CashierPage";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<CashierPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
};
