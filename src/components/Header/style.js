import styled from "styled-components";
import GlobalStyleDefault from "../../GlobalStyles";
export const StyledHeaderContainer = styled.div`
  display: flex;
  width: 100%;
  height: 5%;
  min-height: 75px;
  justify-content: space-between;
  align-items: center;
  background-color: ${GlobalStyleDefault.colors.primary};
  box-shadow: ${GlobalStyleDefault.shadows.large};
  z-index: 1;
  

  #logoContainer {
    display: flex;
    width: 23%;
    height: 100%;
    justify-content: start;
    align-items: center;
    padding-left: 2%;
  }
  #sloganContainer {
    padding-top: 1%;
    display: flex;
    width: 52%;
    height: 100%;
    justify-content: center;
    align-items: center;
  }
  #buttonsContainer {
    display: flex;
    width: 25%;
    height: 100%;
    padding-right: 2%;
    gap: 15px;
    justify-content: end;
    align-items: center;
  }
 
  .logo{
    width: 40%;
    
  }
  .name{
    width: 70%;
  }
  .slogan{
    width: 50%;
  
  }
`;
