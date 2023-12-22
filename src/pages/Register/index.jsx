import React from "react";
import { SignUpForm } from "../../components/RegisterPage/SignUpForm";
import { SignupHead } from "../../components/RegisterPage/SignUpHead";
import { StyledRegisterPageContainer } from "./style";
import CalendarAPI from "../../components/CalendarApi/index.jsx"
import { Header } from "../../components/Header/Header.jsx";
import { Footer } from "../../components/Footer/Footer.jsx";

const RegisterPage = () => {
  return (
    <StyledRegisterPageContainer>
      <Header/>
      <CalendarAPI/>
      <SignupHead />
      <SignUpForm />
      <Footer/>
    </StyledRegisterPageContainer>
  );
};

export default RegisterPage;
