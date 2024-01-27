import AppRoutes from "./routes";
import { GoogleOAuthProvider } from '@react-oauth/google';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { StyledApp } from "./App.js";
import './App.css'
function App() {
  return (
    <>
      <GoogleOAuthProvider clientId="752267844561-7d4860a0jkr77s0jal0cft1s0lbp2f8f.apps.googleusercontent.com">
        <StyledApp>
          <AppRoutes />
          <ToastContainer  />
        </StyledApp>
      </GoogleOAuthProvider>
    </>
  )
}

export default App;
