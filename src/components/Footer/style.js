import styled from "styled-components";
import '../../App.css'
export const StyledFooterContainer = styled.div`
  display: flex;
  position: relative;
  bottom: 0px;
  width: 100%;
  height: 30px;
  background-color: transparent;
  justify-content: space-between;
  align-items: end;
  flex-wrap: wrap;
  z-index: 2;
  font-size: small;

  #propertyContainer {
    display: flex;
    width: 20%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: small;
  }
  #termsContainer {
    display: flex;
    flex-direction: column;
    width: 20%;
    height: 100%;
    justify-content: center;
    align-items: baseline;
    font-family: "DolceVita"
    
    
    
  }
  #signContainer {
    display: flex;
    width: 20%;
    justify-content: center;
    align-content: center;
    
  }

  #buttonTermsFooter {
    background-color: transparent;
    border-color: transparent;
    font-family: "DolceVita"
    
  }
  
  #logoFooter{
    height: 90%;
    width: 60px;
  }

  .logo{
    width: 70%;
    
  }
`;
