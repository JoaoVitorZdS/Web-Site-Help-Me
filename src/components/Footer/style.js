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
  background: rgba(255, 255, 255, 0.19);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.25);

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
    font-family: "DolceVita";
    font-size: 0.8rem;
    
    
    
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

  @media (max-width: 857px) {
    #termsContainer{
      font-size: 0.6rem;
    }
 
  }
  @media (max-width: 632px) {
    #termsContainer{
      text-align: center;
      
    }
 
  }
`;
