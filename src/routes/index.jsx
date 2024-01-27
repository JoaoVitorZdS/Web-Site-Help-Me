import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "../pages/Landing";
import RegisterPage from "../pages/Register";
import DashboardPage from "../pages/Dashboard";
import LoginPage from "../pages/Login";
import BlogPage from "../pages/Blog";
import FAQPage from "../pages/FAQ";
import ConsultationPage from "../pages/Consultation";
import TermsPage from "../pages/Terms";
import CubePage from "../pages/Cube";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="*" element={<LandingPage />} />
      <Route path="/Login" element={<LoginPage />} />
      <Route path="/Register" element={<RegisterPage />} />
      <Route path="/Dashboard" element={<DashboardPage />} />
      <Route path="/Blog" element={<BlogPage />} />
      <Route path="/FAQ" element={<FAQPage />} />
      <Route path="/Consultation" element={<ConsultationPage />} />
      <Route path="/Terms" element={<TermsPage />} />
      <Route path="/Cube" element={<CubePage />} />
    </Routes>
  );
};

export default AppRoutes;
