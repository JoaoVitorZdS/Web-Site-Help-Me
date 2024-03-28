import React, { useContext} from "react";
import { AccessTokenContext } from "../../StyledButtons/ButtonLogInGoogle";
import "../../../firebaseconfig";
import { StyledDashboardEventForm } from "./style";
import GlobalStyleDefault from "../../../GlobalStyles";
import "../../../App.css"
import ChartComponent from "./Chart";

export const DashboardOverallForm = () => {
  const { accessToken } = useContext(AccessTokenContext)
  return (
    <>
      {accessToken ? (
        <>
      <StyledDashboardEventForm>
      <h1 style={{color: `${GlobalStyleDefault.colors.secondary}`, fontFamily: "DolceVita"}}>Histórico</h1>

      <ChartComponent/>
      
      </StyledDashboardEventForm>
        </>
      ) : (
        <h1>Faça login</h1>
      )}
    </>
  );
};
