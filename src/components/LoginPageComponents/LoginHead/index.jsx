import React from "react";
import { StyledLoginHead } from "./style";
import logo from "../../../assets/imgs/LogoHelpMe.jpeg";
import { useNavigate } from "react-router-dom";
import { StyledGoogleSignInButton } from "../../StyledButtons/ButtonLogInGoogle";

export const LoginHead = () => {
  const navigate = useNavigate()
  return (
    <StyledLoginHead>
      <div id="signInContainerLoginPage">
      <img src={logo} alt="Logo Help Me" onClick={() => {navigate("/")}} />
      
      <StyledGoogleSignInButton/>
      
      </div>
    </StyledLoginHead>
  );
};
