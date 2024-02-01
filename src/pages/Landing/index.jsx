import React from "react";
import { Header } from "../../components/Header/Header";
import { StyledLandingPageContainer } from "./style";
import { Footer } from "../../components/Footer/Footer";
import { Body } from "../../components/LandingPageComponents/Body/Body";
import { FixedButtons } from "../../components/StyledButtons/FixedButtonsAllScreens";


const LandingPage = () => {


  return (
    <StyledLandingPageContainer>
      <Header/>
      <Body/>
      <div style={{width: "95%", position: "sticky", bottom: "20px"}}>
                <FixedButtons/>

        </div>
      <Footer/>
    </StyledLandingPageContainer>
  );
};

export default LandingPage;
