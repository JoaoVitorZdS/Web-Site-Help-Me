import React from "react";
import { LoginHead } from "../../components/LoginPageComponents/LoginHead";
import { StyledLoginPageContainer } from "./style";
import { Footer } from "../../components/Footer/Footer";

import Hexagons2 from "../../assets/imgs/pinkClouds.jpg"



const LoginPage = () => {
  return (
    <StyledLoginPageContainer>
      
      <img id="fullHexagon2" src={Hexagons2} alt="Backgroud - Display's pink clouds"></img>
      
        <LoginHead />
        
        <Footer/>
    </StyledLoginPageContainer>
  );
};

export default LoginPage
