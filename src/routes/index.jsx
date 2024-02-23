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
import { BlogBodyByTag } from "../components/BlogComponents/BlogQuerryByTag";
import IosPwaInstructionsPage from "../pages/IOS_PWA_Instructions";
import DoctorConsultationPage from "../components/ConsultationComponents/DoctorConsultationPage";
import QuizPage from "../pages/Quiz";
import EmergencyPage from "../pages/Emergency";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/Login" element={<LoginPage />} />
      <Route path="/Register" element={<RegisterPage />} />
      <Route path="/Dashboard" element={<DashboardPage />} />
      <Route path="/Blog/*" element={<BlogPage />} /> {/* BlogPage é a rota pai */}
      <Route path="/Blog" element={<BlogPage />} /> {/* Rota raiz do Blog */}
      <Route path="/Blog/:postId" element={<BlogPostDetail />} /> {/* Detalhes do post */}
      <Route path="/Blog/query/:tag" element={<BlogBodyByTag />} /> {/* Posts filtados por tag */}
      <Route path="/FAQ" element={<FAQPage />} />
      <Route path="/Quiz" element={<QuizPage />} />
      <Route path="/Emergency" element={<EmergencyPage />} />
      <Route path="/IOSPWA" element={<IosPwaInstructionsPage />} />
      <Route path="/Consultation/*" element={<ConsultationPage />} />
      <Route path="/Consultation" element={<ConsultationPage />} />
      <Route path="/Consultation/:doctorname" element={<DoctorConsultationPage />} />
      <Route path="/Terms" element={<TermsPage />} />
     
      <Route path="*" element={<CubePage />} />
    </Routes>
  );
};

export default AppRoutes;
