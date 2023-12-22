import styled from "styled-components";
import GlobalStyleDefault from "../../GlobalStyles";
export const StyledFooterContainer = styled.div`
  display: flex;
  width: 100%;
  height: 50px;
  background-color: white;
  justify-content: space-between;
  align-items: center;
  box-shadow: ${GlobalStyleDefault.shadows.footer};
  z-index: 1;
  font-size: small;

  #propertyContainer {
    display: flex;
    width: 20%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  #termsContainer {
    display: flex;
    flex-direction: column;
    width: 20%;
    height: 100%;
    justify-content: center;
    align-items: baseline;
    
    
    
  }
  #signContainer {
    display: flex;
    width: 10%;
    height: 100%;
    justify-content: center;
    align-content: center;
    
  }

  #buttonTermsFooter {
    background-color: transparent;
    border-color: transparent;
    
  }
  
  #logoFooter{
    height: 90%;
    width: 60px;
  }

  .logo{
    width: 70%;
    
  }
`;
