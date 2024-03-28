import React from "react";
import { StyledTermsContainer } from "./style";
import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import { TermsPageBody } from "../../components/Terms/TermsBody";



const TermsPage = () => {

  return (
    <div>
        <StyledTermsContainer>
          <Header/>
          
          <TermsPageBody />
          <Footer/>
        </StyledTermsContainer>
    </div>
  );
};

export default TermsPage;
