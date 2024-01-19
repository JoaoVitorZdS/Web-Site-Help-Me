import { useNavigate } from "react-router-dom";
import { StyledGoogleButtonContainer } from "./style";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { useGoogleLogin } from "@react-oauth/google";
import React, { createContext, useState } from "react";
import axios from "axios";


const AccessTokenContext = createContext();

const AccessTokenProvider = ({ children }) => {
  const [accessToken, setAccessToken] = useState('');
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    picture: ''
  });

  return (
    <AccessTokenContext.Provider value={{ accessToken, setAccessToken, userData, setUserData }}>
      {children}
    </AccessTokenContext.Provider>
  );
};
export const StyledGoogleSignInButton = (props ) => {
    const { setUserData, setAccessToken } = React.useContext(AccessTokenContext);
    const navigate = useNavigate();

    const googleLogin = useGoogleLogin({
        onSuccess: async (tokenResponse) => {
          console.log(tokenResponse);
          const userInfo = await axios.get(
            'https://www.googleapis.com/oauth2/v3/userinfo',
            { headers: { Authorization: `Bearer ${tokenResponse.access_token}` } },
          );
          const { name, email, picture } = userInfo.data;
          setUserData({ name, email, picture });
         
          setAccessToken(tokenResponse.access_token);
          console.log(userInfo);
          navigate("/");
        },
        onError: errorResponse => console.log(errorResponse),
        scope: "https://www.googleapis.com/auth/calendar",
      });

    return(
        <>
        <StyledGoogleButtonContainer onClick={googleLogin}>
        <FcGoogle size={22}/>
        <p id="labelStyledGoogleButton">Continuar pelo Google</p>
        <FcGoogle size={22}/>
        </StyledGoogleButtonContainer>
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
        </>
    )
}
export { AccessTokenProvider,  AccessTokenContext };