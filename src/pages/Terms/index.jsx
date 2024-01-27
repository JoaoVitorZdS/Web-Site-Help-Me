import React from "react";
import { StyledTermsContainer } from "./style";
import { Footer } from "../../components/Footer/Footer";
import { FAQPageBody } from "../../components/FAQComponents/FAQBody";
import { Header } from "../../components/Header/Header";



const TermsPage = () => {

  return (
    <div>
        <StyledTermsContainer>
          <Header/>
          
          <FAQPageBody />
          <Footer/>
        </StyledTermsContainer>
    </div>
  );
};

export default TermsPage;
