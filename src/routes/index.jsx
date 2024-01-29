// AppRoutes.js
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
import BlogPostDetail from "../components/BlogComponents/BlogpostDetailPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="*" element={<LandingPage />} />
      <Route path="/Login" element={<LoginPage />} />
      <Route path="/Register" element={<RegisterPage />} />
      <Route path="/Dashboard" element={<DashboardPage />} />
      <Route path="/Blog/*" element={<BlogPage />} /> {/* BlogPage é a rota pai */}
      <Route path="/Blog" element={<BlogPage />} /> {/* Rota raiz do Blog */}
      <Route path="/Blog/:postId" element={<BlogPostDetail />} /> {/* Detalhes do post */}
      <Route path="/FAQ" element={<FAQPage />} />
      <Route path="/Consultation" element={<ConsultationPage />} />
      <Route path="/Terms" element={<TermsPage />} />
      <Route path="/Cube" element={<CubePage />} />
    </Routes>
  );
};

export default AppRoutes;
