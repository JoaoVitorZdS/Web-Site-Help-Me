import React, { useContext } from "react";
import CalendarAPI from "../../CalendarApi";
import { AccessTokenContext } from "../../StyledButtons/ButtonLogInGoogle";
import "../../../firebaseconfig";
import { StyledDashboardEventForm } from "./style";

export const DashboardEventForm = () => {
  const { userData, accessToken } = useContext(AccessTokenContext);

  




  
  return (
    <>
      {accessToken ? (
        <>
      <StyledDashboardEventForm>
        <h1>Consultas</h1>
       <CalendarAPI />
</StyledDashboardEventForm>
        </>
      ) : (
        <h1>Faça login</h1>
      )}
    </>
  );
};
