import React, { useContext } from "react";
import { StyledConsultationContainer } from "./style";
import { Footer } from "../../components/Footer/Footer";
import { AccessTokenContext } from "../../components/StyledButtons/ButtonLogInGoogle";
import { Header } from "../../components/Header/Header";
import "../../App.css"
import { ClientSideConsultationComponent } from "../../components/ConsultationComponents/ClientSideConsultation";
const ConsultationPage = () => {
  const { accessToken } = useContext(AccessTokenContext);

  return (
    <div>
      {accessToken ? (
        <StyledConsultationContainer>
          <Header/>
          <ClientSideConsultationComponent/>
          <Footer />
        </StyledConsultationContainer>
      ) : (
        <StyledConsultationContainer>
          <Header/>
          <h1 style={{fontFamily: "DolceVita"}}>Faça <a href="/login">Login</a> Para Continuar</h1>
    
          <Footer />
        </StyledConsultationContainer>
      )}
    </div>
  );
};

export default ConsultationPage;
