import "../../../firebaseconfig";
import "../../../App.css"
import React, { useContext } from "react";
import { AccessTokenContext } from "../../StyledButtons/ButtonLogInGoogle";
import { StyledDashboardEventForm } from "./style";
import ProfessionalConsultations from "../../ConsultationComponents/ProfessionalSideConsultation/indes";
import GlobalStyleDefault from "../../../GlobalStyles";


export const DashboardEventForm = () => {
  const {  accessToken } = useContext(AccessTokenContext);
  return (
    <>
      {accessToken ? (
        
          <StyledDashboardEventForm>
            <h1 style={{color: `${GlobalStyleDefault.colors.secondary}`, fontFamily: "DolceVita"}}>Consultas</h1>
            <ProfessionalConsultations/>
          </StyledDashboardEventForm>
       
      ) : (
        <h1>Faça <a href="/login">login</a> para continuar.</h1>
      )}
    </>
  );
};
