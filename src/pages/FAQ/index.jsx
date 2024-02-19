import React from "react";
import { StyledFAQContainer } from "./style";
import { Footer } from "../../components/Footer/Footer";
import { FAQPageBody } from "../../components/FAQComponents/FAQBody";
import { Header } from "../../components/Header/Header";


const FAQPage = () => {

  return (
    <div>
        <StyledFAQContainer>
          <Header/>
          <FAQPageBody />
          <Footer/>
        </StyledFAQContainer>
    </div>
  );
};

export default FAQPage;
