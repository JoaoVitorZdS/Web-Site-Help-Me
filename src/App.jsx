import AppRoutes from "./routes";
import { GoogleOAuthProvider } from '@react-oauth/google';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { StyledApp } from "./App.js";
import './App.css'
import { BlogProvider } from "./components/BlogComponents/BlogBody/BlogContext/index.js";
import { ProfessionalsProvider } from "./components/ConsultationComponents/ClientSideConsultation/index.jsx";
import AutoLogin from "./components/LoginPageComponents/AutoLogin/index.js";
import { useGlobalStyleDefault } from "./GlobalStyles.js";
function App() {
  AutoLogin();
  
  return (
    <>
      <GoogleOAuthProvider clientId="752267844561-7d4860a0jkr77s0jal0cft1s0lbp2f8f.apps.googleusercontent.com">
        <BlogProvider>
          <ProfessionalsProvider>
            <StyledApp>
              <AppRoutes />
              <ToastContainer  />
            </StyledApp>
          </ProfessionalsProvider>
        </BlogProvider>  
      </GoogleOAuthProvider>
    </>
  )
}

export default App;
