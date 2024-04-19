import React, { useContext } from "react";
import CalendarAPI from "../../CalendarApi";
import { AccessTokenContext } from "../../StyledButtons/ButtonLogInGoogle";
import "../../../firebaseconfig";
import { StyledDashboardEventForm } from "./style";
import GlobalStyleDefault from "../../../GlobalStyles";

export const DashboardEventUserForm = () => {
  const { accessToken } = useContext(AccessTokenContext);

  




  
  return (
    <>
      {accessToken ? (
        <>
      <StyledDashboardEventForm>
          <h1 style={{color: `${GlobalStyleDefault.colors.secondarystrong}`, fontFamily: "DolceVita"}}>Consultas</h1>
          <CalendarAPI />
      </StyledDashboardEventForm>
        </>
      ) : (
        <h1>Faça login</h1>
      )}
    </>
  );
};
