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
      <h5>Fala Login e aproveite toda as funções da Help Me:</h5>
      <ul>
        <li>Consultas com profissionais especializadas</li>
        <li>Atendimento Personalizado</li>
        <li>Avisos e lembretes sobre suas consultas consutlas</li>
      </ul>
      <StyledGoogleSignInButton/>
      
      </div>
    </StyledLoginHead>
  );
};
