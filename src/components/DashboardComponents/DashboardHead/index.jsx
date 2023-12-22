import React from "react";
import { StyledDashboardHead } from "./style";
import logo from "../../../assets/imgs/Logo.svg";
import { Link } from "react-router-dom";

export const DashboardHead = () => {
  const clear = () => {
    localStorage.clear();
  };
  return (
    <StyledDashboardHead>
      <img src={logo} alt="" />
      <button onClick={clear}>
        <Link to="/" style={{ textDecoration: "none", color: "white" }}>
          Sair
        </Link>
      </button>
    </StyledDashboardHead>
  );
};
