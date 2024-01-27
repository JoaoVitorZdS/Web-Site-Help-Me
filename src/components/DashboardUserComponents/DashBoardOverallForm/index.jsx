import React, { useContext} from "react";
import { AccessTokenContext } from "../../StyledButtons/ButtonLogInGoogle";
import "../../../firebaseconfig";
import { StyledDashboardEventForm } from "./style";

export const DashboardOverallForm = () => {
  const { accessToken } = useContext(AccessTokenContext)
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
