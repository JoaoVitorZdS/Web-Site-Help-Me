import React from "react";
import { StyledIOSPWAContainer } from "./style";
import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import instructions from "../../assets/imgs/IOS_PWA_Instructions.png"


const IosPwaInstructionsPage = () => {

  return (
    <div>
        <StyledIOSPWAContainer>
          <Header/>
          <img alt="Instruções IOS PWA" src={instructions} />
          <Footer/>
        </StyledIOSPWAContainer>
    </div>
  );
};

export default IosPwaInstructionsPage;
