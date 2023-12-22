import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "../pages/Landing";
import RegisterPage from "../pages/Register";
import DashboardPage from "../pages/Dashboard";
import LoginPage from "../pages/Login";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="*" element={<LandingPage />} />
      <Route path="/Login" element={<LoginPage />} />
      <Route path="/Register" element={<RegisterPage />} />
      <Route path="/Dashboard" element={<DashboardPage />} />
    </Routes>
  );
};

export default AppRoutes;
