import styled from "styled-components";
import GlobalStyleDefault from "../../../GlobalStyles";

export const StyledBodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 89%;
  justify-content: space-between;
  align-items: center;

  #firstContainer {
    display: flex;
    width: 100%;
    height: 25%;
    background-color: ${GlobalStyleDefault.colors.primary};
    justify-content: center;
    align-items: center;
    margin-top: 1%;
  }
  #secondContainer {
    display: flex;
    width: 100%;
    height: 40%;
    background-color: ${GlobalStyleDefault.colors.primary};
    justify-content: center;
    align-items: center;
  }
  #thirdContainer {
    display: flex;
    width: 100%;
    height: 35%;
    background-color: ${GlobalStyleDefault.colors.primary};
    justify-content: center;
    align-items: center;
  }
`;
