import styled from "styled-components";
import GlobalStyleDefault from "../../GlobalStyles";
export const StyledHeaderContainer = styled.div`
  display: flex;
  width: 98%;
  min-height: 125px;
  height: 135px;
  max-height: 145px;
  justify-content: space-between;
  align-items: center;
  //background-color: ${GlobalStyleDefault.colors.secondary};
  padding-top: 1%;

  
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
  
    min-width: fit-content;
    height: 100%;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;
    box-shadow: ${GlobalStyleDefault.shadows.medium};
    z-index: 7;
    background: ${GlobalStyleDefault.colors.gradientheader};
    border-radius:  10% / 50%;

    .name{
      height: 100%;
    width: 70%;
  }
    .logo{
    height: 99%;
    width: 28%;
    border-radius: 250px;
    
    background-color: #ffffff88;
   

  }
  }
  #sloganContainer {
    
    padding: 1%;
    display: flex;
    max-width: 30%;
    width: fit-content;
    height: 100%;
    justify-content: center;
    align-items: center;
    z-index: 7;
   
    border-radius:  10% / 50%;
  
    img{
      min-width: 80px;
      
    }
    .slogan{
    height: 100%;
    
  
  }
  }
  #buttonsContainer {
    display: flex;
    max-width: min-content;
    min-width: fit-content;
    height: 100%;
    padding-inline: 2%;
    gap: 15px;
    justify-content: center;
    align-items: center;
    z-index: 7;
    box-shadow: ${GlobalStyleDefault.shadows.medium};
    background: ${GlobalStyleDefault.colors.gradientheader};
    border-radius:  10% / 50%;
    background-blend-mode: soft-light;
    
  }
 
  
  
  

  @media (max-width: 330px) {
  
}
`;
