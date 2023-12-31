import React from "react";
import { Header } from "../../components/Header/Header";
import { StyledLandingPageContainer } from "./style";
import { Footer } from "../../components/Footer/Footer";
import { Body } from "../../components/LandingPageComponents/Body/Body";


const LandingPage = () => {


  return (
    <StyledLandingPageContainer>
      <Header/>
      <Body/>
      <Footer/>
    </StyledLandingPageContainer>
  );
};

export default LandingPage;
