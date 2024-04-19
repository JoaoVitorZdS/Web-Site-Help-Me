import React, { useContext} from "react";
import { AccessTokenContext } from "../../StyledButtons/ButtonLogInGoogle";
import "../../../firebaseconfig";
import { StyledDashboardEventForm } from "./style";
import GlobalStyleDefault from "../../../GlobalStyles";

export const DashboardOverallForm = () => {
  const { accessToken } = useContext(AccessTokenContext)
  return (
    <>
      {accessToken ? (
        <>
      <StyledDashboardEventForm>
      <h1 style={{color: `${GlobalStyleDefault.colors.secondarystrong}`, fontFamily: "DolceVita", justifyContent: "center", display: "flex"}}>Consultas</h1>

      </StyledDashboardEventForm>
        </>
      ) : (
        <h1>Faça login</h1>
      )}
    </>
  );
};
