import { useNavigate } from "react-router-dom";
import { StyledGoogleButtonContainer } from "./style";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { useGoogleLogin } from "@react-oauth/google";
import React, { createContext, useState } from "react";
import axios from "axios";
import { getFirestore, collection, addDoc, getDocs, query, where } from "firebase/firestore";
import { toast } from "react-toastify";
const AccessTokenContext = createContext();

const AccessTokenProvider = ({ children }) => {
  const [accessToken, setAccessToken] = useState("");
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    picture: "",
  });

  return (
    <AccessTokenContext.Provider
      value={{ accessToken, setAccessToken, userData, setUserData }}
    >
      {children}
    </AccessTokenContext.Provider>
  );
};

export const StyledGoogleSignInButton = (props) => {
  const { setUserData, setAccessToken } = React.useContext(AccessTokenContext);
  const navigate = useNavigate();

  const saveUserDataToFirebase = async (userInfo) => {
    const db = getFirestore();
    const clientsCollection = collection(db, "clients");
  
    try {
      const { name, email, picture } = userInfo.data;
  
      // Verificar se o email já está registrado na coleção
      const querySnapshot = await getDocs(
        query(clientsCollection, where("email", "==", email))
      );
  
      if (querySnapshot.empty) {
        // Se não houver documentos com o mesmo email, então o usuário não está registrado
        await addDoc(clientsCollection, { name, email, picture });
        console.log("Novo usuário registrado no Firestore!");
      } else {
        console.log("Usuário já registrado no Firestore. Pulando a etapa de registro.");
      }
    } catch (error) {
      console.error("Erro ao salvar dados do usuário no Firestore:", error);
    }
  };
  

  const googleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      console.log(tokenResponse);
      const userInfo = await axios.get(
        "https://www.googleapis.com/oauth2/v3/userinfo",
        {
          headers: { Authorization: `Bearer ${tokenResponse.access_token}` },
        }
      );
      const { name, email, picture } = userInfo.data;

      setUserData({ name, email, picture });
      setAccessToken(tokenResponse.access_token);

      // Save user data to Firebase before redirection
      await saveUserDataToFirebase(userInfo);

      toast("Login bem sucedido!", {type: "success"})
      navigate("/");
    },
    onError: (errorResponse) => console.log(errorResponse),
    scope: "https://www.googleapis.com/auth/calendar",
  });
  

  return (
    <>
      <StyledGoogleButtonContainer onClick={googleLogin}>
        <FcGoogle size={22} />
        <p id="labelStyledGoogleButton">Continuar pelo Google</p>
        <FcGoogle size={22} />
      </StyledGoogleButtonContainer>
      
      {/* Add similar code blocks for other authentication providers
      <StyledGoogleButtonContainer onClick={googleLogin}>
        <FaApple  size={22}/>
        <p id="labelStyledGoogleButton">Continuar pelo Apple Id</p>
        <FaApple  size={22}/>
        </StyledGoogleButtonContainer>
        <StyledGoogleButtonContainer onClick={googleLogin}>
        <FaFacebook   size={22}/>
        <p id="labelStyledGoogleButton">Continuar pelo Facebook</p>
        <FaFacebook   size={22}/>
        </StyledGoogleButtonContainer>
        <StyledGoogleButtonContainer onClick={googleLogin}>
        <IoIosMail    size={22}/>
        <p id="labelStyledGoogleButton">Continuar com credenciais</p>
        <IoIosMail    size={22}/>
        </StyledGoogleButtonContainer>
      */}
    </>
  );
};

export { AccessTokenProvider, AccessTokenContext };
