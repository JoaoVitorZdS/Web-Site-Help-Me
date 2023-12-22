import styled from "styled-components";
import GlobalStyleDefault from "../../GlobalStyles";
export const StyledHeaderContainer = styled.div`
  display: flex;
  width: 100%;
  height: 5%;
  justify-content: space-between;
  align-items: center;
  background-color: ${GlobalStyleDefault.colors.primary};
  box-shadow: ${GlobalStyleDefault.shadows.large};
  z-index: 1;
  

  #logoContainer {
    display: flex;
    width: 20%;
    height: 100%;
    justify-content: center;
    align-items: center;
  }
  #sloganContainer {
    padding-top: 1%;
    display: flex;
    width: 60%;
    height: 100%;
    justify-content: center;
    align-items: center;
  }
  #buttonsContainer {
    display: flex;
    width: 20%;
    height: 100%;
    padding-right: 25px;
    justify-content: space-between;
    align-items: center;
  }
 
  .logo{
    width: 40%;
    
  }

  .slogan{
    width: 10%;
  }
`;
