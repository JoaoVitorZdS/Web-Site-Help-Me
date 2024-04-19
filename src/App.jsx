import AppRoutes from "./routes";
import { GoogleOAuthProvider } from '@react-oauth/google';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { StyledApp } from "./App.js";
import './App.css'
import { BlogProvider } from "./components/BlogComponents/BlogBody/BlogContext/index.js";
import { ProfessionalsProvider } from "./components/ConsultationComponents/ClientSideConsultation/index.jsx";
import AutoLogin from "./components/LoginPageComponents/AutoLogin/index.js";
import { EventProvider } from "./components/CalendarApi/index.jsx";
import { ScrollToTop } from "./components/ScrollToTop/index.jsx";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';  // Importe o CSS para os estilos das animações
function App() {
  AutoLogin();
  useEffect(() => {
    AOS.init({
      duration: 1000,  // Duração da animação em milissegundos
      delay: 0,    // Delay da animação em milissegundos
      once: false,     // Se true, a animação ocorrerá apenas uma vez quando o elemento aparecer na tela
    });
  }, []);
  return (
    <>
      <GoogleOAuthProvider clientId="752267844561-7d4860a0jkr77s0jal0cft1s0lbp2f8f.apps.googleusercontent.com">
        <BlogProvider>
          <ProfessionalsProvider>
            <EventProvider>
              <ScrollToTop/>
              <StyledApp>
                <AppRoutes />
                <ToastContainer  />
              </StyledApp>
            </EventProvider>
          </ProfessionalsProvider>
        </BlogProvider>  
      </GoogleOAuthProvider>
    </>
  )
}

export default App;
