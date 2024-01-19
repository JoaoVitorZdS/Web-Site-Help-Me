import React, { useContext, useState, useEffect } from "react";
import Modal from "react-modal";
import CalendarAPI from "../../CalendarApi";
import { AccessTokenContext } from "../../StyledButtons/ButtonLogInGoogle";
import { getFirestore, collection, getDocs, addDoc } from "firebase/firestore";
import "../../../firebaseconfig";
import LoginPage from "../../../pages/Login";
import { StyledDashboardEventForm } from "./style";

export const DashboardOverallForm = () => {
  const { userData, accessToken } = useContext(AccessTokenContext)
  return (
    <>
      {accessToken ? (
        <>
      <StyledDashboardEventForm>
      <h1>Gráfico</h1>
      </StyledDashboardEventForm>
        </>
      ) : (
        <h1>Faça login</h1>
      )}
    </>
  );
};
