import styled from "styled-components";
import GlobalStyleDefault from "../../GlobalStyles";
export const StyledHeaderContainer = styled.div`
  display: flex;
  width: 100%;
  min-height: 105px;
  max-height: 125px;
  justify-content: space-between;
  align-items: center;
  background-color: ${GlobalStyleDefault.colors.primary};
  box-shadow: ${GlobalStyleDefault.shadows.large};
  z-index: 1;

  @media (max-width: 520px) {
    justify-content: center;
    
    #logoContainer {
      width: 80% !important;
      position: relative;
      left: 0;
      justify-content: space-around !important;
      img{
        max-width: 90px;
      }
    }
  }
  #mobileMenu{
    width: 7%;
    height: auto;
    position: relative;
    right: 0;
    margin-right: 5%;
   
    border-radius: 25px;
    display: flex;
    justify-content: center;
    align-content: center;
  }


  #mobileMenuContent{
    position: absolute;
    left: 0;
    width: 100%;
    height: fit-content;
    background-color: aqua;
    margin-top: 150%;
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;
    margin-left: -160%;
    
  }

  #logoContainer {
    display: flex;
    width: 23%;
    height: 100%;
    justify-content: start;
    align-items: center;
    padding-left: 2%;

    img{
      min-width: 80px;
    }
  }
  #sloganContainer {
    padding-top: 1%;
    display: flex;
    width: 52%;
    height: 100%;
    justify-content: center;
    align-items: center;
    img{
      min-width: 80px;
      
    }
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

  @media (max-width: 330px) {
  
}
`;
