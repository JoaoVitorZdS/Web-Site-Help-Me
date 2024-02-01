import React from "react";
import { LoginHead } from "../../components/LoginPageComponents/LoginHead";
import { StyledLoginPageContainer } from "./style";
import { Footer } from "../../components/Footer/Footer";

import Hexagons2 from "../../assets/imgs/pinkClouds.jpg"



const LoginPage = () => {
  return (
    <StyledLoginPageContainer>
      
      
        <LoginHead />
        
        <Footer/>
    </StyledLoginPageContainer>
  );
};

export default LoginPage
