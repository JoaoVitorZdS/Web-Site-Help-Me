import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { FaQuestionCircle } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import GlobalStyleDefault from "../../GlobalStyles";

const StyledIcon = styled.div`
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
  
  border-radius: 50px;
 

  &:hover {
    transform: scale(1.5);
    
  }
`;

const FixedButtonsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: relative;
  
`;

export const FixedButtons = () => {
  const navigate = useNavigate();

  return (
    <FixedButtonsWrapper>
      <StyledIcon onClick={() => navigate("/FAQ")}>
        <FaQuestionCircle size={28} color={GlobalStyleDefault.colors.secondarystrong} />
      </StyledIcon>
      <StyledIcon onClick={() => navigate("/blog")}>
        <FaWhatsapp size={28} color={GlobalStyleDefault.colors.secondarystrong} />
      </StyledIcon>
    </FixedButtonsWrapper>
  );
};
