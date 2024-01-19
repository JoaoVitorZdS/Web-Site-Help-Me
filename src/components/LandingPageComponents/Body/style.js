import styled from "styled-components";
import GlobalStyleDefault from "../../../GlobalStyles";

export const StyledBodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: space-between;
  align-items: center;

  #firstContainer {
    display: flex;
    width: 100%;
    min-height: 25%;
    background-color: ${GlobalStyleDefault.colors.primary};
    justify-content: center;
    align-items: center;
    margin-top: 1%;
  }
  #secondContainer {
    display: flex;
    width: 100%;
    height: fit-content;
    background-color: ${GlobalStyleDefault.colors.primary};
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;
    bottom: 0%;
    
  }
  #thirdContainer {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 15px;
    width: 100%;
    height: 35%;
    background-color: ${GlobalStyleDefault.colors.primary};
    justify-content: center;
    align-items: center;
  }
`;
