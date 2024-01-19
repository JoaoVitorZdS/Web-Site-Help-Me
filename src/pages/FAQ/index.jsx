import React, { useContext } from "react";
import { StyledFAQContainer } from "./style";
import { Footer } from "../../components/Footer/Footer";
import { AccessTokenContext } from "../../components/StyledButtons/ButtonLogInGoogle";
import { FAQPageBody } from "../../components/FAQComponents/FAQBody";
import { Header } from "../../components/Header/Header";



const FAQPage = () => {
  const { accessToken } = useContext(AccessTokenContext);

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
