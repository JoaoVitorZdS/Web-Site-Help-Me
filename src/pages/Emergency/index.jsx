import React from "react";
import { StyledQuizContainer } from "./style";
import { Footer } from "../../components/Footer/Footer";

import { Header } from "../../components/Header/Header";
import { EmergencyPageBody } from "../../components/EmergencyComponents";



const EmergencyPage = () => {

  return (
    <div>
        <StyledQuizContainer>
          <Header/>
          <EmergencyPageBody/>
          <Footer/>
        </StyledQuizContainer>
    </div>
  );
};

export default EmergencyPage;
