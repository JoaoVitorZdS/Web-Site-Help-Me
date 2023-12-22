import React from "react";
import { StyledSignUpHead } from "./style";
import logo from "../../../assets/imgs/Logo.svg";
import { Link } from "react-router-dom";
export const SignupHead = () => {
  return (
    <StyledSignUpHead>
      <img src={logo} alt="" />
      <button>
        <Link to="/" style={{ textDecoration: "none", color: "white" }}>
          Voltar
        </Link>
      </button>
    </StyledSignUpHead>
  );
};
