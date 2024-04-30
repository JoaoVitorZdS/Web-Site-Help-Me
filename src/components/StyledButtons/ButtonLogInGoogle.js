import { useNavigate } from "react-router-dom";
import { StyledGoogleButtonContainer } from "./style";
import { FcGoogle } from "react-icons/fc";
import React, { createContext, useState } from "react";
import axios from "axios";
import { getFirestore, collection, addDoc, getDocs, query, where, setDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify";
import Cookies from "js-cookie";
import { useGoogleLogin } from "@react-oauth/google";

const AccessTokenContext = createContext();

const AccessTokenProvider = ({ children }) => {
  const [accessToken, setAccessToken] = useState("");
  const [refreshToken, setRefreshToken] = useState("");
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    picture: "",
  });

  return (
    <AccessTokenContext.Provider
      value={{ accessToken, setAccessToken, refreshToken, setRefreshToken, userData, setUserData }}
    >
      {children}
    </AccessTokenContext.Provider>
  );
};

export const StyledGoogleSignInButton = (props) => {
  const { setUserData, setAccessToken, setRefreshToken } = React.useContext(AccessTokenContext);
  const navigate = useNavigate();

  const saveUserDataToFirebase = async (userInfo) => {
    const db = getFirestore();
    const clientsCollection = collection(db, "clients");
    const { name, email, picture: googlePicture } = userInfo.data;
  
    try {
      // Verificar se o email já está registrado na coleção
      const querySnapshot = await getDocs(
        query(clientsCollection, where("email", "==", email))
      );
  
      if (querySnapshot.empty) {
        // Se não houver documentos com o mesmo email, então o usuário não está registrado
        await addDoc(clientsCollection, { name, email, picture: googlePicture });
        console.log("Novo usuário registrado no Firestore!");
        setUserData({ name, email, picture: googlePicture });
      } else {
        // Se o usuário já estiver registrado, verifique se ele já tem uma foto personalizada
        const userDataDoc = querySnapshot.docs[0];
        const userDataFromFirestore = userDataDoc.data();
        if (userDataFromFirestore.picture) {
          // Use a foto personalizada existente no Firestore
          setUserData({ name, email, picture: userDataFromFirestore.picture });
        } else {
          // Se não houver uma foto definida no Firestore, use a do Google
          await setDoc(doc(db, "clients", userDataDoc.id), { picture: googlePicture }, { merge: true });
          setUserData({ name, email, picture: googlePicture });
        }
      }
    } catch (error) {
      console.error("Erro ao salvar dados do usuário no Firestore:", error);
    }
  };
  
  const googleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      const userInfo = await axios.get(
        "https://www.googleapis.com/oauth2/v3/userinfo",
        {
          headers: { Authorization: `Bearer ${tokenResponse.access_token}` },
        }
      );

      setAccessToken(tokenResponse.access_token);
      setRefreshToken(tokenResponse.refresh_token);

      // Save or update user data in Firebase before redirection
      await saveUserDataToFirebase(userInfo);
      Cookies.set('token', `${tokenResponse.access_token}`, { expires: 30 }); // Set expiration to 30 days
      if (tokenResponse.refresh_token) {
        Cookies.set('refresh_token', `${tokenResponse.refresh_token}`, { expires: 365 });
      }
      toast("Login bem sucedido!", {type: "success"});
      navigate("/");
    },
    onError: (errorResponse) => console.log(errorResponse),
    scope: "https://www.googleapis.com/auth/userinfo.profile",
    access_type: 'offline', // Request offline access to get a refresh token
  });
  
  return (
    <>
      <StyledGoogleButtonContainer onClick={googleLogin}>
        <FcGoogle size={22} />
        <p id="labelStyledGoogleButton">Continuar pelo Google</p>
        <FcGoogle size={22} />
      </StyledGoogleButtonContainer>
    </>
  );
};

export { AccessTokenProvider, AccessTokenContext };