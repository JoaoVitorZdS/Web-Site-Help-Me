import React, { useContext } from "react";
import CalendarAPI from "../../CalendarApi";
import { AccessTokenContext } from "../../StyledButtons/ButtonLogInGoogle";
import "../../../firebaseconfig";
import { StyledDashboardEventForm } from "./style";
import Calendar from "react-calendar";

export const DashboardEventForm = () => {
  const { userData, accessToken } = useContext(AccessTokenContext);

  




  
  return (
    <>
      {accessToken ? (
        <>
      <StyledDashboardEventForm>
        <h1>Consultas</h1>
        <Calendar/>
       <CalendarAPI />
</StyledDashboardEventForm>
        </>
      ) : (
        <h1>Faça login</h1>
      )}
    </>
  );
};
